"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { User, Mail, Phone, MapPin, Eye, ExternalLink } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { toast } from "sonner"

export default function SupportUserLookupPage() {
    const [viewProfile, setViewProfile] = useState(false)

    const handleSuspend = () => {
        toast.error("User Account Suspended Successfully")
    }

    return (
        <div className="space-y-6">
            <div className="flex gap-4">
                <Input
                    placeholder="Search by Email, ID, or Phone..."
                    className="max-w-md bg-white/5 border-white/10"
                />
                <Button className="bg-orange-600 hover:bg-orange-700">Lookup User</Button>
            </div>

            {/* Mock Result */}
            <Panel className="p-0 overflow-hidden">
                <div className="bg-white/5 p-6 border-b border-white/5 flex justify-between items-start">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-slate-700 flex items-center justify-center text-3xl font-bold">
                            DK
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Deepak Kumar</h2>
                            <div className="text-slate-400 text-sm">Startup Founder • Joined Jan 2024</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Active Account</Badge>
                        <div className="text-xs text-slate-500">ID: USR-882910</div>
                    </div>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-slate-300 border-b border-white/10 pb-2">Contact Info</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-slate-500" />
                                <span>deepak.k@biotech.inc</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-slate-500" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-slate-500" />
                                <span>Mumbai, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-slate-300 border-b border-white/10 pb-2">Recent Activity</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-400">Login</span>
                                <span>Today, 10:30 AM</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Payment</span>
                                <span>Yesterday (Success)</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Ticket #102</span>
                                <span className="text-orange-400">Open</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white/[0.02] border-t border-white/5 flex gap-3">
                    <Button variant="outline" className="border-slate-700 text-slate-300" onClick={() => setViewProfile(true)}>
                        <Eye className="h-4 w-4 mr-2" /> View Full Profile
                    </Button>
                    <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10" onClick={handleSuspend}>
                        Suspend Account
                    </Button>
                </div>
            </Panel>

            <Dialog open={viewProfile} onOpenChange={setViewProfile}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Full User Profile</DialogTitle>
                        <DialogDescription>Extended details for support verification.</DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                        <div className="p-3 bg-slate-900 rounded">
                            <span className="block text-xs text-slate-500 uppercase mb-1">Legal Name</span>
                            Deepak Kumar
                        </div>
                        <div className="p-3 bg-slate-900 rounded">
                            <span className="block text-xs text-slate-500 uppercase mb-1">Company Ent.</span>
                            Biotech Solutions Pvt Ltd
                        </div>
                        <div className="p-3 bg-slate-900 rounded">
                            <span className="block text-xs text-slate-500 uppercase mb-1">Subscription</span>
                            Pro Plan (Annual)
                        </div>
                        <div className="p-3 bg-slate-900 rounded">
                            <span className="block text-xs text-slate-500 uppercase mb-1">KYC Status</span>
                            <span className="text-green-500">Verified</span>
                        </div>
                        <div className="col-span-2 p-3 bg-slate-900 rounded">
                            <span className="block text-xs text-slate-500 uppercase mb-1">Notes</span>
                            User frequently requests GST invoices. Handle with priority.
                        </div>
                    </div>
                    <div className="flex justify-end pt-4">
                        <Button onClick={() => setViewProfile(false)}>Close</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
