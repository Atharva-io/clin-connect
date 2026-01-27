"use client"

import { useAuth } from "@/components/providers/MockAuthProvider"
import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, ClipboardCheck, AlertCircle, LogOut, CheckCircle, XCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

export default function MentorAdminDashboard() {
    const { role, signOut } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (role !== 'MENTOR_ADMIN' && role !== 'SUPER_ADMIN') {
            toast.error("Unauthorized access")
            router.push('/login')
        }
    }, [role, router])

    if (!role || (role !== 'MENTOR_ADMIN' && role !== 'SUPER_ADMIN')) return null

    // Layout handles navigation now, so this page should just be the dashboard content

    return (
        <div className="space-y-8">
            {/* KPI Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Panel className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-teal-500/10 text-teal-500"><Stethoscope className="h-6 w-6" /></div>
                    <div>
                        <div className="text-2xl font-bold">18</div>
                        <div className="text-xs text-slate-400">Pending Approvals</div>
                    </div>
                </Panel>
                <Panel className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-500"><CheckCircle className="h-6 w-6" /></div>
                    <div>
                        <div className="text-2xl font-bold">312</div>
                        <div className="text-xs text-slate-400">Active Mentors</div>
                    </div>
                </Panel>
                <Panel className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-500"><AlertCircle className="h-6 w-6" /></div>
                    <div>
                        <div className="text-2xl font-bold">3</div>
                        <div className="text-xs text-slate-400">Open Complaints</div>
                    </div>
                </Panel>
                <Panel className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-purple-500/10 text-purple-500"><ClipboardCheck className="h-6 w-6" /></div>
                    <div>
                        <div className="text-2xl font-bold">4.8</div>
                        <div className="text-xs text-slate-400">Avg Rating</div>
                    </div>
                </Panel>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Panel className="min-h-[400px]">
                        <div className="border-b border-white/10 p-4">
                            <h2 className="font-semibold">Mentor Application Queue</h2>
                        </div>
                        <div className="divide-y divide-white/5">
                            {[
                                { name: "Dr. Vikram Singh", spec: "Neurology", exp: "12 yrs", status: "Pending Docs" },
                                { name: "Sarah Jenkins, RN", spec: "Critical Care", exp: "8 yrs", status: "Ready to Review" },
                                { name: "Dr. P. Kumar", spec: "Pediatrics", exp: "15 yrs", status: "Ready to Review" },
                            ].map((item, i) => (
                                <div key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02]">
                                    <div>
                                        <div className="font-medium">{item.name}</div>
                                        <div className="text-sm text-slate-400">{item.spec} • {item.exp}</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Badge variant="secondary" className="bg-slate-800 text-slate-300">{item.status}</Badge>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost" className="text-green-500 hover:text-green-400 hover:bg-green-500/10" onClick={() => toast.success(`Approved ${item.name}`)}><CheckCircle className="h-4 w-4" /></Button>
                                            <Button size="icon" variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-500/10" onClick={() => toast.info(`Rejected ${item.name}`)}><XCircle className="h-4 w-4" /></Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Panel>
                </div>

                <div className="space-y-6">
                    <Panel className="p-4">
                        <h3 className="font-semibold mb-4 text-yellow-400 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" /> High Priority
                        </h3>
                        <div className="space-y-3">
                            <div className="p-3 bg-white/5 rounded text-sm">
                                <div className="font-medium text-red-300">Complaint #402</div>
                                <div className="text-xs text-slate-400 mt-1">Mentor no-show reported by Startup X.</div>
                                <Button variant="link" className="h-auto p-0 text-xs text-blue-400 mt-2" onClick={() => toast.warning("Opening Investigation Case #402...")}>Investigate</Button>
                            </div>
                        </div>
                    </Panel>
                </div>
            </div>
        </div>
    )
}
