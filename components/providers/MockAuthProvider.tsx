"use client"

import React, { createContext, useContext, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

// Create a mock context that mimics some Clerk functionality
const MockAuthContext = createContext({
    isLoaded: true,
    isSignedIn: false,
    userId: null as string | null,
    role: null as 'STARTUP' | 'MENTOR' | 'ADMIN' | 'SUPER_ADMIN' | 'MENTOR_ADMIN' | 'SUPPORT' | null,
    startUpProfile: null as any,
    mentorProfile: null as any,
    signIn: (role: 'STARTUP' | 'MENTOR' | 'ADMIN' | 'SUPER_ADMIN' | 'MENTOR_ADMIN' | 'SUPPORT') => { },
    signOut: () => { },
})

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [userId, setUserId] = useState<string | null>(null)
    const [role, setRole] = useState<'STARTUP' | 'MENTOR' | 'ADMIN' | 'SUPER_ADMIN' | 'MENTOR_ADMIN' | 'SUPPORT' | null>(null)
    const router = useRouter()

    const signIn = (selectedRole: 'STARTUP' | 'MENTOR' | 'ADMIN' | 'SUPER_ADMIN' | 'MENTOR_ADMIN' | 'SUPPORT') => {
        setIsSignedIn(true)
        setUserId(selectedRole === 'STARTUP' ? "user-startup" : selectedRole === 'MENTOR' ? "user-mentor" : `user-${selectedRole.toLowerCase()}`)
        setRole(selectedRole)
        // Redirect logic
        if (selectedRole === 'STARTUP' || selectedRole === 'MENTOR') {
            router.push('/dashboard')
        } else if (selectedRole === 'ADMIN' || selectedRole === 'SUPER_ADMIN') {
            router.push('/admin')
        } else if (selectedRole === 'MENTOR_ADMIN') {
            router.push('/mentor-admin')
        } else if (selectedRole === 'SUPPORT') {
            router.push('/support')
        }
    }

    const signOut = () => {
        setIsSignedIn(false)
        setUserId(null)
        setRole(null)
        toast.success("Signed out successfully")
        router.push('/')
    }

    // Mock Profiles
    const startUpProfile = {
        name: "ForschMedx",
        type: "MedTech",
        stage: "Prototype",
        domain: "Neurology",
        description: "AI-driven diagnostics for early cancer detection."
    }

    const mentorProfile = {
        name: "Abhishek Sir",
        role: "Senior Medical Advisor",
        expertise: ["Oncology", "Clinical Trials"],
        hospital: "Tata Memorial Centre",
        location: "Mumbai, MH"
    }

    return (
        <MockAuthContext.Provider value={{
            isLoaded: true,
            isSignedIn,
            userId,
            role,
            startUpProfile,
            mentorProfile,
            signIn,
            signOut
        }}>
            {children}
        </MockAuthContext.Provider>
    )
}

// Custom hooks to replace Clerk's
export const useAuth = () => useContext(MockAuthContext)
export const useUser = () => {
    const { isSignedIn, userId, role } = useAuth();
    return {
        isLoaded: true,
        isSignedIn,
        user: isSignedIn ? {
            id: userId,
            fullName: role === 'STARTUP' ? "Startup Founder" : "Dr. Mentor",
            primaryEmailAddress: { emailAddress: "demo@example.com" },
            imageUrl: "https://github.com/shadcn.png"
        } : null
    }
}

// Mock Components
export const SignedIn = ({ children }: { children: React.ReactNode }) => {
    const { isSignedIn } = useAuth()
    return isSignedIn ? <>{children}</> : null
}

export const SignedOut = ({ children }: { children: React.ReactNode }) => {
    const { isSignedIn } = useAuth()
    return !isSignedIn ? <>{children}</> : null
}

// Updated to redirect to login page instead of direct sign-in
export const SignInButton = ({ children, mode }: { children: React.ReactNode, mode?: string }) => {
    const router = useRouter()
    return <span onClick={() => router.push('/login')} className="cursor-pointer">{children}</span>
}

export const SignUpButton = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    return <span onClick={() => router.push('/sign-up')} className="cursor-pointer">{children}</span>
}

export const UserButton = () => {
    const { signOut } = useAuth()
    return (
        <button onClick={signOut} className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center overflow-hidden hover:ring-2 ring-primary transition-all">
            <img src="https://github.com/shadcn.png" alt="User" />
        </button>
    )
}
