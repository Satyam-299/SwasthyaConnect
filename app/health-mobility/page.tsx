
'use client';

import dynamic from 'next/dynamic';
import { LoaderCircle } from 'lucide-react';

const HealthMobilityWithNoSSR = dynamic(
  () => import('../../components/HealthMobility'),
  { 
    ssr: false,
    loading: () => (
        <div className="flex justify-center items-center h-[calc(100vh-80px)]">
            <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
        </div>
    )
  }
);

export default function HealthMobilityPage() {
    return (
        <HealthMobilityWithNoSSR />
    );
}
