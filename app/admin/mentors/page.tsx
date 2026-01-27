"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"

export default function AdminMentorsPage() {
    const [selectedMentor, setSelectedMentor] = useState<any>(null)

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Mentor Network</h2>
                <Button className="bg-indigo-600 hover:bg-indigo-700">Invite Mentor</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "Dr. Ananya Sharma", spec: "Cardiology", hospital: "Apollo Hospital", exp: "15 XP", rating: 4.9, status: "Verified", email: "ananya.s@apollo.com", phone: "+91 98765 43210" },
                    { name: "Dr. Rajesh Patel", spec: "Oncology", hospital: "Tata Memorial", exp: "20 XP", rating: 4.8, status: "Verified", email: "r.patel@tmc.gov.in", phone: "+91 98123 45678" },
                    { name: "Meera Iyer, RN", spec: "Critical Care", hospital: "Fortis", exp: "10 XP", rating: 4.7, status: "Verified", email: "meera.iy@fortis.in", phone: "+91 99887 76655" },
                    { name: "Dr. Vikram Singh", spec: "Regulatory", hospital: "AIIMS", exp: "12 XP", rating: 5.0, status: "Pending", email: "v.singh@aiims.edu", phone: "+91 91234 56789" },
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
                            <Button variant="ghost" size="sm" className="text-indigo-400 hover:text-indigo-300" onClick={() => setSelectedMentor(mentor)}>View Profile</Button>
                        </div>
                    </Panel>
                ))}
            </div>

            <Dialog open={!!selectedMentor} onOpenChange={() => setSelectedMentor(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Mentor Profile (Admin View)</DialogTitle>
                        <DialogDescription>
                            Sensitive contact details and verification status.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedMentor && (
                        <div className="space-y-6 mt-4">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-indigo-900/50 flex items-center justify-center text-xl font-bold text-indigo-300">
                                    {selectedMentor.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{selectedMentor.name}</h3>
                                    <p className="text-sm text-slate-400">{selectedMentor.spec} | {selectedMentor.hospital}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-3">
                                    <h4 className="text-sm font-semibold text-slate-300">Contact Information</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Email</span>
                                            <span>{selectedMentor.email}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Phone</span>
                                            <span>{selectedMentor.phone}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-500">Verification Status</span>
                                        <Badge variant={selectedMentor.status === 'Verified' ? 'default' : 'secondary'}>{selectedMentor.status}</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-500">Experience</span>
                                        <span>{selectedMentor.exp}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-2">
                                <Button onClick={() => setSelectedMentor(null)}>Close</Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
