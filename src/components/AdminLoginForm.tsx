'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function AdminLoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Admin login successful!');
            router.push('/admin/dashboard');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', padding: '2rem', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center', margin: '0 0 1rem 0' }}>Admin Login</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: '10px', fontSize: '1rem' }}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ padding: '10px', fontSize: '1rem' }}
                />
            </div>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            <button type="submit" disabled={isLoading} style={{ padding: '12px', fontSize: '1rem', cursor: 'pointer' }}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
}