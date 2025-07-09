
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "../components/ui/toaster"
import { AuthProvider } from '../context/AuthContext';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'SwasthyaConnect - Digital Support',
  description: 'Upload and manage your medical records securely.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <AuthProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
            <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
