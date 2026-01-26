"use client"

import { useAuth } from "@/components/providers/MockAuthProvider"
import { Button } from "@/components/ui/button"
import {
    LayoutDashboard, UserCheck, MessageSquare, Calendar,
    FileText, LogOut, ClipboardCheck
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

export default function MentorAdminLayout({ children }: { children: React.ReactNode }) {
    const { role, signOut } = useAuth()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (role !== 'MENTOR_ADMIN' && role !== 'SUPER_ADMIN') {
            toast.error("Unauthorized access")
            router.push('/login')
        }
    }, [role, router])

    if (!role || (role !== 'MENTOR_ADMIN' && role !== 'SUPER_ADMIN')) return null

    const navItems = [
        { label: "Overview", href: "/mentor-admin", icon: LayoutDashboard },
        { label: "Applications", href: "/mentor-admin/applications", icon: UserCheck },
        { label: "Complaints", href: "/mentor-admin/complaints", icon: MessageSquare },
        { label: "Sessions", href: "/mentor-admin/sessions", icon: Calendar },
        { label: "Performance", href: "/mentor-admin/performance", icon: ClipboardCheck },
    ]

    return (
        <div className="min-h-screen bg-background text-foreground font-sans flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-muted/10 backdrop-blur hidden md:flex flex-col">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-secondary flex items-center justify-center font-bold text-secondary-foreground">M</div>
                        <span className="font-semibold text-lg">Mentor Ops</span>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <Button
                                variant="ghost"
                                className={`w-full justify-start ${pathname === item.href ? 'bg-secondary/10 text-secondary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
                            >
                                <item.icon className="h-4 w-4 mr-3" />
                                {item.label}
                            </Button>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-border">
                    <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted" onClick={signOut}>
                        <LogOut className="h-4 w-4 mr-3" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                <header className="h-16 border-b border-border bg-muted/10 backdrop-blur flex items-center justify-between px-6">
                    <h1 className="font-semibold text-lg">
                        {navItems.find(i => i.href === pathname)?.label || "Dashboard"}
                    </h1>
                    <div className="text-sm text-muted-foreground">
                        Logged in as <span className="text-foreground font-medium">Mentor Admin</span>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
