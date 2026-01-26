"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ExternalLink, CheckCircle, XCircle } from "lucide-react"

export default function AdminStartupsPage() {
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
                                { name: "MedTech Sol", founder: "Rajiv K.", stage: "Seed", domain: "Cardiology", status: "Pending" },
                                { name: "BioGen Inc", founder: "Sarah L.", stage: "Series A", domain: "Oncology", status: "Verified" },
                                { name: "NeuroStart", founder: "Mike T.", stage: "Prototype", domain: "Neurology", status: "Pending" },
                            ].map((startup, i) => (
                                <tr key={i} className="hover:bg-white/[0.02]">
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
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            {startup.status === 'Pending' ? (
                                                <>
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-green-500 hover:bg-green-500/10">
                                                        <CheckCircle className="h-4 w-4" />
                                                    </Button>
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500 hover:bg-red-500/10">
                                                        <XCircle className="h-4 w-4" />
                                                    </Button>
                                                </>
                                            ) : (
                                                <Button size="sm" variant="outline" className="h-8 border-slate-700 text-slate-400 hover:text-white">
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
        </div>
    )
}
