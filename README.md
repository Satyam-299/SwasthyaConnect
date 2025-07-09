# SwasthyaConnect – Checkpoint 3 (09/07/2025): Final Polish & Profile UI

This checkpoint implements the **Assistance** page for appointment booking and enhances the UI with a dynamic header and custom 404 page.

---

## 🔹 Purpose

To provide a user-friendly interface for booking doctor appointments and to improve the overall user experience with polished UI elements and better navigation for authenticated users.

### Key Features:

- **Appointment Booking:** A new page at `/assistance` allows logged-in users to book an appointment by filling out a form.
- **Form Validation:** The form uses `zod` and `react-hook-form` for robust client-side validation.
- **Date Picker:** A user-friendly calendar popup for selecting the appointment date.
- **Firestore Integration:** Appointment requests are saved to the `appointments` collection in Firebase Firestore.
- **Dynamic Header:** The header now displays a dropdown menu for logged-in users, showing their email and a logout button.
- **Custom 404 Page:** A styled "Not Found" page improves user experience for broken links.
- **Responsive Design:** All new components are built with a mobile-first approach.

---

##  Tech Stack & Implementation

| Technology               |                          Role                                            |
|--------------------------|--------------------------------------------------------------------------|
| **Next.js (App Router)** |    Framework for the application structure and UI rendering.             |
| **Firebase Firestore**   |    Stores appointment booking requests.                                  |
| **Firebase Auth**        |    Authenticates users to enable booking and personalized UI.            |
| **React Hook Form/Zod**  |    Manages form state and validation logic.                              |
| **TailwindCSS/shadcn/ui**|    Provides utility classes and components for a polished UI.            |

---

##  Included Files and Responsibilities

| File Path                               |                               Description                                             |
|-----------------------------------------|---------------------------------------------------------------------------------------|
| `app/assistance/page.tsx`               |     The main page component for the appointment booking feature.                      |
| `components/AppointmentForm.tsx`        |     The core UI and logic component for the booking form, including validation.       |
| `components/Header.tsx`                 |     Updated header with a dropdown menu for authenticated users.                      |
| `app/not-found.tsx`                     |     A custom, styled 404 "Page Not Found" error page.                                 |
| `lib/firebase.ts`                       |     Initializes and exports Firebase services, including `auth` and `db`.             |
| `context/AuthContext.tsx`               |     Provides authentication state (user, loading) across the application.             |
| `app/login/page.tsx`                    |     A simple login page to allow users to authenticate.                               |

---

##  Included Files and Their Purpose (Detailed)

- `pages/assistance.tsx`: This file defines the route `/assistance`, which renders a clean and responsive appointment booking form. It serves as the main entry point for users seeking medical help. The form handles input for patient symptoms, name, and preferred appointment time, and optionally stores the data in Firestore.

- `components/Navbar.tsx`: This component builds the top navigation bar visible across the app. Post-authentication, it displays a dropdown that shows the user’s email address and a logout button. It significantly improves the user experience by providing easy access to profile-related actions.

- `components/AppointmentForm.tsx`: This is a modular and reusable component embedded inside `/assistance`. It manages input fields, form validation, and handles the submission logic. If integrated, it also writes the data securely to Firestore using the Firebase SDK.

- `app/not-found.tsx`: This file provides a custom 404 error page that appears when users visit an invalid or broken route. It includes friendly UI messaging and links back to the homepage to improve navigation and error recovery.

- `app/layout.tsx`: This is the global layout component that wraps all app pages. It includes meta tags for SEO, global styles, and responsive layout logic. The layout file ensures consistent design and structure throughout the app.

- `lib/firebase.ts`: This file initializes the Firebase app using your environment variables. It exports Firestore and Auth services, enabling secure access to Firebase features across the project, such as saving appointments and handling user login/logout.

- `styles/globals.css`: This global stylesheet is powered by Tailwind CSS and applies consistent styling across pages and components. It includes updates for improved form appearance, spacing, color contrast, and mobile responsiveness.

---

##  How to Test

1.  **Local Setup**:
    -   Create a `.env.local` file with your Firebase project credentials.
    -   Navigate into this directory: `cd SwasthyaConnect-Checkpoint3(09-07-2025)`
    -   Install dependencies: `npm install`
    -   Run the development server: `npm run dev`

2.  **Test the Feature**:
    -   Navigate to `/login` and sign in.
    -   Go to the `/assistance` page.
    -   Fill out the appointment form and submit it.
    -   Verify that a success toast appears and that a new document is created in your Firestore `appointments` collection.
    -   Check the header to see the user dropdown with your email.


##  Next Checkpoint

The next phase is the final deployment of the entire SwasthyaConnect platform:
- Integrate all checkpoints into a single full-stack system.
- Ensure mobile responsiveness, error handling, and data security.
- Deploy the project to **Vercel** or Firebase Hosting.

> Maintained for HackOrbit 2025 by **Team TechBrix**
