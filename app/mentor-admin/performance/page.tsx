"use client"

import { Panel } from "@/components/ui/Panel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart, Clock, Star, TrendingUp } from "lucide-react"

export default function PerformancePage() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Network Performance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Panel className="p-6 flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-blue-500/10 text-blue-500 mb-4">
                        <Clock className="h-8 w-8" />
                    </div>
                    <div className="text-3xl font-bold mb-1">4.2h</div>
                    <div className="text-sm text-slate-400">Avg. Response Time</div>
                    <div className="text-xs text-green-500 mt-2">↓ 12% vs last month</div>
                </Panel>

                <Panel className="p-6 flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-yellow-500/10 text-yellow-500 mb-4">
                        <Star className="h-8 w-8" />
                    </div>
                    <div className="text-3xl font-bold mb-1">4.8</div>
                    <div className="text-sm text-slate-400">Avg. Session Rating</div>
                    <div className="text-xs text-green-500 mt-2">↑ 0.2 vs last month</div>
                </Panel>

                <Panel className="p-6 flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-purple-500/10 text-purple-500 mb-4">
                        <BarChart className="h-8 w-8" />
                    </div>
                    <div className="text-3xl font-bold mb-1">85%</div>
                    <div className="text-sm text-slate-400">Match Success Rate</div>
                    <div className="text-xs text-slate-500 mt-2">Stable</div>
                </Panel>
            </div>

            <Panel className="p-6">
                <h3 className="font-semibold mb-4 text-lg">Top Performing Mentors</h3>
                <div className="space-y-4">
                    {[
                        { name: "Dr. Ananya Sharma", spec: "Cardiology", sessions: 42, rating: 5.0 },
                        { name: "Dr. Rajesh Patel", spec: "Oncology", sessions: 38, rating: 4.9 },
                        { name: "Meera Iyer, RN", spec: "Critical Care", sessions: 35, rating: 4.8 },
                    ].map((mentor, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400">
                                    {mentor.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-medium">{mentor.name}</div>
                                    <div className="text-xs text-slate-400">{mentor.spec}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold">{mentor.sessions} Sessions</div>
                                <div className="text-xs text-yellow-500 flex items-center gap-1 justify-end">
                                    <Star className="h-3 w-3 fill-current" /> {mentor.rating}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Panel>
        </div>
    )
}
