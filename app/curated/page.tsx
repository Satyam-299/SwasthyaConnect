
import CuratedList from '../../src/components/CuratedList';

export default function CuratedPage() {
    return (
        <main style={{ padding: '2rem' }}>
            <h1>Curated Hospitals</h1>
            <p>A list of trusted and verified hospitals in our network.</p>
            <CuratedList />
        </main>
    );
}
