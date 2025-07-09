
# SwasthyaConnect – Checkpoint 2: Static Landing Page UI

This checkpoint sets up the user-facing **landing page** of SwasthyaConnect, featuring a responsive layout including the **Navbar**, **Hero section**, and **Footer**, styled with TailwindCSS.

---

## 🔹 Purpose

To create a welcoming and informative homepage that introduces the platform and directs users to important routes like login and hospital directory.

 **Responsive Landing Page:** A visually appealing hero section that adapts to different screen sizes.
- **Theme Toggle:** A functional dark and light mode toggle to enhance user experience.
- **Component-Based UI:** The interface is built with reusable components like `Navbar`, `Hero`, and `Footer`.
- **UI-Only Auth Forms:** Login and signup forms are created as separate components, but without any backend authentication logic at this stage.
- **Basic Routing:** Pages for `/`, `/login/user`, and `/signup` are set up.

---

##  Included Pages & Components

### 1. `app/page.tsx`
- **Purpose:** Homepage route (`/`)
- **Function:** Renders the layout using Navbar, Hero, and Footer.
- **Details:** Landing page loaded at root URL. Imports and renders `Navbar`, `Hero`, `Footer` to introduce platform and guide user actions.

### 2. `app/layout.tsx`
- **Purpose:** Global layout wrapper (HTML + Body)
- **Function:** Wraps all page content across routes with base layout.
- **Details:** Ensures consistent look and feel across pages. May include global fonts, themes.

### 3. `src/components/Navbar.tsx`
- **Purpose:** Displays site navigation
- **Function:** Renders brand title + links (Home, Login, Signup).
- **Details:** Responsive navbar using Tailwind. Uses `<nav>`, `<Link>` for client-side routing.

### 4. `src/components/Hero.tsx`
- **Purpose:** Central hero section
- **Function:** Highlights platform purpose and CTAs for users.
- **Details:** Engaging intro area with headings, subtexts, buttons, platform highlights.

### 5. `src/components/Footer.tsx`
- **Purpose:** Bottom section of homepage
- **Function:** Displays credits, contact, and links.
- **Details:** Adds credibility and completeness to UI layout.

---

##  Tech Stack Used

| Technology             | Purpose                                                                |
|------------------------|------------------------------------------------------------------------|
| **Next.js**            | React-based framework for server-side rendering and routing            |
| **TypeScript**         | Adds static typing and better developer tooling                        |
| **TailwindCSS**        | Utility-first CSS framework for rapid UI design                        |
| **Firebase (Planned)** | Backend service for auth and real-time data (used in next checkpoints) |

---

##  Supporting Configuration Files

| File Path              |                Description                      |
|------------------------|-------------------------------------------------|
| `tailwind.config.ts`   |      Tailwind styling configuration             |
| `tsconfig.json`        |      TypeScript settings                        |
| `next.config.js`       |      Next.js project config                     |
| `globals.css`          |      Global base styles with Tailwind layers    |
| `package.json`         |      Dependency list and script definitions     |
| `.env.local.example`   |      Example Firebase env variables template    |

---

##  How It Works

1. `npm install` installs dependencies.
2. `layout.tsx` renders the root layout globally.
3. `page.tsx` includes UI sections by importing components.
4. TailwindCSS handles responsive styling.

---

## 🚀 How to Run

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local file from example and add Firebase credentials

# 3. Start development server
npm run dev
```

This will run the static UI of the SwasthyaConnect homepage locally on your machine.


---

##  Detailed Explanation of All Files

### app/page.tsx
- **Purpose:** Defines the homepage (`/` route).
- **Details:** Imports `Navbar`, `Hero`, and `Footer` components to build the landing page layout.

### app/layout.tsx
- **Purpose:** Wraps all pages in a global layout.
- **Details:** Includes `<html>`, `<body>`, applies global styles and provides consistent page structure.

### src/components/Navbar.tsx
- **Purpose:** Displays the top navigation bar.
- **Details:** Contains brand/logo and navigation links. Uses TailwindCSS for responsive design.

### src/components/Hero.tsx
- **Purpose:** Shows the hero (introductory) section.
- **Details:** Features platform tagline, description, and call-to-action buttons. Styled with Tailwind.

### src/components/Footer.tsx
- **Purpose:** Renders footer at the bottom of the page.
- **Details:** Includes copyright, links, and credits.

---

## ⚙️ Configuration Files in Detail

### tailwind.config.ts
- **Purpose:** Customizes TailwindCSS behavior.
- **Details:** Defines colors, fonts, and file paths for styling.

### tsconfig.json
- **Purpose:** TypeScript configuration.
- **Details:** Controls how TypeScript compiles files and interprets modules.

### next.config.js
- **Purpose:** Next.js framework configuration.
- **Details:** Enables settings for strict mode, plugins, build features.

### globals.css
- **Purpose:** Global styling file.
- **Details:** Includes Tailwind directives for base, components, and utilities.

### package.json
- **Purpose:** Project manifest for npm.
- **Details:** Lists dependencies (`react`, `next`, `tailwindcss`), and defines scripts like `npm run dev`.

### .env.local.example
- **Purpose:** Example environment variable file.
- **Details:** Template for Firebase credentials. Used to create real `.env.local` file.

---

---

## ⏭️ Next Steps (Checkpoint 3 Preview)

In the next checkpoint, we will:

- Integrate **Firebase Authentication** to allow user registration and login via email/password.
- Build **Login and Signup UI forms** with validation.
- Store and verify user identities before allowing access to restricted routes.
- Handle all auth-related errors and user sessions securely.

This prepares the SwasthyaConnect platform for **role-based dashboards** and **personalized features** coming in Checkpoint 4.

> Maintained for HackOrbit by Team TechBrix.

