
'use client';

import type { Hospital, NearbyHospital } from '../../data/hospitals';

type HospitalWithId = (Hospital | NearbyHospital) & { firestoreId?: string };

type HospitalCardProps = {
  hospital: HospitalWithId;
  distance?: number;
};

function isNearbyHospital(hospital: HospitalWithId): hospital is NearbyHospital {
    return (hospital as NearbyHospital).place_id !== undefined;
}

export default function HospitalCard({ hospital, distance }: HospitalCardProps) {
  const cardStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px'
  };

  if (isNearbyHospital(hospital)) {
    return (
        <div style={cardStyle}>
            <h3>{hospital.name}</h3>
            <p>{hospital.address}</p>
            {distance !== undefined && <p>Distance: {distance.toFixed(1)} km</p>}
            <p><small>Note: This is a public listing. Live data is not available.</small></p>
        </div>
    );
  }

  return (
    <div style={cardStyle}>
        <h3>{hospital.name}</h3>
        <p>{hospital.address}</p>
        <p>General Beds: {hospital.beds.general.available} / {hospital.beds.general.total}</p>
        <p>ICU Beds: {hospital.beds.icu.available} / {hospital.beds.icu.total}</p>
        <p>Oxygen: {hospital.oxygen.available ? 'Available' : 'Low'}</p>
        {distance !== undefined && <p>Distance: {distance.toFixed(1)} km</p>}
    </div>
  );
}
