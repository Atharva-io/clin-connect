"use client"

import { Panel } from "@/components/ui/Panel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, Filter, MoreHorizontal, User, MessageSquare } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function TicketsPage() {
    const [selectedTicket, setSelectedTicket] = useState<any>(null)

    const tickets = [
        { id: "1201", subject: "Payment Failed", user: "john@startup.com", priority: "High", status: "Open", date: "2 hrs ago" },
        { id: "1202", subject: "Login Issue", user: "sarah@biotech.io", priority: "Medium", status: "In Progress", date: "4 hrs ago" },
        { id: "1203", subject: "Invoice Request", user: "finance@corp.com", priority: "Low", status: "Closed", date: "1 day ago" },
        { id: "1198", subject: "API Access", user: "dev@tech.net", priority: "High", status: "Escalated", date: "2 days ago" },
    ]

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Support Tickets</h2>
                <div className="flex gap-2">
                    <Button variant="outline"><Filter className="h-4 w-4 mr-2" /> Filter</Button>
                    <Button className="bg-orange-600 hover:bg-orange-700">Create Ticket</Button>
                </div>
            </div>

            <Panel className="overflow-hidden">
                <div className="p-4 border-b border-white/10 bg-white/[0.02]">
                    <div className="relative max-w-sm">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input placeholder="Search tickets..." className="pl-9 bg-white/5 border-white/10" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-slate-400 uppercase text-xs">
                            <tr>
                                <th className="p-4">ID</th>
                                <th className="p-4">Subject</th>
                                <th className="p-4">User</th>
                                <th className="p-4">Priority</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Last Updated</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {tickets.map((ticket, i) => (
                                <tr key={i} className="hover:bg-white/[0.02]">
                                    <td className="p-4 font-mono text-xs text-slate-500">#{ticket.id}</td>
                                    <td className="p-4 font-medium">{ticket.subject}</td>
                                    <td className="p-4 text-slate-400">
                                        <div className="flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-xs">
                                                {ticket.user.charAt(0).toUpperCase()}
                                            </div>
                                            {ticket.user}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <Badge variant="outline" className={`${ticket.priority === 'High' ? 'text-red-400 border-red-500/30' : 'text-slate-400 border-slate-700'}`}>
                                            {ticket.priority}
                                        </Badge>
                                    </td>
                                    <td className="p-4">
                                        <Badge variant="secondary" className={`${ticket.status === 'Open' ? 'bg-green-500/10 text-green-500' :
                                                ticket.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' :
                                                    ticket.status === 'Escalated' ? 'bg-red-500/10 text-red-500' : 'bg-slate-800 text-slate-400'
                                            }`}>
                                            {ticket.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4 text-slate-500">{ticket.date}</td>
                                    <td className="p-4 text-right">
                                        <Button variant="ghost" size="sm" onClick={() => setSelectedTicket(ticket)}>View</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Panel>

            <Dialog open={!!selectedTicket} onOpenChange={() => setSelectedTicket(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Ticket #{selectedTicket?.id}</DialogTitle>
                        <DialogDescription>
                            Managed by Support Team.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedTicket && (
                        <div className="space-y-4 mt-4">
                            <div className="p-3 bg-slate-900 rounded border border-slate-800">
                                <h4 className="font-semibold">{selectedTicket.subject}</h4>
                                <p className="text-sm text-slate-400 mt-1">
                                    Reported by <span className="text-white">{selectedTicket.user}</span>
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between p-2 bg-white/5 rounded text-sm">
                                    <span className="text-slate-500">Status</span>
                                    <span>{selectedTicket.status}</span>
                                </div>
                                <div className="flex justify-between p-2 bg-white/5 rounded text-sm">
                                    <span className="text-slate-500">Priority</span>
                                    <span>{selectedTicket.priority}</span>
                                </div>
                            </div>

                            <div className="flex gap-2 justify-end pt-4">
                                <Button variant="secondary" onClick={() => setSelectedTicket(null)}>Close</Button>
                                <Button className="bg-orange-600 hover:bg-orange-700" onClick={() => {
                                    toast.success("Response sent to user")
                                    setSelectedTicket(null)
                                }}>
                                    <MessageSquare className="h-4 w-4 mr-2" /> Reply
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
