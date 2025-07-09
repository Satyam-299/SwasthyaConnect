
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarPlus, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] p-4">
      <Card className="max-w-xl text-center">
        <CardHeader>
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <CalendarPlus className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold font-headline">Checkpoint 3: Appointment Booking</CardTitle>
          <CardDescription className="text-lg">
            This checkpoint focuses on the appointment booking system and an updated header for authenticated users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Click the button below to navigate to the patient assistance page, where you can book an appointment. You will need to be logged in to proceed.
          </p>
        </CardContent>
        <CardContent>
            <Button asChild size="lg">
                <Link href="/assistance">Go to Assistance Page <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
