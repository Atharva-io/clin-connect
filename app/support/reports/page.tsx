"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { BarChart, PieChart, Download, Calendar } from "lucide-react"

export default function SupportReportsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Support Analytics</h2>
                <div className="flex gap-2">
                    <Button variant="outline"><Calendar className="h-4 w-4 mr-2" /> Last 30 Days</Button>
                    <Button variant="outline"><Download className="h-4 w-4 mr-2" /> Export CSV</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Panel className="p-6">
                    <div className="text-sm text-slate-400 mb-2">Total Tickets</div>
                    <div className="text-3xl font-bold">1,284</div>
                    <div className="text-xs text-green-500 mt-1">↑ 12% vs last period</div>
                </Panel>
                <Panel className="p-6">
                    <div className="text-sm text-slate-400 mb-2">Avg. Resolution Time</div>
                    <div className="text-3xl font-bold">4.2h</div>
                    <div className="text-xs text-green-500 mt-1">↓ 15% (Improved)</div>
                </Panel>
                <Panel className="p-6">
                    <div className="text-sm text-slate-400 mb-2">CSAT Score</div>
                    <div className="text-3xl font-bold">4.8/5</div>
                    <div className="text-xs text-slate-500 mt-1">Stable</div>
                </Panel>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Panel className="p-6 min-h-[300px] flex flex-col items-center justify-center text-slate-500">
                    <BarChart className="h-16 w-16 mb-4 opacity-20" />
                    <p>Ticket Volume by Category (Chart Placeholder)</p>
                </Panel>
                <Panel className="p-6 min-h-[300px] flex flex-col items-center justify-center text-slate-500">
                    <PieChart className="h-16 w-16 mb-4 opacity-20" />
                    <p>User Satisfaction Breakdown (Chart Placeholder)</p>
                </Panel>
            </div>
        </div>
    )
}
