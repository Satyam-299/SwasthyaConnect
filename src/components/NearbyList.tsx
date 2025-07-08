
'use client';

import { useState } from 'react';
import type { Hospital, NearbyHospital } from '../../data/hospitals';
import HospitalCard from './HospitalCard';
import { findNearbyHospitals } from '../../lib/actions/hospitalActions';
import { getDistance } from '../../lib/utils';

type HospitalToShow = Hospital | NearbyHospital;

export default function NearbyList() {
  const [hospitals, setHospitals] = useState<HospitalToShow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number, lng: number } | null>(null);

  const handleFindNearby = () => {
    setIsLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude: lat, longitude: lng } = position.coords;
        setUserLocation({ lat, lng });
        try {
          const nearby = await findNearbyHospitals({ lat, lng });
          setHospitals(nearby);
        } catch (err) {
          setError('Could not fetch nearby hospitals.');
        } finally {
          setIsLoading(false);
        }
      },
      () => {
        setError('Unable to retrieve your location.');
        setIsLoading(false);
      }
    );
  };
  
  const sortedHospitals = userLocation ? [...hospitals].sort((a,b) => getDistance(userLocation, a.location) - getDistance(userLocation, b.location)) : hospitals;

  return (
    <div>
      <button onClick={handleFindNearby} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Find Nearby Hospitals'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {sortedHospitals.map(h => (
          <HospitalCard
            key={'place_id' in h ? h.place_id : h.id}
            hospital={h}
            distance={userLocation ? getDistance(userLocation, h.location) : undefined}
          />
        ))}
      </div>
    </div>
  );
}
