
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoaderCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    if (!auth) return;
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({ title: 'Login Successful!' });
      router.push('/digital-support');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        // If user doesn't exist, create a new account
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          toast({ title: 'Account Created & Logged In!' });
          router.push('/digital-support');
        } catch (createError: any) {
          toast({ variant: 'destructive', title: 'Sign Up Failed', description: createError.message });
        }
      } else {
        toast({ variant: 'destructive', title: 'Login Failed', description: error.message });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login or Sign Up</CardTitle>
          <CardDescription>Enter credentials to access digital support. A test account will be created if it doesn't exist.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button onClick={handleSignIn} disabled={isLoading} className="w-full">
            {isLoading ? <LoaderCircle className="animate-spin" /> : 'Continue'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
