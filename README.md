# SwasthyaConnect – Checkpoint 2(09/07/2025): Digital Support

This checkpoint implements the **Digital Support** page, allowing authenticated users to securely upload, view, and download their medical records using **Firebase Storage**.

---

## 🔹 Purpose

To provide a secure and user-friendly interface for managing personal health documents, such as prescriptions, lab reports, and imaging scans.

### Key Features:
- **Secure File Uploads:** Users can upload files (PDFs, images) directly to a user-specific folder in Firebase Storage.
- **Upload Progress:** A progress bar provides real-time feedback during the upload process.
- **File Listing:** Fetches and displays a list of all documents previously uploaded by the logged-in user.
- **Secure Downloads:** Each file in the list has a download button that retrieves the file from Firebase Storage.
- **Authentication Gate:** The page is only accessible to logged-in users, ensuring privacy.

---

##  Tech Stack & Implementation

| Technology               |                          Role                                            |
|--------------------------|--------------------------------------------------------------------------|
| **Next.js (App Router)** |    Framework for the application structure and UI rendering.             |
| **Firebase Storage**     |    Securely stores and serves all user-uploaded medical documents.       |
| **Firebase Auth**        |    Authenticates users to provide a unique and secure storage path.      |
| **React Hooks**          |    Encapsulates complex logic for file uploads and state management.     |
| **TailwindCSS**          |    Provides utility-first classes for styling the user interface.        |
| **shadcn/ui**            |    Pre-built components for UI elements like cards, buttons, and inputs. |

---

##  Included Files and Responsibilities

| File Path                                  |                               Description                                             |
|--------------------------------------------|---------------------------------------------------------------------------------------|
| `app/digital-support/page.tsx`             |     The main page component that renders the UI for the digital support feature.      |
| `components/DigitalSupport.tsx`            |    The core UI and logic component, handling state for uploads and file lists.        |
| `hooks/useUpload.ts`                       |    A custom React hook to manage the entire file upload process to Firebase Storage.  |
| `lib/firebase.ts`                          |    Initializes and exports Firebase services, including `auth` and `storage`.         |
| `context/AuthContext.tsx`                  |    Provides authentication state (user, loading) across the application.              |
| `app/login/page.tsx`                       |    A simple login page to allow users to authenticate before using the feature.       |
| `components/ui/`                           |    Contains all necessary shadcn/ui components (Button, Card, Progress, etc.).        |
| `README.md`                                |    This file, explaining the checkpoint's purpose and structure.                      |
| `package.json`, `tailwind.config.ts`, etc. |    All necessary project configuration files.                                         |

---

##  Detailed Explanation of Key Files

### 1. `app/digital-support/page.tsx`
This is the main entry point for the Digital Support page, served at the `/digital-support` route. It ensures the page structure and imports the `DigitalSupport` component that contains the actual file upload and listing UI. If the user is not authenticated, this page redirects or restricts access.

### 2. `components/DigitalSupport.tsx`
This component handles all core logic and UI rendering for the digital support functionality. It manages state like upload progress, uploaded file list, and handles actions like fetching files from Firebase Storage and calling the upload hook. It provides users a clean interface to upload and view their medical records.

### 3. `hooks/useUpload.ts`
This custom React hook encapsulates the logic for uploading files to Firebase Storage. It uses `uploadBytesResumable` from the Firebase SDK to monitor progress and provides a callback structure to update UI state based on upload completion or errors.

### 4. `lib/firebase.ts`
This file initializes Firebase with configuration settings from environment variables. It exports configured instances of `auth` and `storage` so they can be reused across the app for uploading files and managing user authentication.

### 5. `context/AuthContext.tsx`
This context provides global access to the current user object and loading state. It wraps the app at the root level so that any component (like `DigitalSupport`) can access the `user.uid` without prop drilling, enabling user-specific file uploads.

### 6. `app/login/page.tsx`
A simple but necessary page that allows users to log in using their email and password. It interacts with Firebase Auth and updates the `AuthContext` state. Only authenticated users are allowed to access the `/digital-support` page.

### 7. `components/ui/`
This directory holds reusable UI elements built using the `shadcn/ui` system. These include buttons, input fields, cards, progress bars, etc., all styled with TailwindCSS. They enhance consistency, responsiveness, and maintainability of the UI across the app.

### 8. `README.md`
This file (the one you're reading) outlines the goals, structure, workflow, and file responsibilities of Checkpoint 7 in SwasthyaConnect.

### 9. `package.json`, `tailwind.config.ts`, and related config files
These define the development environment, dependencies, build system, and global styling behavior of the project. They are crucial for integrating Tailwind, Firebase, TypeScript, and other libraries.

---

##  How to Test

1.  **Local Setup**:
    -   Create a `.env.local` file with your Firebase project credentials.
    -   Install dependencies: `npm install`
    -   Run the development server: `npm run dev`

2.  **Test the Feature**:
    -   Navigate to `/login` and sign in.
    -   Go to the `/digital-support` page.
    -   Select a file (PDF, PNG, JPG) and click "Upload".
    -   Observe the progress bar.
    -   Once complete, the file should appear in the "Your Uploaded Records" list.
    -   Click the download icon on the newly uploaded item to verify it works.

---

## ⏭ Next Steps (Checkpoint 3(09-07-2025) Preview)

In the next checkpoint, we will implement the **Assistance** page focused on appointment booking:

- Create an `/assistance` route where users can **book appointments with doctors**.
- Include a **form** to collect patient name, problem, preferred date, and specialization (optional).
- On submission, log the data to **Firebase Firestore** under an `appointments` collection.
- Display a **UI confirmation message** upon successful submission.
- Optionally, integrate a **date picker** and specialization dropdown for better UX.

> Maintained for HackOrbit 2025 by **Team TechBrix**
