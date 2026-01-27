"use client"

import { Panel } from "@/components/ui/Panel"
import { Switch } from "@/components/ui/switch" // We don't have this yet, need to create or mock
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/providers/MockAuthProvider"
import { Settings, Save } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

import { useState } from "react" // Add useState import

export default function SystemSettingsPage() {
    const { role } = useAuth()
    const router = useRouter()
    const [maintenanceMode, setMaintenanceMode] = useState(false)

    useEffect(() => {
        if (role !== 'SUPER_ADMIN') {
            toast.error("Super Admin access required")
            router.push('/admin')
        }
    }, [role, router])

    const toggleMaintenance = () => {
        const newState = !maintenanceMode
        setMaintenanceMode(newState)
        if (newState) {
            toast.warning("Maintenance Mode ACTIVATED - System Locked")
        } else {
            toast.success("Maintenance Mode Deactivated")
        }
    }

    const handlePurge = () => {
        toast.info("Cache Purge Initiated...")
        setTimeout(() => toast.success("All System Caches Cleared!"), 2000)
    }

    if (role !== 'SUPER_ADMIN') return null

    return (
        <div className="space-y-8 max-w-4xl relative">
            {maintenanceMode && (
                <div className="fixed inset-0 bg-red-900/40 z-[9999] pointer-events-none backdrop-blur-[2px] flex items-center justify-center mix-blend-multiply">
                    <div className="bg-red-600 text-white font-bold px-10 py-4 rounded-xl shadow-2xl skew-y-3 scale-150 animate-pulse border-4 border-red-900">
                        MAINTENANCE MODE ACTIVE
                    </div>
                </div>
            )}

            <h2 className="text-xl font-semibold flex items-center gap-2">
                <Settings className="h-5 w-5" />
                System Configuration
            </h2>

            <div className="grid gap-6">
                <Panel className="p-6">
                    <h3 className="font-semibold mb-4 text-lg">Feature Flags</h3>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">AI Matching Algorithm v2</Label>
                                <p className="text-sm text-slate-400">Enable the new vector-based matching engine for cleaner results.</p>
                            </div>
                            <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded text-xs font-bold uppercase">Enabled</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Mentor Onboarding Flow 2.0</Label>
                                <p className="text-sm text-slate-400">New multi-step wizard with automatic license verification.</p>
                            </div>
                            <div className="bg-red-500/20 text-red-500 px-3 py-1 rounded text-xs font-bold uppercase">Disabled</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Global Payments</Label>
                                <p className="text-sm text-slate-400">Allow transactions in USD and EUR.</p>
                            </div>
                            <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded text-xs font-bold uppercase">Enabled</div>
                        </div>
                    </div>
                </Panel>

                <Panel className="p-6">
                    <h3 className="font-semibold mb-4 text-lg">System Maintenance</h3>
                    <div className="space-y-4">
                        <div className={`p-4 border rounded-lg flex justify-between items-center transition-colors duration-300 ${maintenanceMode ? 'bg-red-500/20 border-red-500' : 'bg-red-500/5 border-red-500/20'}`}>
                            <div>
                                <h4 className="font-medium text-red-400">Emergency Maintenance Mode</h4>
                                <p className="text-xs text-red-300/70">Disconnects all non-admin users immediately.</p>
                            </div>
                            <Button variant="destructive" size="sm" onClick={toggleMaintenance}>
                                {maintenanceMode ? "Disable Maintenance" : "Enable Maintenance"}
                            </Button>
                        </div>
                        <div className="p-4 border border-white/10 bg-white/5 rounded-lg flex justify-between items-center">
                            <div>
                                <h4 className="font-medium">Cache Purge</h4>
                                <p className="text-xs text-slate-400">Clear all server-side Redis caches.</p>
                            </div>
                            <Button variant="secondary" size="sm" onClick={handlePurge}>Purge Cache</Button>
                        </div>
                    </div>
                </Panel>
            </div>
        </div>
    )
}
