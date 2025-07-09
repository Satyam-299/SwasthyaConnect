# SwasthyaConnect – Checkpoint 1(09/07/2025): Emergency & Health Mobility

This checkpoint implements critical features for real-time user assistance, including an emergency services page with an SOS function and a health-focused transportation booking page.

---

##  1. Emergency Page (`/emergency`)

A centralized hub for immediate help, providing quick access to essential services and location sharing.

### Key Features:
- **Service Buttons:** Click-to-call buttons for Ambulance (102), Police (100), and Fire (101).
- **SOS Alert:** A panic button that fetches the user's live location and sends it to the Firestore database (`sos-alerts` collection) with a timestamp.
- **WhatsApp Location Sharing:** A button that opens WhatsApp with a pre-filled emergency message including the user's Google Maps location link.
- **Live Map View:** An embedded map that displays the user's current location, powered by the Geolocation API and Leaflet.

### Key Files and Their Roles:
| File Path                      | Purpose |
|-------------------------------|---------|
| `app/emergency/page.tsx`      | UI for emergency page, includes service buttons, SOS logic, and live location |
| `app/api/sos/route.ts`        | API endpoint to receive and save SOS alerts in Firestore |
| `components/LiveMap.tsx`      | Leaflet-based dynamic map to show user location; loaded with `next/dynamic` |

---

## 🔹 2. Health Mobility Page (`/health-mobility`)

A dedicated page for arranging transportation to and from healthcare facilities.

### Key Features:
- **Ride-Hailing Integration:** Direct links to book rides with Uber and Rapido. The Uber link attempts to pre-fill the user's current location as the pickup point.
- **Ambulance Booking Form:** A simple form to request an ambulance, capturing essential details like patient name and address.
- **Location-Aware UI:** Uses the user's live location to provide context and power the map background.

### Key Files and Their Roles:

|        File Path                 |               Purpose                       |
|----------------------------------|---------------------------------------------|
| `app/health-mobility/page.tsx`   | UI for ride-booking and ambulance request   |
| `components/LiveMap.tsx`         | Reused Leaflet map to show current location |

---

##  Tech Stack

| Technology         |           Role                    | 
|--------------------|-----------------------------------|
| **Next.js**        |   React framework with App Router |
| **TypeScript**     |   Static typing                   |
| **Firebase**       |   Auth and Firestore for backend  |
| **TailwindCSS**    |   Utility-first CSS styling       |
| **shadcn/ui**      |   Pre-styled components           |
| **Leaflet**        |   Interactive location maps       |
| **Geolocation API**|   Detect user's location          |

---

##  Technical Implementation

- **Firebase Firestore:** Used to store SOS alerts.
- **Next.js App Router:** Follows the latest app directory and API route structure.
- **Geolocation API:** Retrieves real-time user location using `navigator.geolocation`.
- **Leaflet:** Interactive map rendering based on live coordinates.
- **Dynamic Imports:** Prevents server-side rendering errors with Leaflet.
- **shadcn/ui & TailwindCSS:** Modern UI library and styling system.

---

##  How to Test

1. **Local Setup:**
    - Make sure `.env.local` contains Firebase credentials.
    - Install dependencies: `npm install`
    - Run dev server: `npm run dev`

2. **Test Pages:**
    - Visit `/emergency`:
        - Click SOS and confirm document in Firestore.
        - Use service and WhatsApp buttons.
    - Visit `/health-mobility`:
        - Click Uber/Rapido buttons.
        - Submit ambulance form and observe confirmation.

---

##  Next Steps (Checkpoint 2(09/07/2025) Preview)

In the next checkpoint, we will implement the **Digital Support** page:

- Add a `/digital-support` route to allow users to **upload and download medical records** (e.g., prescriptions, test results).
- Connect **Firebase Storage** for file uploads.
- Store **metadata** (title, user ID, upload time) in **Firestore** for indexing and retrieval.
- Provide a secure and user-friendly UI for file handling.

> Maintained for HackOrbit 2025 by **Team TechBrix**
