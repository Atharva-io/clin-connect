"use client"

import { useAuth } from "@/components/providers/MockAuthProvider"
import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Inbox } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Search, LogOut, MessageSquare, AlertTriangle, User, History } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

export default function SupportDashboard() {
    const { role, signOut } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (role !== 'SUPPORT' && role !== 'SUPER_ADMIN') {
            toast.error("Unauthorized access")
            router.push('/login')
        }
    }, [role, router])

    if (!role || (role !== 'SUPPORT' && role !== 'SUPER_ADMIN')) return null

    // Layout handles navigation now, so this page should just be the dashboard content

    return (
        <div className="h-[calc(100vh-8rem)] grid grid-cols-12 gap-6">
            {/* Ticket List */}
            <div className="col-span-4 flex flex-col gap-4">
                <Panel className="flex-1 overflow-hidden flex flex-col p-0">
                    <div className="p-4 border-b border-white/10 bg-white/[0.02]">
                        <h2 className="font-semibold mb-3">Active Tickets</h2>
                        <div className="flex gap-2">
                            <Badge variant="secondary" className="bg-orange-600 text-white hover:bg-orange-700 cursor-pointer">All</Badge>
                            <Badge variant="outline" className="cursor-pointer hover:bg-white/5">Unread</Badge>
                            <Badge variant="outline" className="cursor-pointer hover:bg-white/5">High Priority</Badge>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto divide-y divide-white/5">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="p-4 hover:bg-white/[0.02] cursor-pointer transition-colors border-l-2 border-transparent hover:border-orange-500">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-medium text-slate-200">Payment Issue</span>
                                    <span className="text-xs text-slate-500">2m ago</span>
                                </div>
                                <p className="text-sm text-slate-400 line-clamp-1">Customer reported failed transaction during...</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <Badge variant="outline" className="text-[10px] py-0 h-4 border-slate-700 text-slate-500">Billing</Badge>
                                    <span className="text-xs text-slate-600">#120{i}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Panel>
            </div>

            {/* Preview Area (Placeholder for when no ticket selected) */}
            <div className="col-span-8 flex items-center justify-center p-12 text-slate-500 border-2 border-dashed border-white/5 rounded-2xl">
                <div className="text-center">
                    <div className="bg-white/5 p-4 rounded-full inline-block mb-4">
                        <Inbox className="h-8 w-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-300">Select a ticket to view details</h3>
                    <p className="text-sm">Or use the search bar to find a specific user.</p>
                </div>
            </div>
        </div>
    )
}
