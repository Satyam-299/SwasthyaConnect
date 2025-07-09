import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "../components/ui/toaster"
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata: Metadata = {
  title: 'SwasthyaConnect - Checkpoint 6',
  description: 'Emergency & Health Mobility',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
