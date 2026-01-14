"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@/components/providers/MockAuthProvider";

export default function Navbar() {
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-16 items-center justify-between px-4 mx-auto">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                        C
                    </div>
                    ClinConnect
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="/explore" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Explore
                    </Link>
                    <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Pricing
                    </Link>
                    <Link href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Contact Us
                    </Link>
                    <SignedIn>
                        <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Dashboard
                        </Link>
                    </SignedIn>
                </div>

                <div className="flex items-center gap-4">
                    <SignedOut>
                        <SignInButton>
                            <Button variant="ghost">Log in</Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button>Get Started</Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}
