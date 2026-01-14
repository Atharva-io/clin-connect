"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"

// Mock data
const INITIAL_UNVERIFIED_EXPERTS = [
    {
        id: "mock_exp_1",
        name: "Dr. New Expert",
        specialty: "Neurology",
        location: "Boston, MA",
        bio: "Specializing in early onset Alzheimer's research.",
        isVerified: false
    }
]

export default function AdminPage() {
    const [experts, setExperts] = useState(INITIAL_UNVERIFIED_EXPERTS)

    const verifyExpert = (id: string) => {
        setExperts(prev => prev.filter(e => e.id !== id));
        toast.success("Expert verified successfully!");
    }

    return (
        <div className="container py-10 px-4">
            <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Pending Verifications ({experts.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    {experts.length === 0 ? (
                        <p className="text-muted-foreground">No pending verifications.</p>
                    ) : (
                        <div className="space-y-4">
                            {experts.map(expert => (
                                <div key={expert.id} className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <div className="font-bold">{expert.name}</div>
                                        <div className="text-sm text-muted-foreground">{expert.specialty} • {expert.location}</div>
                                        <div className="text-xs text-muted-foreground mt-1">{expert.bio}</div>
                                    </div>
                                    <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50" onClick={() => verifyExpert(expert.id)}>
                                        <CheckCircle className="h-4 w-4 mr-2" /> Verify
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
