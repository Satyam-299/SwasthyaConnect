
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UserLoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // No auth logic for Checkpoint 2
        alert('Login form submitted (UI only)');
    };

    return (
        <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-md border">
            <h1 className="text-2xl font-bold text-center text-primary">User Login</h1>
            <form onSubmit={handleLogin} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md text-sm shadow-sm placeholder-foreground/40
                          focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                </div>

                <div>
                    <label htmlFor="password"  className="block text-sm font-medium text-foreground/80">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md text-sm shadow-sm placeholder-foreground/40
                        focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                </div>
                
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Sign in
                    </button>
                </div>
            </form>
             <p className="mt-4 text-center text-sm text-foreground/60">
                Don't have an account?{' '}
                <Link href="/signup" className="font-medium text-primary hover:text-primary/90">
                    Sign up
                </Link>
            </p>
        </div>
    );
}
