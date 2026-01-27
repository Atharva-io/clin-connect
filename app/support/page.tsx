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

import { useState } from "react" // Add useState

export default function SupportDashboard() {
    const { role, signOut } = useAuth()
    const router = useRouter()
    const [selectedTicket, setSelectedTicket] = useState<any>(null)
    const [filter, setFilter] = useState('all')

    const tickets = [
        { id: "1201", type: "Payment Issue", time: "2m ago", desc: "Customer reported failed transaction during checkout process.", tag: "Billing", priority: "High", user: "john.doe@example.com", status: "unread" },
        { id: "1202", type: "Login Failure", time: "15m ago", desc: "User cannot access account after password reset.", tag: "Account", priority: "High", user: "sarah@startup.io", status: "unread" },
        { id: "1203", type: "Feature Request", time: "1h ago", desc: "Request for dark mode implementation.", tag: "Feature", priority: "Low", user: "dev@tech.com", status: "read" },
        { id: "1204", type: "Bug Report", time: "2h ago", desc: "App crashes on profile update.", tag: "Bug", priority: "Medium", user: "beta@tester.com", status: "read" },
        { id: "1205", type: "Account Lock", time: "3h ago", desc: "Suspicious activity detected.", tag: "Security", priority: "High", user: "admin@secure.net", status: "unread" }
    ]

    const filteredTickets = tickets.filter(t => {
        if (filter === 'all') return true
        if (filter === 'unread') return t.status === 'unread'
        if (filter === 'high') return t.priority === 'High'
        return true
    })

    useEffect(() => {
        if (role !== 'SUPPORT' && role !== 'SUPER_ADMIN') {
            toast.error("Unauthorized access")
            router.push('/login')
        }
    }, [role, router])

    if (!role || (role !== 'SUPPORT' && role !== 'SUPER_ADMIN')) return null

    return (
        <div className="h-[calc(100vh-8rem)] grid grid-cols-12 gap-6">
            {/* Ticket List */}
            <div className={`col-span-12 md:col-span-4 flex flex-col gap-4 ${selectedTicket ? 'hidden md:flex' : 'flex'}`}>
                <Panel className="flex-1 overflow-hidden flex flex-col p-0">
                    <div className="p-4 border-b border-white/10 bg-white/[0.02]">
                        <h2 className="font-semibold mb-3">Active Tickets</h2>
                        <div className="flex gap-2">
                            <Badge variant={filter === 'all' ? 'secondary' : 'outline'} className={`cursor-pointer ${filter === 'all' ? 'bg-orange-600 text-white hover:bg-orange-700' : 'hover:bg-white/5'}`} onClick={() => setFilter('all')}>All</Badge>
                            <Badge variant={filter === 'unread' ? 'secondary' : 'outline'} className={`cursor-pointer ${filter === 'unread' ? 'bg-orange-600 text-white hover:bg-orange-700' : 'hover:bg-white/5'}`} onClick={() => setFilter('unread')}>Unread</Badge>
                            <Badge variant={filter === 'high' ? 'secondary' : 'outline'} className={`cursor-pointer ${filter === 'high' ? 'bg-orange-600 text-white hover:bg-orange-700' : 'hover:bg-white/5'}`} onClick={() => setFilter('high')}>High Priority</Badge>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto divide-y divide-white/5">
                        {filteredTickets.map((ticket, i) => (
                            <div key={i} onClick={() => setSelectedTicket(ticket)} className={`p-4 hover:bg-white/[0.02] cursor-pointer transition-colors border-l-2 ${selectedTicket?.id === ticket.id ? 'border-orange-500 bg-white/[0.04]' : 'border-transparent hover:border-orange-500'}`}>
                                <div className="flex justify-between items-start mb-1">
                                    <span className={`font-medium ${selectedTicket?.id === ticket.id ? 'text-orange-400' : 'text-slate-200'}`}>{ticket.type}</span>
                                    <span className="text-xs text-slate-500">{ticket.time}</span>
                                </div>
                                <p className="text-sm text-slate-400 line-clamp-1">{ticket.desc}</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <Badge variant="outline" className="text-[10px] py-0 h-4 border-slate-700 text-slate-500">{ticket.tag}</Badge>
                                    <span className="text-xs text-slate-600">#{ticket.id}</span>
                                    {ticket.status === 'unread' && <div className="h-2 w-2 rounded-full bg-orange-500 ml-auto" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </Panel>
            </div>

            {/* Preview Area */}
            <div className={`col-span-12 md:col-span-8 ${selectedTicket ? 'flex' : 'hidden md:flex'} items-center justify-center border-2 border-dashed border-white/5 rounded-2xl relative`}>
                {selectedTicket ? (
                    <div className="w-full h-full p-6 flex flex-col bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10">
                        <div className="flex justify-between items-start mb-6 pb-6 border-b border-white/10">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h2 className="text-2xl font-bold">{selectedTicket.type}</h2>
                                    <Badge className="bg-orange-500/20 text-orange-400">#{selectedTicket.id}</Badge>
                                    <Badge variant="outline">{selectedTicket.priority}</Badge>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                    <User className="h-4 w-4" /> {selectedTicket.user}
                                    <span className="text-slate-600">•</span>
                                    <History className="h-4 w-4" /> {selectedTicket.time}
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setSelectedTicket(null)} className="md:hidden">
                                <LogOut className="h-4 w-4 rotate-180" />
                            </Button>
                        </div>

                        <div className="flex-1 space-y-4 overflow-y-auto">
                            <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                <p className="text-slate-300 leading-relaxed">{selectedTicket.desc}</p>
                                <p className="text-slate-300 leading-relaxed mt-2">Additional details provided by the user regarding the issue encountered on the platform. Requires investigation into the transaction logs.</p>
                            </div>

                            <div className="flex gap-4">
                                <Button className="flex-1 bg-blue-600 hover:bg-blue-700"><MessageSquare className="h-4 w-4 mr-2" /> Reply to User</Button>
                                <Button variant="outline" className="flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10"><AlertTriangle className="h-4 w-4 mr-2" /> Escalate Issue</Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center p-12 text-slate-500">
                        <div className="bg-white/5 p-4 rounded-full inline-block mb-4">
                            <Inbox className="h-8 w-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-medium text-slate-300">Select a ticket to view details</h3>
                        <p className="text-sm">Or use the search bar to find a specific user.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
