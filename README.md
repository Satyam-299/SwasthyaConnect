
# SwasthyaConnect – Checkpoint 1: Initial Setup

This checkpoint sets up the foundational architecture for SwasthyaConnect — a healthcare web platform connecting users to hospitals and emergency services.

---

##  Problem Statement

In emergencies, users struggle with:
- Finding nearby hospitals
- Real-time availability of beds, oxygen, or doctors
- Access to hygienic, reliable facilities
- Reaching hospitals quickly and safely

**SwasthyaConnect** aims to solve this by providing a centralized, responsive web platform with real-time healthcare data, maps, and booking options.

---

##  Purpose of This Checkpoint

This checkpoint is dedicated to:
- Setting up the **Next.js** framework
- Integrating **TailwindCSS** for styling
- Enabling **TypeScript** for scalable development
- Bootstrapping **Firebase SDK** for backend services
- Laying the groundwork for routing and layout structure

---

##  Tech Stack Used

| Tool               | Use                                                                 |
|--------------------|----------------------------------------------------------------------|
| **Next.js 14**     | App routing, SSR/SSG rendering, modular project structure            |
| **TypeScript**     | Type-safe development, better autocompletion                         |
| **TailwindCSS**    | Fast and responsive UI styling                                       |
| **Firebase SDK v9**| Initial backend setup (Auth & Firestore prepared)                    |

---

##  Included Files and Detailed Explanation

| File Path                   |            Description                                     |
|-----------------------------|------------------------------------------------------------|
| `package.json`              | Declares dependencies and project metadata                 |
| `tsconfig.json`             | TypeScript configuration rules                             |
| `tailwind.config.ts`        | Tailwind setup for styling and theming                     |
| `next.config.js`            | Next.js configuration (optional tweaks for builds/routing) |
| `app/layout.tsx`            | Global HTML layout (shared across all pages)               |
| `app/page.tsx`              | Home page route (default `/`)                              |
| `lib/firebase.ts`           | Firebase initialization script (basic setup only)          |
| `.env.local.example`        | Sample Firebase env file for local dev                     |


###  Configuration Files

- **`package.json`**
  - Lists project dependencies like `next`, `react`, `firebase`, `tailwindcss`
  - Includes scripts like `dev`, `build`, and `start`
  - Controls versioning and environment setup.

- **`tsconfig.json`**
  - Configures TypeScript settings for the app.
  - Includes strict type checking, JSX support, and base paths.

- **`tailwind.config.ts`**
  - Customizes Tailwind themes, colors, and breakpoints.
  - Adds future styling support like dark mode or component-specific styles.

- **`next.config.js`**
  - Optional tweaks for Next.js — useful for enabling experimental features, redirects, or custom headers.

---

###  Core App Structure

- **`app/layout.tsx`**
  - Defines the global HTML wrapper for all pages.
  - Includes global styles, meta tags, and shared components (e.g., Navbar/Footer).
  - Enables persistent layout across routes using App Router (Next.js 13+).

- **`app/page.tsx`**
  - The default landing page (served at `/`).
  - Renders basic content or a placeholder before adding UI in Checkpoint 2.

---

###  Firebase Setup

- **`lib/firebase.ts`**
  - Initializes Firebase App using environment variables.
  - Prepares `getAuth()` and `getFirestore()` (to be used in future checkpoints).
  - Keeps sensitive config outside of public repo via `.env.local`

```ts
// Example content
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---

###  Environment File

- **`.env.local.example`**
  - Template for creating your actual `.env.local`.
  - Includes placeholders for Firebase API key, Auth domain, and project ID.
  - Keeps credentials secure and environment-specific.

---

##  How It Works

1. `npm install` sets up all required packages
2. `firebase.ts` initializes backend logic with Firebase keys
3. `layout.tsx` provides shared layout shell
4. `page.tsx` serves as the homepage route (`/`)

---

##  How to Run Locally

1. Duplicate the example environment file:

```bash
cp .env.local.example .env.local
```

2. Add Firebase project credentials in `.env.local`

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open browser at:  
[http://localhost:3000](http://localhost:3000)

---

##  Outcome

After this checkpoint:
- Your project has a scalable, production-ready skeleton
- Ready to build UI components in `src/components/`
- Firebase SDK is initialized for upcoming authentication & Firestore use
- Layout routing is established via `app/` structure

---

##  Next Steps (Checkpoint 2)

- Add basic UI components: Navbar, Hero, and Footer
- Render static landing page using TailwindCSS
- Setup `src/components` directory

> Maintained by Team TechBrix for HackOrbit 2025.
