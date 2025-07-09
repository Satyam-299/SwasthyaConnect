
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';

export default function UserLoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('testuser@example.com');
  const [password, setPassword] = useState('password');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Firebase is not configured.',
      });
      return;
    }
    setIsLoading(true);
    try {
      // For testing, we can sign in with a dummy account.
      // In a real app, you'd use user-provided credentials.
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: 'Login Successful',
        description: 'Redirecting...',
      });
      // Redirect to the assistance page after login
      router.push('/assistance');
    } catch (error: any) {
      // If the test user doesn't exist, create it.
      if (error.code === 'auth/user-not-found') {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast({
                title: 'Test Account Created',
                description: 'Logging you in automatically...',
            });
            router.push('/assistance');
        } catch(createError: any) {
             toast({ variant: 'destructive', title: 'Login Failed', description: createError.message });
        }
      } else {
        toast({
            variant: 'destructive',
            title: 'Login Failed',
            description: 'Invalid email or password.',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-6">
      <form onSubmit={handleLogin}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email-user">Email</Label>
            <Input
              id="email-user"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password-user">Password</Label>
            <div className="relative">
              <Input
                id="password-user"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full mt-6" disabled={isLoading || !auth}>
          {isLoading ? <LoaderCircle className="h-4 w-4 mr-2 animate-spin" /> : null}
          {isLoading ? 'Signing In...' : 'Sign in'}
        </Button>
      </form>
    </div>
  );
}
