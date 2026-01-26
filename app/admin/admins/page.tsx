"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/providers/MockAuthProvider"
import { Shield, ShieldAlert, Plus, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

export default function AdminManagementPage() {
    const { role } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (role !== 'SUPER_ADMIN') {
            toast.error("Super Admin access required")
            router.push('/admin')
        }
    }, [role, router])

    if (role !== 'SUPER_ADMIN') return null

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-red-500" />
                    Admin Management
                </h2>
                <Button className="bg-red-600 hover:bg-red-700">
                    <Plus className="h-4 w-4 mr-2" /> Add New Admin
                </Button>
            </div>

            <Panel>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-slate-400 uppercase text-xs">
                            <tr>
                                <th className="p-4 font-medium">Admin User</th>
                                <th className="p-4 font-medium">Role Level</th>
                                <th className="p-4 font-medium">Access Scope</th>
                                <th className="p-4 font-medium">Last Active</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { name: "System Owner", email: "owner@clin.connect", role: "SUPER_ADMIN", scope: "Global", active: "Now" },
                                { name: "Alex Admin", email: "alex@clin.connect", role: "ADMIN", scope: "Users, Startups", active: "2h ago" },
                                { name: "Sarah Ops", email: "sarah@clin.connect", role: "MENTOR_ADMIN", scope: "Mentors only", active: "5h ago" },
                                { name: "Dave Support", email: "dave@clin.connect", role: "SUPPORT", scope: "Tickets", active: "1d ago" },
                            ].map((admin, i) => (
                                <tr key={i} className="hover:bg-white/[0.02]">
                                    <td className="p-4">
                                        <div className="font-medium flex items-center gap-2">
                                            <Shield className="h-3 w-3 text-slate-500" />
                                            {admin.name}
                                        </div>
                                        <div className="text-xs text-slate-500 pl-5">{admin.email}</div>
                                    </td>
                                    <td className="p-4">
                                        <Badge variant="outline" className={`
                                            ${admin.role === 'SUPER_ADMIN' ? 'border-red-500/50 text-red-400 bg-red-500/10' : 'border-slate-700 text-slate-300'}
                                        `}>
                                            {admin.role}
                                        </Badge>
                                    </td>
                                    <td className="p-4 text-slate-400">{admin.scope}</td>
                                    <td className="p-4 text-slate-500">{admin.active}</td>
                                    <td className="p-4 text-right">
                                        {admin.role !== 'SUPER_ADMIN' && (
                                            <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500 hover:bg-red-500/10">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
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
