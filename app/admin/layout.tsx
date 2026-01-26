"use client"

import { useAuth } from "@/components/providers/MockAuthProvider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    LayoutDashboard, Users, Building2, Stethoscope,
    MessageSquare, CreditCard, ShieldAlert, LogOut
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { role, signOut } = useAuth()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (role !== 'ADMIN' && role !== 'SUPER_ADMIN') {
            toast.error("Unauthorized access")
            router.push('/login')
        }
    }, [role, router])

    if (!role || (role !== 'ADMIN' && role !== 'SUPER_ADMIN')) return null

    const navItems = [
        { label: "Overview", href: "/admin", icon: LayoutDashboard },
        { label: "Users", href: "/admin/users", icon: Users },
        { label: "Startups", href: "/admin/startups", icon: Building2 },
        { label: "Mentors", href: "/admin/mentors", icon: Stethoscope },
        { label: "Requests", href: "/admin/requests", icon: MessageSquare },
        { label: "Payments", href: "/admin/payments", icon: CreditCard },
    ]

    const superAdminItems = [
        { label: "Admins & Roles", href: "/admin/admins", icon: ShieldAlert },
        { label: "Audit Logs", href: "/admin/audit", icon: ShieldAlert },
        { label: "System Settings", href: "/admin/settings", icon: ShieldAlert },
    ]

    return (
        <div className="min-h-screen bg-background text-foreground font-sans flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-muted/10 backdrop-blur hidden md:flex flex-col">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-primary flex items-center justify-center font-bold text-primary-foreground">A</div>
                        <span className="font-semibold text-lg">Admin</span>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <Button
                                variant="ghost"
                                className={`w-full justify-start ${pathname === item.href ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
                            >
                                <item.icon className="h-4 w-4 mr-3" />
                                {item.label}
                            </Button>
                        </Link>
                    ))}

                    {role === 'SUPER_ADMIN' && (
                        <>
                            <div className="mt-6 mb-2 px-4 text-xs font-semibold text-destructive uppercase tracking-wider">
                                Super Admin
                            </div>
                            {superAdminItems.map((item) => (
                                <Link key={item.href} href={item.href}>
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start ${pathname === item.href ? 'bg-destructive/10 text-destructive' : 'text-muted-foreground hover:text-destructive hover:bg-destructive/5'}`}
                                    >
                                        <item.icon className="h-4 w-4 mr-3" />
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}
                        </>
                    )}
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
                        {navItems.find(i => i.href === pathname)?.label ||
                            superAdminItems.find(i => i.href === pathname)?.label ||
                            "Dashboard"}
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-muted-foreground">
                            Logged in as <span className="text-foreground font-medium">{role === 'SUPER_ADMIN' ? 'Super Admin' : 'Admin'}</span>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
