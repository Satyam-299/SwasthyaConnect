
import NearbyList from '../../src/components/NearbyList';

export default function NearbyPage() {
    return (
        <main style={{ padding: '2rem' }}>
            <h1>Nearby Hospitals</h1>
            <p>Find hospitals near your location using GPS.</p>
            <NearbyList />
        </main>
    );
}
