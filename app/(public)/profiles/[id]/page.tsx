import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, MapPin, Clock, Calendar, MessageSquare, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { RequestModal } from "@/components/features/RequestModal";

import { MOCK_EXPERTS } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const expertData = MOCK_EXPERTS.find(e => e.id === id);

    if (!expertData) {
        notFound();
    }

    const expert = {
        ...expertData,
        role: expertData.title, // Aligning types
        organization: "Hospital / Clinic", // Mock default if missing
        subSpecialties: expertData.expertise || [], // Aligning types
        bio: expertData.about || "Experienced clinical expert.",
        stats: {
            responseRate: "98%",
            responseTime: "< 24h",
            rating: expertData.rating,
            reviews: Math.floor(Math.random() * 50) + 10
        }
    }

    return (
        <div className="container mx-auto py-8 px-4 max-w-5xl">
            <Link href="/explore" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Directory
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="h-24 w-24 rounded-full bg-slate-200 flex items-center justify-center text-2xl font-bold text-slate-500 shrink-0">
                            {expert.name[0]}
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold flex items-center gap-2">
                                {expert.name}
                                {expert.verified && <CheckCircle className="h-6 w-6 text-blue-500" />}
                            </h1>
                            <p className="text-xl text-muted-foreground">{expert.role} at {expert.organization}</p>
                            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {expert.location}</span>
                                <span className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> {expert.stats.rating} ({expert.stats.reviews} reviews)</span>
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="px-3 py-1 text-sm">{expert.specialty}</Badge>
                        {expert.subSpecialties.map(sub => (
                            <Badge key={sub} variant="outline" className="px-3 py-1 text-sm">{sub}</Badge>
                        ))}
                    </div>

                    {/* About */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">About</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {expert.bio}
                        </p>
                    </section>

                    {/* What I offer */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Offerings</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Card>
                                <CardHeader className="pb-3"><CardTitle className="text-base">Advisory Call</CardTitle></CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Strategic guidance on product-market fit, clinical workflow integration, and regulatory pathways.
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-3"><CardTitle className="text-base">Pilot Program</CardTitle></CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Oversight for validation studies or beta testing within a clinical setting.
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </div>

                {/* Sidebar / CTA */}
                <div className="md:col-span-1">
                    <Card className="sticky top-24 shadow-lg border-primary/10">
                        <CardHeader className="border-b bg-muted/20">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-lg text-primary">{expert.price}</span>
                                <Badge variant="default" className="bg-green-600 hover:bg-green-700">Available</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-6">
                            <div className="space-y-4">
                                <RequestModal expertId={expert.id} expertName={expert.name} />
                                <Button variant="outline" className="w-full">
                                    <MessageSquare className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                            </div>

                            <div className="space-y-3 text-sm pt-4 border-t">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Response Time</span>
                                    <span className="font-medium">{expert.stats.responseTime}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Response Rate</span>
                                    <span className="font-medium">{expert.stats.responseRate}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
