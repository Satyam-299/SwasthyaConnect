
"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Hospital, LogIn, LogOut, Menu, User as UserIcon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/assistance', label: 'Assistance' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = async () => {
    if (!auth) {
      toast({ variant: "destructive", title: "Logout Failed", description: "Firebase is not configured." });
      return;
    }
    try {
      await signOut(auth);
      toast({ title: "Logged Out", description: "You have been successfully logged out." });
      router.push('/login');
    } catch (error) {
      toast({ variant: "destructive", title: "Logout Failed", description: "Could not log you out. Please try again." });
    }
  };

  const userInitial = user?.email?.charAt(0).toUpperCase() || '?';

  return (
    <header className="bg-background/95 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto px-4 h-20 flex items-center">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
            <Hospital className="w-7 h-7 text-primary" />
            <span className="text-2xl font-extrabold tracking-tight font-headline">SwasthyaConnect</span>
        </Link>
        
        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 mx-auto">
            {navLinks.map(link => (
                <Button asChild variant="ghost" key={link.label} className={cn(
                    "text-muted-foreground hover:bg-muted hover:text-primary",
                    pathname === link.href && "text-primary bg-muted"
                )}>
                    <Link href={link.href}>{link.label}</Link>
                </Button>
            ))}
        </nav>

        {/* Right: Actions */}
        <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            {user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                            <Avatar className="h-10 w-10">
                                <AvatarFallback>{userInitial}</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">My Account</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    {user.email}
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Button asChild className="hidden md:flex">
                    <Link href="/login"><LogIn className="mr-2" /> Login</Link>
                </Button>
            )}

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                    {navLinks.map(link => (
                      <SheetClose asChild key={link.href}>
                        <Link 
                          href={link.href}
                          className={cn(
                            "flex items-center gap-4 transition-colors hover:text-primary",
                            pathname === link.href ? "text-primary" : "text-muted-foreground"
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      {user ? (
                          <Button onClick={handleLogout} variant="outline" className="justify-start text-lg gap-4"><LogOut /> Logout</Button>
                      ) : (
                          <Button asChild className="justify-start text-lg gap-4"><Link href="/login"><LogIn /> Login</Link></Button>
                      )}
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
