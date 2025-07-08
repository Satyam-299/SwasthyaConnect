# SwasthyaConnect - Checkpoint 4

This directory contains the isolated files for Checkpoint 4: Role-based Flow (Admin Login & Dashboard).

## Files Included

- `app/layout.tsx`: A minimal root layout that includes the `AuthProvider`.
- `app/admin/dashboard/page.tsx`: Renders the admin dashboard.
- `app/login/admin/page.tsx`: Renders the admin login form.
- `lib/firebase.ts`: Firebase configuration and initialization.
- `context/AuthContext.tsx`: A simplified context to manage user authentication and role state (`user` vs. `admin`).
- `src/components/AdminLoginForm.tsx`: The UI component for the admin login form.
- `src/components/AdminDashboard.tsx`: A basic admin dashboard component that displays protected content.

## How to Use

You can treat this directory as a minimal Next.js project. You can `cd` into it, initialize a Git repository, and push it to the `checkpoint4` branch on your GitHub account as outlined in your instructions.