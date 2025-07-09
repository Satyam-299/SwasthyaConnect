
# SwasthyaConnect – Checkpoint 3: Email/Password Authentication UI

This checkpoint establishes **user authentication functionality** using Firebase. It enables users to register and sign in using their email and password securely. This is a foundational step before implementing role-based logic and advanced user features.

---

##  Purpose of This Checkpoint

To build a secure login system that allows:
- **New users** to register via a signup form.
- **Returning users** to log in using their email and password.
- Backend authentication using **Firebase Auth**.
- UI validation and error handling in both forms.

This stage ensures **user identity is verified** before accessing restricted pages like booking, emergency tools, and user dashboards.

---

##  Technologies Used

| Tool                  |                                Purpose                                        |
|-----------------------|-------------------------------------------------------------------------------|
| **Next.js**           |              Server-rendered React app structure                              |
| **TypeScript**        |                          Type-safe coding                                     |
| **Firebase Auth**     |              Email/password-based user authentication                         |
| **TailwindCSS**       |                 UI styling for form responsiveness                            |
| **Firebase SDK v9**   | For Auth API: `signInWithEmailAndPassword`, `createUserWithEmailAndPassword`  |

---

## 🔹 Key Pages

### 1. `/login/user`
- **Description:** Renders the login UI for existing users.
- **Function:** Takes email and password → validates → authenticates via Firebase.
- **UI Source:** `src/components/UserLoginForm.tsx`
- **Page Wrapper:** `app/login/user/page.tsx`

### 2. `/signup`
- **Description:** Provides the signup UI for new user registrations.
- **Function:** Accepts user credentials → registers them with Firebase Auth.
- **UI Source:** `src/components/UserSignupForm.tsx`
- **Page Wrapper:** `app/signup/page.tsx`

---

##  UI Components

These are **form components** that handle input, validation, errors, and submit actions. They are reusable and styled using TailwindCSS.

|           File                     |                 Description                                            |
|------------------------------------|------------------------------------------------------------------------|
| `src/components/UserLoginForm.tsx` | Handles user login (email/password fields, validation, Firebase login) |
| `src/components/UserSignupForm.tsx`| Handles new user registration (email/password fields, Firebase signup) |

---

##  Firebase Auth Setup

All Firebase setup is defined in:

- `lib/firebase.ts`

```ts
// firebase.ts
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

##  How It Works (Workflow)

### Signup:
1. User opens `/signup`.
2. Enters valid email and password.
3. `createUserWithEmailAndPassword()` is triggered.
4. Firebase creates the user account.
5. On success → redirect to dashboard or confirmation page.

### Login:
1. User opens `/login/user`.
2. Enters credentials.
3. `signInWithEmailAndPassword()` is called.
4. Firebase verifies the account.
5. On success → user is signed in and session begins.

### Error Handling:
- Invalid credentials, weak passwords, or Firebase errors are handled via UI alerts.

---

##  Files and Their Roles

| File Path                            |                Role                                     |
|--------------------------------------|---------------------------------------------------------|
| `app/login/user/page.tsx`            | Renders the login form component on route `/login/user` |
| `app/signup/page.tsx`                | Renders the signup form component on route `/signup`    |
| `src/components/UserLoginForm.tsx`   | Login UI with Firebase logic                            |
| `src/components/UserSignupForm.tsx`  | Signup UI with Firebase logic                           |
| `lib/firebase.ts`                    | Firebase setup and auth export                          |

---

##  How to Test

1. Add your `.env.local` with correct Firebase config:

```NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCIg9xBYhYrziY9qg1mJWY03PAZT37z1LA
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=swasthyaconnect-25a75.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=swasthyaconnect-25a75
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Test URLs:
- Visit `/signup` and create a new user.
- Visit `/login/user` and test logging in with that account.

---

##  Outcome

This checkpoint completes the **secure user authentication flow** using Firebase. It prepares the app for:
- Storing user-specific data (e.g., bookings, feedback).
- Differentiating between user types in Checkpoint 4.

---

##  Next Steps (Checkpoint 4)

- Add **Admin login page** (`/login/admin`)
- Implement **role-based routing**
- Secure the admin dashboard with route protection
- Introduce conditional UI rendering based on user roles

> Maintained for HackOrbit by Team TechBrix.
