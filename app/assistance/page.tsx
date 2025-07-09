
'use client';

import AppointmentForm from '@/components/AppointmentForm';

export default function AssistancePage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-2">Book an Appointment</h1>
                <p className="text-lg text-muted-foreground">Fill in the details below to schedule your visit.</p>
            </div>
            <AppointmentForm />
        </div>
    );
}
