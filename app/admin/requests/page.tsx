"use client"

import { Panel } from "@/components/ui/Panel"
import { Badge } from "@/components/ui/badge"

export default function AdminRequestsPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Global Connection Requests</h2>

            <Panel className="min-h-[300px] flex items-center justify-center text-slate-500 border-dashed">
                <div className="text-center">
                    <p className="mb-2">Request monitoring view under construction.</p>
                    <p className="text-sm">Will display all Startup &rarr; Mentor connection attempts.</p>
                </div>
            </Panel>
        </div>
    )
}
