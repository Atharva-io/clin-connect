import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, CheckCircle } from "lucide-react"
import Link from "next/link"

interface Expert {
    id: string;
    name: string;
    title: string;
    specialty: string;
    price: string;
    location: string;
    rating: number;
    verified: boolean;
    imageUrl?: string;
}

export function ExpertCard({ expert }: { expert: Expert }) {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row gap-4 items-start pb-2">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center overflow-hidden shrink-0">
                    <span className="text-lg font-bold text-muted-foreground">{expert.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold text-lg flex items-center gap-2 truncate">
                                {expert.name}
                                {expert.verified && <CheckCircle className="h-4 w-4 text-blue-500 shrink-0" />}
                            </h3>
                            <p className="text-sm text-muted-foreground truncate">{expert.title}</p>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium shrink-0">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            {expert.rating}
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{expert.specialty}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" /> {expert.location}
                    </div>
                </div>
                <div className="text-sm font-medium">
                    {expert.price} <span className="text-muted-foreground font-normal">/ hr</span>
                </div>
            </CardContent>
            <CardFooter>
                <Link href={`/profiles/${expert.id}`} className="w-full">
                    <Button className="w-full" variant="outline">View Profile</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
