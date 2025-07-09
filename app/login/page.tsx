
'use client';

import UserLoginForm from '@/components/UserLoginForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-80px)] w-full items-center justify-center p-4">
        <div className="absolute inset-0 z-0">
            <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=2070&auto=format&fit=crop"
                alt="Doctor with tablet"
                fill
                className="object-cover"
                data-ai-hint="doctor technology"
            />
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 w-full max-w-md">
            <Card className="bg-card/80">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-headline">User Login</CardTitle>
                    <CardDescription>
                        Please sign in to book an appointment.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <UserLoginForm />
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
