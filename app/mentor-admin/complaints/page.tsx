"use client"

import { Panel } from "@/components/ui/Panel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, MoreHorizontal } from "lucide-react"

export default function ComplaintsPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Resolutions & Complaints</h2>

            <div className="grid gap-4">
                {[
                    { id: "#402", type: "No-Show", reporter: "Startup X", target: "Dr. Smith", status: "Open", severity: "High" },
                    { id: "#399", type: "Refund Request", reporter: "BioHealth", target: "N/A", status: "In Progress", severity: "Medium" },
                ].map((ticket, i) => (
                    <Panel key={i} className="p-4 flex items-center justify-between">
                        <div className="flex items-start gap-4">
                            <div className={`p-2 rounded-full ${ticket.severity === 'High' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                <AlertCircle className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold">{ticket.id}: {ticket.type}</span>
                                    <Badge variant="outline" className={`${ticket.status === 'Open' ? 'text-red-400 border-red-500/30' : 'text-blue-400 border-blue-500/30'}`}>
                                        {ticket.status}
                                    </Badge>
                                </div>
                                <div className="text-sm text-slate-400">
                                    Reported by <span className="text-white">{ticket.reporter}</span> against <span className="text-white">{ticket.target}</span>
                                </div>
                            </div>
                        </div>
                        <Button variant="outline" size="sm">Review Case</Button>
                    </Panel>
                ))}
            </div>
        </div>
    )
}
