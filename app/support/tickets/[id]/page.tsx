"use client"

import { Panel } from "@/components/ui/Panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Send, Paperclip } from "lucide-react"

// Mock dynamic page for demonstration
export default function TicketDetailPage({ params }: { params: { id: string } }) {
    return (
        <div className="h-[calc(100vh-8rem)] flex gap-6">
            <div className="flex-1 flex flex-col">
                <Panel className="flex-1 flex flex-col p-0 overflow-hidden">
                    <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                        <div>
                            <h2 className="font-semibold text-lg flex items-center gap-3">
                                Issue with Payment
                                <Badge variant="outline" className="border-orange-500/30 text-orange-400">High</Badge>
                            </h2>
                            <div className="text-sm text-slate-400">Ticket #1203 • Created 2 hours ago by Deepak Kumar</div>
                        </div>
                        <Button variant="outline" size="sm">Close Ticket</Button>
                    </div>

                    <div className="flex-1 p-6 overflow-y-auto space-y-6">
                        {/* Messages */}
                        <div className="flex gap-4">
                            <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold shrink-0">DK</div>
                            <div className="space-y-1">
                                <div className="text-sm font-semibold">Deepak Kumar <span className="text-slate-500 font-normal ml-2">10:30 AM</span></div>
                                <div className="p-3 bg-white/5 rounded-lg rounded-tl-none text-sm text-slate-300 max-w-xl">
                                    Hi support, I tried to upgrade my plan but the transaction failed. The amount was deducted from my card. Please help.
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-row-reverse">
                            <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center text-xs font-bold shrink-0">Sup</div>
                            <div className="space-y-1 flex flex-col items-end">
                                <div className="text-sm font-semibold"><span className="text-slate-500 font-normal mr-2">10:45 AM</span> Support Agent</div>
                                <div className="p-3 bg-orange-600/20 text-orange-100 rounded-lg rounded-tr-none text-sm max-w-xl">
                                    Hello Deepak, I'm checking the transaction logs now. Can you provide the Transaction ID from your banking app?
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 border-t border-white/10 bg-white/[0.02]">
                        <div className="flex gap-3">
                            <Button variant="ghost" size="icon" className="text-slate-400"><Paperclip className="h-5 w-5" /></Button>
                            <input
                                className="flex-1 bg-transparent border-none focus:outline-none text-sm px-2"
                                placeholder="Type your reply..."
                            />
                            <Button className="bg-orange-600 hover:bg-orange-700">
                                <Send className="h-4 w-4 mr-2" />
                                Reply
                            </Button>
                        </div>
                    </div>
                </Panel>
            </div>

            <div className="w-80 space-y-6">
                <Panel className="p-4 space-y-4">
                    <h3 className="font-semibold text-sm uppercase text-slate-400">Ticket Info</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-slate-500">Status</div>
                        <div>Open</div>
                        <div className="text-slate-500">Priority</div>
                        <div className="text-orange-400">High</div>
                        <div className="text-slate-500">Assignee</div>
                        <div>Dave S.</div>
                        <div className="text-slate-500">Category</div>
                        <div>Billing</div>
                    </div>
                </Panel>
            </div>
        </div>
    )
}
