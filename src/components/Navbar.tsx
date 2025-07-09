
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
    return (
      <header className="bg-card shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            SwasthyaConnect
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login/user" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Login
            </Link>
            <Link href="/signup" className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">
              Sign Up
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
    );
  }
