
'use client';

import dynamic from 'next/dynamic';
import { LoaderCircle } from 'lucide-react';

// Dynamically import the main component to ensure it only runs on the client
const DigitalSupportComponent = dynamic(() => import('@/components/DigitalSupport'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center">
      <LoaderCircle className="h-10 w-10 animate-spin text-primary" />
    </div>
  ),
});

export default function DigitalSupportPage() {
  return <DigitalSupportComponent />;
}
