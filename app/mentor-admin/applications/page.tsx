"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, FileText, Download } from "lucide-react"

export default function ApplicationsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Mentor Applications</h2>
                <div className="flex gap-2">
                    <Badge variant="outline" className="bg-teal-500/10 text-teal-400 border-teal-500/20">Pending (3)</Badge>
                    <Badge variant="outline" className="text-slate-500 border-slate-700">Archived</Badge>
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
                            {[
                                { name: "Dr. Vikram Singh", spec: "Neurology", docs: ["Medical License", "CV"], date: "2 days ago" },
                                { name: "Sarah Jenkins, RN", spec: "Critical Care", docs: ["Nursing License", "Certifi..."], date: "3 days ago" },
                                { name: "Dr. P. Kumar", spec: "Pediatrics", docs: ["License", "Fellowship"], date: "5 days ago" },
                            ].map((app, i) => (
                                <tr key={i} className="hover:bg-white/[0.02]">
                                    <td className="p-4 font-medium">{app.name}</td>
                                    <td className="p-4 text-slate-400">{app.spec}</td>
                                    <td className="p-4">
                                        <div className="flex gap-2">
                                            {app.docs.map((doc, j) => (
                                                <Button key={j} variant="outline" size="sm" className="h-6 text-xs px-2 border-slate-700 text-slate-400 hover:text-white">
                                                    <FileText className="h-3 w-3 mr-1" /> {doc}
                                                </Button>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-500">{app.date}</td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button size="sm" className="h-8 bg-green-600 hover:bg-green-700">Approve</Button>
                                            <Button size="sm" variant="ghost" className="h-8 text-red-500 hover:bg-red-500/10">Reject</Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Panel>
        </div>
    )
}
