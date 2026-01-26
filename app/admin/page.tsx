"use client"

import { useAuth } from "@/components/providers/MockAuthProvider"
import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Building, Stethoscope, DollarSign, Activity, FileText, Settings, ShieldAlert, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

export default function AdminDashboard() {
    const { role, signOut } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (role !== 'ADMIN' && role !== 'SUPER_ADMIN') {
            toast.error("Unauthorized access")
            router.push('/login')
        }
    }, [role, router])

    if (!role || (role !== 'ADMIN' && role !== 'SUPER_ADMIN')) return null

    // Layout handles navigation now, so this page should just be the dashboard content

    return (
        <div className="space-y-8">
            {/* KPI Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Panel className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-500"><Users className="h-6 w-6" /></div>
                    <div>
                        <div className="text-2xl font-bold">2,143</div>
                        <div className="text-xs text-slate-400">Total Users</div>
                    </div>
                </Panel>
                <Panel className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-purple-500/10 text-purple-500"><Building className="h-6 w-6" /></div>
                    <div>
                        <div className="text-2xl font-bold">684</div>
                        <div className="text-xs text-slate-400">Active Startups</div>
                    </div>
                </Panel>
                <Panel className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-green-500/10 text-green-500"><Stethoscope className="h-6 w-6" /></div>
                    <div>
                        <div className="text-2xl font-bold">312</div>
                        <div className="text-xs text-slate-400">Active Mentors</div>
                    </div>
                </Panel>
                <Panel className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-500"><DollarSign className="h-6 w-6" /></div>
                    <div>
                        <div className="text-2xl font-bold">₹1.2L</div>
                        <div className="text-xs text-slate-400">Revenue (Mo)</div>
                    </div>
                </Panel>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    <Panel className="min-h-[400px]">
                        <div className="border-b border-white/10 p-4 flex items-center justify-between">
                            <h2 className="font-semibold">Recent Activity</h2>
                            <div className="flex gap-2">
                                <Badge variant="outline" className="cursor-pointer">All</Badge>
                                <Badge variant="outline" className="cursor-pointer text-slate-500 border-slate-700">Verifications</Badge>
                                <Badge variant="outline" className="cursor-pointer text-slate-500 border-slate-700">Flagged</Badge>
                            </div>
                        </div>
                        <div className="divide-y divide-white/5">
                            {[
                                { user: "Dr. Ananya Sharma", action: "Profile Verified", time: "2m ago", type: "success" },
                                { user: "MedTech Sol", action: "Suspended (Spam)", time: "15m ago", type: "danger" },
                                { user: "BioGen Inc", action: "New Subscription", time: "1h ago", type: "info" },
                                { user: "Rahul K.", action: "Reported msg", time: "2h ago", type: "warning" },
                            ].map((item, i) => (
                                <div key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02]">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-2 w-2 rounded-full ${item.type === 'success' ? 'bg-green-500' :
                                            item.type === 'danger' ? 'bg-red-500' :
                                                item.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                                            }`} />
                                        <span className="font-medium text-sm">{item.user}</span>
                                        <span className="text-sm text-slate-400">{item.action}</span>
                                    </div>
                                    <span className="text-xs text-slate-500">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </Panel>
                </div>

                {/* Sidebar / Quick Actions */}
                <div className="space-y-6">
                    {role === 'SUPER_ADMIN' && (
                        <Panel className="p-4 border-red-500/20 bg-red-500/5">
                            <h3 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                                <ShieldAlert className="h-4 w-4" /> Super Admin Zone
                            </h3>
                            <div className="space-y-2">
                                <Button variant="outline" className="w-full justify-start border-red-500/20 hover:bg-red-500/10 text-red-400">
                                    Manage Admins
                                </Button>
                                <Button variant="outline" className="w-full justify-start border-red-500/20 hover:bg-red-500/10 text-red-400">
                                    Audit Logs
                                </Button>
                                <Button variant="outline" className="w-full justify-start border-red-500/20 hover:bg-red-500/10 text-red-400">
                                    System Settings
                                </Button>
                                <Button variant="outline" className="w-full justify-start border-red-500/20 hover:bg-red-500/10 text-red-400">
                                    Feature Flags
                                </Button>
                            </div>
                        </Panel>
                    )}

                    <Panel className="p-4">
                        <h3 className="font-semibold mb-4">Pending Verifications</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                                <span className="text-sm">Dr. A. Gupta</span>
                                <Button size="sm" className="h-7 text-xs bg-green-600 hover:bg-green-700">Approve</Button>
                            </div>
                            <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                                <span className="text-sm">NeuroStart</span>
                                <Button size="sm" className="h-7 text-xs bg-green-600 hover:bg-green-700">Approve</Button>
                            </div>
                        </div>
                    </Panel>
                </div>
            </div>
        </div>
    )
}
