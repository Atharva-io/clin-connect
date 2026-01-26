"use client"

import { useAuth } from "@/components/providers/MockAuthProvider"
import { Button } from "@/components/ui/button"
import {
    LayoutDashboard, Ticket, Users, FileBarChart, LogOut, Search, Inbox
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

export default function SupportLayout({ children }: { children: React.ReactNode }) {
    const { role, signOut } = useAuth()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (role !== 'SUPPORT' && role !== 'SUPER_ADMIN') {
            toast.error("Unauthorized access")
            router.push('/login')
        }
    }, [role, router])

    if (!role || (role !== 'SUPPORT' && role !== 'SUPER_ADMIN')) return null

    const navItems = [
        { label: "Console", href: "/support", icon: LayoutDashboard },
        { label: "Tickets", href: "/support/tickets", icon: Ticket },
        { label: "User Lookup", href: "/support/users", icon: Users },
        { label: "Reports", href: "/support/reports", icon: FileBarChart },
    ]

    return (
        <div className="min-h-screen bg-background text-foreground font-sans flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-muted/10 backdrop-blur hidden md:flex flex-col">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-accent flex items-center justify-center font-bold text-accent-foreground">S</div>
                        <span className="font-semibold text-lg">Support</span>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <Button
                                variant="ghost"
                                className={`w-full justify-start ${pathname === item.href || pathname.startsWith(item.href + '/') ? 'bg-accent/10 text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
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
                        {navItems.find(i => i.href === pathname)?.label || "Support Console"}
                    </h1>
                    <div className="relative w-96 hidden md:block">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Quick search ticket # or user..."
                            className="w-full bg-muted/50 border border-border rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
