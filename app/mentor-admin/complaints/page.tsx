"use client"

import { Panel } from "@/components/ui/Panel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, MoreHorizontal } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { toast } from "sonner"

export default function ComplaintsPage() {
    const [selectedCase, setSelectedCase] = useState<any>(null)

    const handleResolve = () => {
        toast.success("Case Resolved and Closed")
        setSelectedCase(null)
    }

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Resolutions & Complaints</h2>

            <div className="grid gap-4">
                {[
                    { id: "#402", type: "No-Show", reporter: "Startup X", target: "Dr. Smith", status: "Open", severity: "High", details: "Mentor did not show up for scheduled consultation on Jan 24th despite confirmation." },
                    { id: "#399", type: "Refund Request", reporter: "BioHealth", target: "N/A", status: "In Progress", severity: "Medium", details: "Requesting refund for session that was interrupted by technical issues." },
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
                        <Button variant="outline" size="sm" onClick={() => setSelectedCase(ticket)}>Review Case</Button>
                    </Panel>
                ))}
            </div>

            <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Case Details {selectedCase?.id}</DialogTitle>
                        <DialogDescription>
                            Review complaint details and take action.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedCase && (
                        <div className="space-y-6 mt-4">
                            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-slate-500 text-sm">Type</span>
                                    <span className="font-medium">{selectedCase.type}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500 text-sm">Severity</span>
                                    <Badge variant="outline">{selectedCase.severity}</Badge>
                                </div>
                                <div className="pt-2 border-t border-white/5 mt-2">
                                    <span className="text-slate-500 text-sm block mb-1">Description</span>
                                    <p className="text-sm">{selectedCase.details}</p>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button variant="secondary" onClick={() => setSelectedCase(null)}>Close</Button>
                                <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleResolve}>Mark Resolved</Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
