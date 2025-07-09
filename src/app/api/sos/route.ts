import { NextResponse } from 'next/server';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// ✅ Firebase config (must use full object in API routes — not shared from firebase.ts)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

// ✅ Safe init
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export async function POST(req: Request) {
  try {
    const { lat, lng } = await req.json();

    if (typeof lat !== 'number' || typeof lng !== 'number') {
      return NextResponse.json({ error: 'Missing or invalid latitude/longitude' }, { status: 400 });
    }

    await addDoc(collection(db, 'sos-alerts'), {
      timestamp: new Date(),
      location: { lat, lng },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('SOS API Error:', error.message);
    return NextResponse.json({ error: 'Failed to store SOS alert.', detail: error.message }, { status: 500 });
  }
}
