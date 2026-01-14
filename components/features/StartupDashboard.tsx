"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Search, Clock, ArrowRight, FileText, Calendar, Plus } from "lucide-react";
import { useDemo } from "@/components/providers/DemoContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { MockChatModal } from "./MockChatModal";

export function StartupDashboard({ profile }: { profile: any }) {
    const { requests, companies } = useDemo();
    const router = useRouter();

    // Filter requests for this startup
    // Mock logic: assuming logged in as 'user-startup'
    const myRequests = requests.filter(r => r.startupId === 'user-startup');
    const pendingRequests = myRequests.filter(r => r.status === 'PENDING');
    const acceptedRequests = myRequests.filter(r => r.status === 'ACCEPTED');
    const declinedRequests = myRequests.filter(r => r.status === 'DECLINED');

    const handleAction = (action: string) => {
        toast.info(`Demo: Opening ${action}...`);
        // In a real app, this would route to a form
    }

    return (
        <div className="container mx-auto py-8 px-4 space-y-8">
            {/* 1. Above the Fold */}
            <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex-1 w-full space-y-2">
                        <div className="flex justify-between text-sm font-medium mb-1">
                            <span>Profile Completion</span>
                            <span>{profile.completion || 85}%</span>
                        </div>
                        <Progress value={profile.completion || 85} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">Finish your profile to get 2x better matches.</p>
                    </div>

                    <div className="flex-shrink-0">
                        <Link href="/explore">
                            <Button size="lg" className="px-8 shadow-lg shadow-primary/20">
                                <Search className="mr-2 h-5 w-5" /> Find Mentors
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT COLUMN (Wide) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* 2. Pipeline */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Request Pipeline</CardTitle>
                            <CardDescription>Track your outreach status</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="pending">
                                <TabsList className="grid w-full grid-cols-3 mb-4">
                                    <TabsTrigger value="pending">Pending ({pendingRequests.length})</TabsTrigger>
                                    <TabsTrigger value="accepted">Accepted ({acceptedRequests.length})</TabsTrigger>
                                    <TabsTrigger value="declined">Declined ({declinedRequests.length})</TabsTrigger>
                                </TabsList>
                                <TabsContent value="pending" className="space-y-4">
                                    {pendingRequests.length === 0 && <div className="text-center py-6 text-muted-foreground text-sm">No pending requests.</div>}
                                    {pendingRequests.map(req => (
                                        <div key={req.id} className="border rounded-lg p-4 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                                                    {req.mentorName.split(' ').map((n: any) => n[0]).join('').substring(0, 2)}
                                                </div>
                                                <div>
                                                    <div className="font-semibold">{req.mentorName}</div>
                                                    <div className="text-xs text-muted-foreground">Subject: {req.title}</div>
                                                </div>
                                            </div>
                                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                                                <Clock className="h-3 w-3 mr-1" /> Awaiting
                                            </Badge>
                                        </div>
                                    ))}
                                </TabsContent>
                                <TabsContent value="accepted" className="space-y-4">
                                    {acceptedRequests.length === 0 && <div className="text-center py-6 text-muted-foreground text-sm">No active conversations yet.</div>}
                                    {acceptedRequests.map(req => (
                                        <div key={req.id} className="border rounded-lg p-4 flex items-center justify-between border-green-200 bg-green-50/50">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">
                                                    {req.mentorName.split(' ').map((n: any) => n[0]).join('').substring(0, 2)}
                                                </div>
                                                <div>
                                                    <div className="font-semibold">{req.mentorName}</div>
                                                    <div className="text-xs text-muted-foreground">Subject: {req.title}</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <MockChatModal
                                                    name={req.mentorName}
                                                    trigger={<Button size="sm" variant="outline">Chat</Button>}
                                                />
                                                <Badge className="bg-green-600">Accepted</Badge>
                                            </div>
                                        </div>
                                    ))}
                                </TabsContent>
                                <TabsContent value="declined" className="space-y-4">
                                    {declinedRequests.length === 0 && <div className="text-center py-6 text-muted-foreground text-sm">No declined requests.</div>}
                                    {declinedRequests.map(req => (
                                        <div key={req.id} className="border rounded-lg p-4 flex items-center justify-between opacity-70">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                                                    {req.mentorName.split(' ').map((n: any) => n[0]).join('').substring(0, 2)}
                                                </div>
                                                <div>
                                                    <div className="font-semibold">{req.mentorName}</div>
                                                    <div className="text-xs text-muted-foreground">Subject: {req.title}</div>
                                                </div>
                                            </div>
                                            <Badge variant="destructive">Declined</Badge>
                                        </div>
                                    ))}
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>

                    {/* 3. Recommended Mentors */}
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Recommended for {profile.domain}</h2>
                            <Link href="/explore" className="text-sm text-primary hover:underline flex items-center">View All <ArrowRight className="h-4 w-4 ml-1" /></Link>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Mock Card 1 */}
                            <Link href="/explore">
                                <Card className="hover:border-primary/50 transition-colors cursor-pointer group h-full">
                                    <CardContent className="p-4 flex gap-4">
                                        <div className="h-14 w-14 rounded-full bg-slate-200 shrink-0 flex items-center justify-center font-bold text-slate-500">RP</div>
                                        <div>
                                            <div className="font-bold group-hover:text-primary transition-colors">Dr. Rajesh Patel</div>
                                            <div className="text-xs text-muted-foreground">Oncology • 15 Yrs Exp</div>
                                            <div className="text-xs font-medium text-green-600 mt-1">Match: Regulatory</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                            {/* Mock Card 2 */}
                            <Link href="/explore">
                                <Card className="hover:border-primary/50 transition-colors cursor-pointer group h-full">
                                    <CardContent className="p-4 flex gap-4">
                                        <div className="h-14 w-14 rounded-full bg-slate-200 shrink-0 flex items-center justify-center font-bold text-slate-500">MI</div>
                                        <div>
                                            <div className="font-bold group-hover:text-primary transition-colors">Meera Iyer, RN</div>
                                            <div className="text-xs text-muted-foreground">Critical Care Manager</div>
                                            <div className="text-xs font-medium text-green-600 mt-1">Match: Operations</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </section>
                </div>

                {/* RIGHT COLUMN (Sidebar) */}
                <div className="space-y-6">
                    {/* 4. Checklist */}
                    <Card className="bg-muted/30 border-dashed">
                        <CardHeader>
                            <CardTitle className="text-base">Next Steps</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex gap-2 items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                <span className="text-sm line-through text-muted-foreground">Sign up account</span>
                            </div>
                            <div className="flex gap-2 items-start cursor-pointer hover:text-primary transition-colors" onClick={() => handleAction('Company Profile')}>
                                <div className="h-5 w-5 rounded-full border-2 border-muted-foreground shrink-0 hover:border-primary" />
                                <span className="text-sm">Complete company profile</span>
                            </div>
                            <div className="flex gap-2 items-start cursor-pointer hover:text-primary transition-colors" onClick={() => handleAction('Upload Pitch Deck')}>
                                <div className="h-5 w-5 rounded-full border-2 border-muted-foreground shrink-0 hover:border-primary" />
                                <span className="text-sm">Upload Pitch Deck</span>
                            </div>
                            <div className="flex gap-2 items-start cursor-pointer hover:text-primary transition-colors" onClick={() => router.push('/explore')}>
                                <div className="h-5 w-5 rounded-full border-2 border-muted-foreground shrink-0 hover:border-primary" />
                                <span className="text-sm">Connect with 3 mentors</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 5. Resources */}
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">Resources</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Link href="#" className="flex items-center text-sm p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
                                <FileText className="h-4 w-4 mr-2" /> Pitch Deck Template
                            </Link>
                            <Link href="#" className="flex items-center text-sm p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
                                <Calendar className="h-4 w-4 mr-2" /> Fundraising Guide
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
