"use client"

import { Panel } from "@/components/ui/Panel"
import { Badge } from "@/components/ui/badge"

export default function SessionsPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Session Oversight</h2>

            <Panel className="min-h-[300px] flex items-center justify-center text-slate-500 border-dashed">
                <div className="text-center">
                    <p className="mb-2">Calendar view coming soon.</p>
                    <p className="text-sm">Will show all system-wide scheduled sessions.</p>
                </div>
            </Panel>
        </div>
    )
}
