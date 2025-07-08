# SwasthyaConnect  Checkpoint 5 – Hospital Directory & Nearby Search

This checkpoint implements two major features:

---

## 🔹 1. Curated Hospital Directory (`/curated`)
A static page that fetches a curated list of hospitals from **Firebase Firestore** and displays them using responsive **hospital cards**.

###  Purpose
- To provide users with a trusted list of verified hospitals.
- Displays hospital details such as name, address, and specialization.

###  Key Files
pages/curated.tsx
hooks/useHospitals.ts
components/HospitalCard.tsx
lib/firebase.ts


---

## 🔹 2. Nearby Hospital Search (`/nearby`)
A location-based page that:
- Detects user's current location using the **Geolocation API**
- Filters hospitals from Firestore based on proximity

### Purpose
- To help users discover nearby hospitals in case of emergency or convenience.
- Uses real-time latitude & longitude and calculates distance.

###  Key Files
pages/nearby.tsx
hooks/useHospitals.ts
components/HospitalCard.tsx
lib/firebase.ts



---

## Included Files and Responsibilities

| File Path                        | Description |
|----------------------------------|-------------|
| `pages/curated.tsx`             | Static page showing Firestore-fetched curated hospitals |
| `pages/nearby.tsx`              | Uses browser location to display nearby hospitals |
| `hooks/useHospitals.ts`         | Custom React Hook to fetch and filter hospital data |
| `components/HospitalCard.tsx`   | Reusable component that displays a hospital's information |
| `lib/firebase.ts`               | Firebase initialization for Firestore access |

---

##  How It Works

- `useHospitals.ts` fetches all hospital data from Firestore.
- In `/curated`, it simply maps and displays the data.
- In `/nearby`, it:
  1. Gets the user's location using `navigator.geolocation`.
  2. Calculates distance using the Haversine formula.
  3. Filters out hospitals beyond a set radius (e.g. 10km).

---

##  How to Test

1. **Local Setup:**
   - Run `npm install`
   - Set your Firebase credentials in `.env.local`
   - Start the server: `npm run dev`

2. **Test URLs:**
   - `/curated` → View curated hospital cards
   - `/nearby` → View hospitals near your location (enable browser location)

---

##  Dependencies Used

- `Firebase Firestore` – to store and fetch hospital data
- `TailwindCSS` – for styling the cards and layout
- `Next.js + TypeScript` – project framework
- `Geolocation API` – for live user location

---

## 🏁 Next Steps (Checkpoint 6)

- Add real-time hospital resource data (ICU beds, oxygen, hygiene ratings).
- Display live filter options and symptom-wise categorization.

> Maintained for HackOrbit by Team TechBrix.
