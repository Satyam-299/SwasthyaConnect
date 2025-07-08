
'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Hospital } from '../../data/hospitals';
import { hospitals as initialHospitals } from '../../data/hospitals';
import { db } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import HospitalCard from './HospitalCard';

type HospitalWithId = Hospital & { firestoreId: string };

export default function CuratedList() {
  const [hospitals, setHospitals] = useState<HospitalWithId[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      setIsLoading(true);
      setError(null);

      const fallbackToStaticData = () => {
        const staticDataWithId = initialHospitals.map(h => ({
            ...h,
            firestoreId: h.id.toString(),
        }));
        setHospitals(staticDataWithId);
      };
      
      if (!db) {
        console.warn("Firebase not configured. Showing default list.");
        fallbackToStaticData();
        setIsLoading(false);
        return;
      }
      
      try {
        const hospitalsRef = collection(db, "hospitals");
        const querySnapshot = await getDocs(hospitalsRef);

        if (querySnapshot.empty) {
          fallbackToStaticData();
        } else {
          const fetchedHospitals: HospitalWithId[] = [];
          querySnapshot.forEach(doc => {
            fetchedHospitals.push({
              ...(doc.data() as Hospital),
              firestoreId: doc.id,
            });
          });
          setHospitals(fetchedHospitals);
        }
      } catch (err) {
        console.error("Error fetching hospitals:", err);
        setError("Could not retrieve data. Displaying default list.");
        fallbackToStaticData();
      } finally {
        setIsLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  const filteredHospitals = useMemo(() => {
    if (!searchTerm) return hospitals;
    return hospitals.filter(h => h.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, hospitals]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter hospitals by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      {isLoading && <p>Loading hospitals...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {filteredHospitals.map(hospital => (
          <HospitalCard key={hospital.firestoreId} hospital={hospital} />
        ))}
      </div>
    </div>
  );
}
