"use client"

import { Panel } from "@/components/ui/Panel"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/providers/MockAuthProvider"
import { FileText } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

export default function AuditLogsPage() {
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
            <h2 className="text-xl font-semibold">System Audit Logs</h2>

            <Panel className="overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-slate-400 uppercase text-xs">
                        <tr>
                            <th className="p-4">Timestamp</th>
                            <th className="p-4">Actor</th>
                            <th className="p-4">Action</th>
                            <th className="p-4">Target Resource</th>
                            <th className="p-4">Details</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-mono text-xs">
                        {[
                            { time: "2024-01-16 14:30:22", actor: "admin@clin.connect", action: "UPDATE_STATUS", target: "USR-001", details: "Status changed to VERIFIED" },
                            { time: "2024-01-16 14:15:10", actor: "Sadmin@clin.connect", action: "DELETE_USER", target: "USR-999", details: "Spam account removal" },
                            { time: "2024-01-16 13:45:00", actor: "SYSTEM", action: "BACKUP_DB", target: "GLOBAL", details: "Auto-backup successful" },
                            { time: "2024-01-16 12:20:05", actor: "Madmin@clin.connect", action: "APPROVE_MENTOR", target: "MEN-332", details: "Docs verified" },
                        ].map((log, i) => (
                            <tr key={i} className="hover:bg-white/[0.02]">
                                <td className="p-4 text-slate-500">{log.time}</td>
                                <td className="p-4 text-indigo-400">{log.actor}</td>
                                <td className="p-4 font-bold text-slate-300">{log.action}</td>
                                <td className="p-4 text-slate-400">{log.target}</td>
                                <td className="p-4 text-slate-500">{log.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Panel>
        </div>
    )
}
