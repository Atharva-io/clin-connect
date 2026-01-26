"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@/components/providers/MockAuthProvider";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 transition-all duration-200">
            <div className="bg-gradient-to-b from-[#050b1b]/95 via-[#050b1b]/80 to-[#050b1b]/40 backdrop-blur-xl border-b border-slate-400/5 shadow-sm">
                <div className="container flex h-20 items-center justify-between px-4 mx-auto">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5 shadow-lg group-hover:shadow-primary/25 transition-all duration-300 group-hover:-translate-y-0.5">
                            <div className="h-full w-full bg-[#050b1b] rounded-[10px] flex items-center justify-center">
                                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">M</span>
                            </div>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-foreground font-heading hidden sm:block">ClinConnect</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <Link href="/explore" className="text-sm font-medium text-muted-foreground/80 hover:text-primary transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(77,161,255,0.45)]">
                            Explore
                        </Link>
                        <Link href="/pricing" className="text-sm font-medium text-muted-foreground/80 hover:text-primary transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(77,161,255,0.45)]">
                            Pricing
                        </Link>
                        <Link href="/#contact" className="text-sm font-medium text-muted-foreground/80 hover:text-primary transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(77,161,255,0.45)]">
                            Contact Us
                        </Link>
                        <SignedIn>
                            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground/80 hover:text-primary transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(77,161,255,0.45)]">
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
            </div>
        </nav>
    );
}
