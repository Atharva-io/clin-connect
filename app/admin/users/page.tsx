"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MoreVertical, Ban, Lock } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { toast } from "sonner"

export default function AdminUsersPage() {
    const [selectedUser, setSelectedUser] = useState<any>(null)

    const handleAction = (action: string, user: string) => {
        toast.info(`${action} ${user}`)
    }

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
                                { name: "John Doe", email: "john@startup.com", role: "Startup", status: "Active", joined: "12 Jan 2024", location: "Bangalore", domain: "Neurotech" },
                                { name: "Dr. Smith", email: "dr.smith@hospital.com", role: "Mentor", status: "Verified", joined: "10 Jan 2024", location: "Mumbai", domain: "Cardiology" },
                                { name: "Jane Roe", email: "jane@tech.CO", role: "Startup", status: "Suspended", joined: "05 Jan 2024", location: "Delhi", domain: "Health AI" },
                                { name: "Alex Admin", email: "alex@clin.connect", role: "Admin", status: "Active", joined: "01 Jan 2024", location: "Remote", domain: "System" },
                            ].map((user, i) => (
                                <tr key={i} className="hover:bg-white/[0.02] cursor-pointer" onClick={() => setSelectedUser(user)}>
                                    <td className="p-4">
                                        <div className="font-medium hover:text-blue-400 transition-colors">{user.name}</div>
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
                                    <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                                        <Button variant="ghost" size="sm" onClick={() => setSelectedUser(user)}>
                                            View
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Panel>

            <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>User Details</DialogTitle>
                        <DialogDescription>
                            Detailed view of the selected user.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedUser && (
                        <div className="space-y-6 mt-6">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-slate-400">
                                    {selectedUser.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
                                    <p className="text-sm text-slate-400">{selectedUser.email}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Role</span>
                                        <span className="font-medium">{selectedUser.role}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Status</span>
                                        <Badge variant="outline" className="h-5 text-xs">{selectedUser.status}</Badge>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Joined</span>
                                        <span className="font-medium">{selectedUser.joined}</span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                                    <h4 className="text-sm font-semibold mb-2">Additional Info</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="block text-slate-500 text-xs">Location</span>
                                            {selectedUser.location}
                                        </div>
                                        <div>
                                            <span className="block text-slate-500 text-xs">Domain</span>
                                            {selectedUser.domain}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button className="w-full" variant="outline" onClick={() => {
                                    handleAction('Reset Password for', selectedUser.name);
                                    setSelectedUser(null);
                                }}>
                                    <Lock className="mr-2 h-4 w-4" /> Reset Pwd
                                </Button>
                                <Button className="w-full" variant="destructive" onClick={() => {
                                    handleAction('Suspended', selectedUser.name);
                                    setSelectedUser(null);
                                }}>
                                    <Ban className="mr-2 h-4 w-4" /> Suspend
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
