'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function AdminDashboard() {
    const { user, role, loading } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await signOut(auth);
        router.push('/login/admin');
    };

    if (loading) {
        return <p>Loading dashboard...</p>;
    }
    
    // Protect the route
    if (role !== 'admin') {
        // You can redirect or show an "Access Denied" message
        if (typeof window !== 'undefined') {
            router.push('/login/admin');
        }
        return <p>Redirecting...</p>;
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Admin Dashboard</h1>
            <p>Welcome, {user?.email}!</p>
            <p>This is a protected area for administrators only.</p>
            <button onClick={handleLogout} style={{ marginTop: '1rem', padding: '10px', cursor: 'pointer' }}>
                Logout
            </button>
        </div>
    );
}