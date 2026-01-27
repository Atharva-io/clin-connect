"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, FileText, Download } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { toast } from "sonner"

export default function ApplicationsPage() {
    const [filter, setFilter] = useState<'pending' | 'archived'>('pending')
    const [selectedApp, setSelectedApp] = useState<any>(null)

    const allApps = [
        { name: "Dr. Vikram Singh", spec: "Neurology", docs: ["Medical License", "CV"], date: "2 days ago", status: "pending", email: "vikram@example.com", exp: "12 Years" },
        { name: "Sarah Jenkins, RN", spec: "Critical Care", docs: ["Nursing License", "Certifi..."], date: "3 days ago", status: "pending", email: "sarah@example.com", exp: "8 Years" },
        { name: "Dr. P. Kumar", spec: "Pediatrics", docs: ["License", "Fellowship"], date: "5 days ago", status: "pending", email: "kumar@example.com", exp: "15 Years" },
        { name: "Dr. Old One", spec: "General", docs: ["License"], date: "1 month ago", status: "archived", email: "old@example.com", exp: "20 Years" },
    ]

    const filteredApps = allApps.filter(app => app.status === filter)

    const handleAction = (action: string, name: string) => {
        toast.success(`${action} ${name}`)
        setSelectedApp(null)
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Mentor Applications</h2>
                <div className="flex gap-2">
                    <Badge variant={filter === 'pending' ? 'default' : 'outline'} className="cursor-pointer" onClick={() => setFilter('pending')}>Pending ({allApps.filter(a => a.status === 'pending').length})</Badge>
                    <Badge variant={filter === 'archived' ? 'default' : 'outline'} className="cursor-pointer text-slate-500 border-slate-700" onClick={() => setFilter('archived')}>Archived</Badge>
                </div>
            </div>

            <Panel className="overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-slate-400 uppercase text-xs">
                            <tr>
                                <th className="p-4">Applicant</th>
                                <th className="p-4">Specialty</th>
                                <th className="p-4">Credentials</th>
                                <th className="p-4">Applied</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredApps.map((app, i) => (
                                <tr key={i} className="hover:bg-white/[0.02] cursor-pointer" onClick={() => setSelectedApp(app)}>
                                    <td className="p-4 font-medium">{app.name}</td>
                                    <td className="p-4 text-slate-400">{app.spec}</td>
                                    <td className="p-4">
                                        <div className="flex gap-2">
                                            {app.docs.map((doc, j) => (
                                                <Button key={j} variant="outline" size="sm" className="h-6 text-xs px-2 border-slate-700 text-slate-400 hover:text-white" onClick={(e) => {
                                                    e.stopPropagation()
                                                    toast.info(`Viewing ${doc}`)
                                                }}>
                                                    <FileText className="h-3 w-3 mr-1" /> {doc}
                                                </Button>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-500">{app.date}</td>
                                    <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                                        <div className="flex justify-end gap-2">
                                            <Button size="sm" className="h-8 bg-green-600 hover:bg-green-700" onClick={() => handleAction('Approved', app.name)}>Approve</Button>
                                            <Button size="sm" variant="ghost" className="h-8 text-red-500 hover:bg-red-500/10" onClick={() => handleAction('Rejected', app.name)}>Reject</Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Panel>

            <Dialog open={!!selectedApp} onOpenChange={() => setSelectedApp(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Application Details</DialogTitle>
                        <DialogDescription>
                            Review applicant information and documents.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedApp && (
                        <div className="space-y-6 mt-4">
                            <div>
                                <h3 className="text-xl font-bold">{selectedApp.name}</h3>
                                <p className="text-sm text-slate-400">{selectedApp.spec} • {selectedApp.exp} Experience</p>
                                <p className="text-sm text-slate-500">{selectedApp.email}</p>
                            </div>

                            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                                <h4 className="text-sm font-semibold mb-3">Submitted Documents</h4>
                                <div className="space-y-2">
                                    {selectedApp.docs.map((doc: string, i: number) => (
                                        <div key={i} className="flex justify-between items-center p-2 bg-slate-800/50 rounded text-sm">
                                            <span className="flex items-center gap-2"><FileText className="h-4 w-4 text-blue-400" /> {doc}</span>
                                            <Button size="sm" variant="ghost" className="h-7 text-xs"><Download className="h-3 w-3 mr-1" /> Download</Button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
                                <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-500/10" onClick={() => handleAction('Rejected', selectedApp.name)}>Reject Application</Button>
                                <Button className="bg-green-600 hover:bg-green-700" onClick={() => handleAction('Approved', selectedApp.name)}>Approve Mentor</Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
