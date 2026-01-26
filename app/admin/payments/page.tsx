"use client"

import { Panel } from "@/components/ui/Panel"

export default function AdminPaymentsPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Financial Overview</h2>
            <Panel className="min-h-[300px] flex items-center justify-center text-slate-500 border-dashed">
                <div className="text-center">
                    <p className="mb-2">Payment gateway integration pending.</p>
                    <p className="text-sm">Transaction history and revenue metrics will appear here.</p>
                </div>
            </Panel>
        </div>
    )
}
