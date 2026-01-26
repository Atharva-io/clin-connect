import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Clock, CheckCircle, XCircle } from "lucide-react";
import { useDemo } from "@/components/providers/DemoContext";
import { toast } from "sonner";
import { useState } from "react";
import { MockChatModal } from "./MockChatModal";

export function MentorDashboard({ profile }: { profile: any }) {
    const { requests, updateRequestStatus } = useDemo();
    const [isAvailable, setIsAvailable] = useState(true);

    // Filter requests for this mentor (mock logic: all requests currently go to 'user-mentor')
    const myRequests = requests.filter(r => r.mentorId === 'user-mentor' && r.status === 'PENDING');

    // Impact Stats (Mock but dynamic based on requests)
    const acceptedCount = requests.filter(r => r.mentorId === 'user-mentor' && r.status === 'ACCEPTED').length + 12;

    const handleAccept = (id: string, name: string) => {
        updateRequestStatus(id, 'ACCEPTED');
        toast.success(`Accepted request from ${name}`);
    }

    const handleDecline = (id: string) => {
        updateRequestStatus(id, 'DECLINED');
        toast.info("Request declined");
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN (Wide) - Pipeline First Layout */}
            <div className="lg:col-span-2 space-y-8">

                {/* 2. Incoming Queue */}
                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle>Incoming Requests</CardTitle>
                                <CardDescription>Startups waiting for your expertise</CardDescription>
                            </div>
                            <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">{myRequests.length} New</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y">
                            {myRequests.length === 0 && (
                                <div className="p-8 text-center text-muted-foreground">
                                    No new requests at the moment.
                                </div>
                            )}
                            {myRequests.map((req) => (
                                <div key={req.id} className="p-6 hover:bg-muted/30 transition-colors">
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                        <div>
                                            <h3 className="font-semibold text-lg">{req.startupName} {req.location && `(${req.location})`}</h3>
                                            <div className="flex gap-2 text-xs mt-1">
                                                <Badge variant="outline">MedTech</Badge>
                                                <Badge variant="outline">Prototype Stage</Badge>
                                            </div>
                                        </div>
                                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                                            {new Date(req.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        "{req.message}"
                                    </p>
                                    <div className="bg-muted p-3 rounded text-xs font-medium mb-4 flex gap-2">
                                        <span className="text-indigo-600">Request:</span>
                                        <span>{req.title}</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700" onClick={() => handleAccept(req.id, req.startupName)}>
                                            Accept Request
                                        </Button>
                                        <Button size="sm" variant="outline" className="w-full" onClick={() => toast.info("Messaging feature coming soon!")}>
                                            Message
                                        </Button>
                                        <Button size="sm" variant="ghost" className="w-full text-muted-foreground" onClick={() => handleDecline(req.id)}>
                                            Decline
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* 2.5 Active Connections (Accepted) */}
                <Card>
                    <CardHeader>
                        <CardTitle>Active Connections</CardTitle>
                        <CardDescription>Startups you are currently mentoring</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y">
                            {requests.filter(r => r.mentorId === 'user-mentor' && r.status === 'ACCEPTED').length === 0 && (
                                <div className="p-8 text-center text-muted-foreground">
                                    No active connections yet. Accept a request to see it here.
                                </div>
                            )}
                            {requests.filter(r => r.mentorId === 'user-mentor' && r.status === 'ACCEPTED').map((req) => (
                                <div key={req.id} className="p-6">
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                        <div>
                                            <h3 className="font-semibold text-lg">{req.startupName}</h3>
                                            <p className="text-sm text-muted-foreground">Subject: {req.title}</p>
                                        </div>
                                        <Badge className="bg-green-600">Active</Badge>
                                    </div>
                                    <div className="flex gap-3">
                                        <MockChatModal
                                            name={req.startupName}
                                            trigger={<Button size="sm" variant="outline" className="w-full">Message</Button>}
                                        />
                                        <Button size="sm" variant="ghost" className="w-full text-muted-foreground" onClick={() => handleDecline(req.id)}>
                                            End Mentorship
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* RIGHT COLUMN (Sidebar) */}
            <div className="space-y-6">
                {/* 3. Your Impact */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Your Impact</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-muted/30 rounded-lg">
                                <div className="text-2xl font-bold text-indigo-600">{acceptedCount}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Startups</div>
                            </div>
                            <div className="text-center p-4 bg-muted/30 rounded-lg">
                                <div className="text-2xl font-bold text-indigo-600">4.9</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Rating</div>
                            </div>
                        </div>
                        <div className="pt-2 border-t">
                            <div className="flex justify-between text-sm py-2">
                                <span className="text-muted-foreground">Hours Mentored</span>
                                <span className="font-medium">24h</span>
                            </div>
                            <div className="flex justify-between text-sm py-2">
                                <span className="text-muted-foreground">Earnings</span>
                                <span className="font-medium">₹{acceptedCount * 4000}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 4. Upcoming Sessions */}
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">Upcoming Sessions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="border-l-4 border-green-500 pl-4 py-1">
                            <div className="font-semibold text-sm">Review Deck w/ CardiaCare</div>
                            <div className="text-xs text-muted-foreground mt-1">Tomorrow, 2:00 PM IST</div>
                            <div className="flex gap-2 mt-2">
                                <Button size="icon" variant="secondary" className="h-6 w-6"><Calendar className="h-3 w-3" /></Button>
                                <Button size="icon" variant="secondary" className="h-6 w-6"><MessageSquare className="h-3 w-3" /></Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Availability Toggle */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">Accepting New Requests</span>
                            <div
                                className={`h-6 w-11 rounded-full relative cursor-pointer transition-colors ${isAvailable ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                                onClick={() => setIsAvailable(!isAvailable)}
                            >
                                <div className={`absolute top-1 h-4 w-4 bg-white rounded-full shadow-sm transition-all ${isAvailable ? 'right-1' : 'left-1'}`} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div >
    )
}
