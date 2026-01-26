"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MoreVertical, Ban, Lock } from "lucide-react"

export default function AdminUsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">User Management</h2>
                <div className="relative w-64">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search users..."
                        className="pl-9 bg-white/5 border-white/10 rounded-full"
                    />
                </div>
            </div>

            <Panel className="overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-slate-400 uppercase text-xs">
                            <tr>
                                <th className="p-4 font-medium">User</th>
                                <th className="p-4 font-medium">Role</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium">Joined</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { name: "John Doe", email: "john@startup.com", role: "Startup", status: "Active", joined: "12 Jan 2024" },
                                { name: "Dr. Smith", email: "dr.smith@hospital.com", role: "Mentor", status: "Verified", joined: "10 Jan 2024" },
                                { name: "Jane Roe", email: "jane@tech.CO", role: "Startup", status: "Suspended", joined: "05 Jan 2024" },
                                { name: "Alex Admin", email: "alex@clin.connect", role: "Admin", status: "Active", joined: "01 Jan 2024" },
                            ].map((user, i) => (
                                <tr key={i} className="hover:bg-white/[0.02]">
                                    <td className="p-4">
                                        <div className="font-medium">{user.name}</div>
                                        <div className="text-xs text-slate-500">{user.email}</div>
                                    </td>
                                    <td className="p-4">
                                        <Badge variant="outline" className="border-slate-700 bg-slate-400/10 text-slate-300">
                                            {user.role}
                                        </Badge>
                                    </td>
                                    <td className="p-4">
                                        <Badge variant="secondary" className={`
                                            ${user.status === 'Active' ? 'bg-green-500/10 text-green-500' :
                                                user.status === 'Verified' ? 'bg-blue-500/10 text-blue-500' :
                                                    user.status === 'Suspended' ? 'bg-red-500/10 text-red-500' : ''}
                                        `}>
                                            {user.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4 text-slate-400">{user.joined}</td>
                                    <td className="p-4 text-right">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10">
                                            <MoreVertical className="h-4 w-4" />
                                        </Button>
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
