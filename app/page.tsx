
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to SwasthyaConnect</h1>
      <p className="text-lg text-muted-foreground mb-8">This checkpoint demonstrates the Digital Support feature.</p>
      <Button asChild>
        <Link href="/digital-support">Go to Digital Support Page</Link>
      </Button>
    </div>
  );
}
