"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"

export default function AdminMentorsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Mentor Network</h2>
                <Button className="bg-indigo-600 hover:bg-indigo-700">Invite Mentor</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "Dr. Ananya Sharma", spec: "Cardiology", hospital: "Apollo Hospital", exp: "15 XP", rating: 4.9, status: "Verified" },
                    { name: "Dr. Rajesh Patel", spec: "Oncology", hospital: "Tata Memorial", exp: "20 XP", rating: 4.8, status: "Verified" },
                    { name: "Meera Iyer, RN", spec: "Critical Care", hospital: "Fortis", exp: "10 XP", rating: 4.7, status: "Verified" },
                    { name: "Dr. Vikram Singh", spec: "Regulatory", hospital: "AIIMS", exp: "12 XP", rating: 5.0, status: "Pending" },
                ].map((mentor, i) => (
                    <Panel key={i} className="p-5 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-lg text-slate-400">
                                {mentor.name.substring(0, 2).toUpperCase()}
                            </div>
                            <Badge variant="secondary" className={`
                                ${mentor.status === 'Verified' ? 'bg-blue-500/10 text-blue-500' : 'bg-yellow-500/10 text-yellow-500'}
                             `}>
                                {mentor.status}
                            </Badge>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">{mentor.name}</h3>
                            <p className="text-slate-400 text-sm">{mentor.spec} • {mentor.exp}</p>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <MapPin className="h-3 w-3" /> {mentor.hospital}
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                                <Star className="h-3 w-3 fill-current" /> {mentor.rating}
                            </div>
                            <Button variant="ghost" size="sm" className="text-indigo-400 hover:text-indigo-300">View Profile</Button>
                        </div>
                    </Panel>
                ))}
            </div>
        </div>
    )
}
