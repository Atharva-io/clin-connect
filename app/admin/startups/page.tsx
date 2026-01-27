"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ExternalLink, CheckCircle, XCircle } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { toast } from "sonner"

export default function AdminStartupsPage() {
    const [selectedStartup, setSelectedStartup] = useState<any>(null)

    const handleAction = (action: string, company: string) => {
        toast.success(`${action} ${company}`)
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Startup Registry</h2>
                <div className="relative w-64">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search startups..."
                        className="pl-9 bg-white/5 border-white/10 rounded-full"
                    />
                </div>
            </div>

            <Panel className="overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-slate-400 uppercase text-xs">
                            <tr>
                                <th className="p-4 font-medium">Company</th>
                                <th className="p-4 font-medium">Stage</th>
                                <th className="p-4 font-medium">Domain</th>
                                <th className="p-4 font-medium">Verification</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { name: "MedTech Sol", founder: "Rajiv K.", stage: "Seed", domain: "Cardiology", status: "Pending", description: "Developing AI-based ECG monitoring." },
                                { name: "BioGen Inc", founder: "Sarah L.", stage: "Series A", domain: "Oncology", status: "Verified", description: "Novel biomarkers for early cancer detection." },
                                { name: "NeuroStart", founder: "Mike T.", stage: "Prototype", domain: "Neurology", status: "Pending", description: "Wearable for seizure prediction." },
                            ].map((startup, i) => (
                                <tr key={i} className="hover:bg-white/[0.02] cursor-pointer" onClick={() => setSelectedStartup(startup)}>
                                    <td className="p-4">
                                        <div className="font-medium">{startup.name}</div>
                                        <div className="text-xs text-slate-500">Founder: {startup.founder}</div>
                                    </td>
                                    <td className="p-4">
                                        <div className="inline-flex items-center px-2 py-1 rounded bg-slate-800 text-xs text-slate-300">
                                            {startup.stage}
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-300">{startup.domain}</td>
                                    <td className="p-4">
                                        <Badge variant="secondary" className={`
                                            ${startup.status === 'Verified' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}
                                        `}>
                                            {startup.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                                        <div className="flex justify-end gap-2">
                                            {startup.status === 'Pending' ? (
                                                <>
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-green-500 hover:bg-green-500/10" onClick={() => handleAction('Verified', startup.name)}>
                                                        <CheckCircle className="h-4 w-4" />
                                                    </Button>
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500 hover:bg-red-500/10" onClick={() => handleAction('Rejected', startup.name)}>
                                                        <XCircle className="h-4 w-4" />
                                                    </Button>
                                                </>
                                            ) : (
                                                <Button size="sm" variant="outline" className="h-8 border-slate-700 text-slate-400 hover:text-white" onClick={() => setSelectedStartup(startup)}>
                                                    Manage
                                                </Button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Panel>

            <Dialog open={!!selectedStartup} onOpenChange={() => setSelectedStartup(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Company Details</DialogTitle>
                        <DialogDescription>
                            Review startup information and management.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedStartup && (
                        <div className="space-y-6 mt-4">
                            <div>
                                <h3 className="text-xl font-bold">{selectedStartup.name}</h3>
                                <p className="text-sm text-slate-400">{selectedStartup.founder} • {selectedStartup.domain}</p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-sm">
                                <h4 className="font-semibold mb-2">About</h4>
                                <p className="text-slate-400">{selectedStartup.description}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-center">
                                    <div className="text-xs text-slate-500 uppercase">Stage</div>
                                    <div className="font-semibold">{selectedStartup.stage}</div>
                                </div>
                                <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-center">
                                    <div className="text-xs text-slate-500 uppercase">Status</div>
                                    <div className={`font-semibold ${selectedStartup.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'}`}>
                                        {selectedStartup.status}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 justify-end pt-4 border-t border-white/10">
                                <Button variant="outline" onClick={() => setSelectedStartup(null)}>Close</Button>
                                <Button onClick={() => {
                                    handleAction('Updated', selectedStartup.name);
                                    setSelectedStartup(null);
                                }}>Save Changes</Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
