"use client"
import { useAuth } from "@/components/providers/MockAuthProvider"
import { StartupDashboard } from "@/components/features/StartupDashboard"
import { MentorDashboard } from "@/components/features/MentorDashboard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Dashboard() {
    const { role, startUpProfile, mentorProfile } = useAuth()

    // Fallback if accessed directly without login (should be protected by layout/middleware in real app)
    if (!role) {
        return (
            <div className="container flex flex-col items-center justify-center min-h-[60vh]">
                <h1 className="text-2xl font-bold mb-4">Please log in to view your dashboard</h1>
                <Link href="/login">
                    <Button>Go to Login</Button>
                </Link>
            </div>
        )
    }

    if (role === 'STARTUP') {
        return <StartupDashboard profile={startUpProfile} />
    } else {
        return <MentorDashboard profile={mentorProfile} />
    }
}
