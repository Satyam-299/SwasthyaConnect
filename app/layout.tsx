
import type { Metadata } from 'next';
import { ThemeProvider } from "../src/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: 'SwasthyaConnect - Checkpoint 2',
  description: 'UI Landing Page + Theme Toggle',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          </ThemeProvider>
        </body>
      </html>
    );
  }
