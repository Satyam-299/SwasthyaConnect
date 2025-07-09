
## SwasthyaConnect – Checkpoint 4: User/Admin Role-based Auth System

This checkpoint focuses on implementing a secure, scalable authentication system using **Firebase Authentication**. It includes **Email/Password login**, **Google Sign-In**, and **Role-based access** for users and admins.

---

## 🔹 1. Email/Password Signup & Login (/signup, /login/user)

### Purpose:
Allow users to register and login securely using traditional email and password credentials via Firebase.

### Key Features:
- Firebase Auth integration using `signInWithEmailAndPassword` and `createUserWithEmailAndPassword`
- Form validation and basic error handling

### Key Files:
- `app/signup/page.tsx` → Signup page UI & logic
- `app/login/user/page.tsx` → Login page UI & logic
- `src/components/UserSignupForm.tsx` → Signup form component
- `src/components/UserLoginForm.tsx` → Login form component

---

## 🔹 2. Google Sign-In Integration (OAuth)

### Purpose:
Offer seamless login via Google account using Firebase’s OAuth provider.


### Key Features:
- Sign in using `signInWithPopup` or `signInWithRedirect`
- Handles `getRedirectResult` on load
- Works on desktop and mobile


### Key Files:
- `src/components/UserLoginForm.tsx` → Also handles Google Sign-In logic
- `lib/firebase.ts` → Includes Google Auth Provider setup

---

## 🔹 3. Role-Based Access: Admin vs. User

### Purpose:
Provide **different experiences** to users and admins based on their role after login.

### Features:
- Admin login page
- Admin dashboard skeleton
- Role-based redirects and protection

### Key Files:
- `app/login/admin/page.tsx` → Dedicated admin login form
- `app/admin/dashboard/page.tsx` → Admin-only dashboard
- `lib/firebase.ts` → Contains Firebase Auth and role-check logic

---

##   Included Files and Responsibilities

| File Path                             | Description                                      |
|---------------------------------------|--------------------------------------------------|
| `app/signup/page.tsx`                 | User signup UI, connects to `UserSignupForm.tsx` |
| `app/login/user/page.tsx`             | User login UI, connects to `UserLoginForm.tsx`   |
| `src/components/UserSignupForm.tsx`   | Firebase `createUserWithEmailAndPassword` logic  |
| `src/components/UserLoginForm.tsx`    | Login with email + Google OAuth logic            |
| `app/login/admin/page.tsx`            | Admin login UI                                   |
| `app/admin/dashboard/page.tsx`        | Admin dashboard placeholder (protected route)    |
| `lib/firebase.ts`                     | Firebase App and Auth setup, Google provider     |

---

##   How It Works

- Signup/Login forms handle auth with Firebase using email/password
- Google OAuth handles popup or redirect flows
- Upon login, user role is determined (admin/user) using metadata
- Role-based redirect ensures admin sees admin dashboard, users see their own area

---

##   How to Test

1. **Local Setup:**
   - Set up `.env.local` with Firebase config
   - Run `npm install`
   - Start server: `npm run dev`

2. **Test Flows:**
   - Visit `/signup` to register a user
   - Visit `/login/user` to sign in with email or Google
   - Visit `/login/admin` to login as admin (must match role check)
   - Visit `/admin/dashboard` (protected route)

---

##   Dependencies Used

- **Firebase Auth** – for secure email/password and Google login
- **Next.js + TypeScript** – framework and typing
- **Tailwind CSS** – styling forms and pages

---

##   Next Steps (Checkpoint 5)

- Add curated hospital directory (`/curated`) and live nearby hospital search (`/nearby`) using Firestore and Geolocation API.

> Built during HackOrbit by **Team TechBrix**
