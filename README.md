
# SwasthyaConnect – Complete Project Overview

SwasthyaConnect is a modern health-tech platform developed by **Team TechBrix** to solve the problem of access to real-time hospital availability, emergency tools, and personalized care.

This README includes a complete breakdown of the project, including every major file, its purpose, and the technology stack.

---

##  Tech Stack

|        Layer           |                Technology                                              |
|------------------------|------------------------------------------------------------------------|
| Framework              | Next.js 14 (App Router) + TypeScript                                   |
| Styling                | Tailwind CSS                                                           |
| UI Libraries           | Lucide-react, Headless UI                                              |
| Backend Services       | Firebase (Authentication, Firestore, Cloud Functions, Storage)         |
| Realtime Location      | Leaflet.js + Browser Geolocation API                                   |
| Hosting                | Firebase Hosting                                                       |
| Version Control        | Git + GitHub                                                           |


---

##  File Structure & Purpose

At the root level, files like `package.json`, `tsconfig.json`, `tailwind.config.js`, and `next.config.js` are responsible for configuration, project metadata, build scripts, and Tailwind CSS customization. Environment variables for Firebase credentials are managed via `.env.local`.

### lib/firebase.ts

Initializes and exports Firebase services — Auth, Firestore, Storage, and GoogleAuthProvider — based on the environment configuration.

### app/layout.tsx

Global layout file that wraps all routes and pages. It includes shared elements like headers, footers, and theme providers.

### app/page.tsx

The main landing page of the app. It gives a quick overview of the app and links to all major functionalities.

## 📁 Detailed File Structure & Purpose

### Root & Config Files

| File                         |           Purpose                 |
|------------------------------|-----------------------------------|
| `package.json`               | Declares dependencies and scripts |
| `tsconfig.json`              | TypeScript configuration          |
| `tailwind.config.js`         | Tailwind setup and customization  |
| `next.config.js`             | Next.js build and routing config  |
| `.env.local.example`         | Template for Firebase credentials |

### lib/

| File             |                       Purpose                                         |
|------------------|-----------------------------------------------------------------------|
| `lib/firebase.ts`| Initializes Firebase Auth, Firestore, and Storage using env variables |

### app/

| File/Folder                |             Purpose         |
|----------------------------|-----------------------------|
| `layout.tsx`               | Global layout for all pages |
| `page.tsx`                 | Homepage                    |
| `error.tsx`, `not-found.tsx`| Custom error and 404 pages |

#### Auth Pages

| File                           |                Purpose                 |
|--------------------------------|----------------------------------------|
| `login/user/page.tsx`          | User login UI using Firebase Auth      |
| `signup/page.tsx`              | Signup form to create users            |
| `login/admin/page.tsx`         | Admin login (Google Sign-In)           |
| `admin/dashboard/page.tsx`     | Admin dashboard to manage hospital data|

#### Feature Pages

| File                                 |             Purpose                        |
|--------------------------------------|--------------------------------------------|
| `curated/page.tsx`                   | Displays verified hospitals from Firestore |
| `nearby/page.tsx`                    | Location-based nearby hospital filtering   |
| `digital-support/page.tsx`           | File upload/download for medical records   |
| `assistance/page.tsx`                | Appointment booking & emergency assistance |
| `health-mobility/page.tsx`           | Ride booking for ambulance or Uber/Rapido  |
| `emergency-tools/page.tsx`           | SOS, live location alert tools             |

### components/

| File/Component                     |             Purpose                     |
|------------------------------------|-----------------------------------------|
| `Navbar.tsx`                       | Responsive navbar with auth checks      |
| `HospitalCard.tsx`                 | UI card for displaying hospital data    |
| `LiveBedTracker.tsx`               | Shows ICU/general bed availability live |
| `LiveOxygenStatus.tsx`             | Displays oxygen level in hospitals      |
| `MapView.tsx`                      | Map view for routes & nearby hospitals  |
| `BookRideButtons.tsx`              | Uber, Rapido booking actions            |
| `SOSButton.tsx`                    | Emergency alert button                  |

### hooks/

| File                     |           Purpose                            |
|--------------------------|----------------------------------------------|
| `useHospitals.ts`        | Fetch hospital data from Firestore           |
| `useUpload.ts`           | Manage Firebase file uploads                 |
| `useGeolocation.ts`      | Get user’s current location                  |
| `useLiveResources.ts`    | Get real-time resource status (beds, oxygen) |

---

## 🔎 Feature Summary

| Feature                     |        Description                      |
|-----------------------------|-----------------------------------------|
| Auth                        | Email/password + Google login           |
| Hospital Directory          | Curated and filtered hospital lists     |
| Live Resource Status        | Beds, oxygen, real-time from Firebase   |
| File Upload                 | Upload prescriptions & records          |
| Geolocation & Maps          | Nearby hospitals + map route            | 
| Ride Booking                | Uber/Rapido/ambulance link              |
| Admin Dashboard             | Manage hospital data                    |
| SOS Tools                   | Emergency call, WhatsApp, live tracking |
---

## 🔎 Features Summary

- **Authentication** for patients and hospital admins.
- **Real-time resource status** of hospital beds and oxygen.
- **Location-based filtering** of hospitals using GPS.
- **Document upload** for medical reports or prescriptions.
- **Ride booking** via Uber, Rapido, and ambulance services.
- **Emergency tools** like WhatsApp share, SOS alert, and map routes.

---

##  Running the Project Locally

```bash
# Install dependencies
npm install

# Add Firebase credentials in .env.local

# Start development server
npm run dev
```

---

##  Disclaimer

The hospital list displayed on the /curated page currently uses mock data fetched via a Google-based Mock API for demonstration and testing purposes.
This mock dataset simulates real hospital profiles including names, specializations, and addresses.
Once SwasthyaConnect is certified and officially integrated with government healthcare systems and hospitals:
Verified hospital data will be fetched through Hospital Management Systems (HMS) provided by respective hospitals.
Live data such as ICU/general bed availability, oxygen stock, and emergency status will be displayed in real time.
Goal: Ensure only authenticated and government-approved hospitals are visible in the app with accurate, trusted data.

---

##  Credit & AI Usage

This project was developed by **Team TechBrix**. Some assistance  was taken using OpenAI ChatGPT for code structure suggestions and component generation.
