"use client"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { SignedIn, SignedOut, SignInButton } from "@/components/providers/MockAuthProvider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PaymentModal } from "@/components/features/PaymentModal"

export default function PricingPage() {

    return (
        <div className="container py-24 mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
                <h1 className="text-4xl font-bold tracking-tight">Simple Pricing</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Start connecting with experts today. Upgrade when you need to scale your outreach.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {/* Free Tier */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Explorer</CardTitle>
                        <CardDescription>Perfect for early-stage discovery.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="text-4xl font-bold mb-4">Free</div>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li>• Browse expert directory</li>
                            <li>• Basic search filters</li>
                            <li>• View public profiles</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <SignedOut><SignInButton><Button variant="outline" className="w-full">Get Started</Button></SignInButton></SignedOut>
                        <SignedIn><Button variant="outline" className="w-full" disabled>Current Plan</Button></SignedIn>
                    </CardFooter>
                </Card>

                {/* Pay As You Go */}
                <Card className="flex flex-col border-indigo-200 dark:border-indigo-800 bg-indigo-50/30">
                    <CardHeader>
                        <CardTitle>Pay As You Go</CardTitle>
                        <CardDescription>Flexible for occasional needs.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="text-4xl font-bold mb-4">₹1,500<span className="text-sm font-normal text-muted-foreground">/req</span></div>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li>• Pay per connection request</li>
                            <li>• No monthly commitment</li>
                            <li>• Standard Support</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <SignedOut>
                            <SignInButton>
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Buy Credits</Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <PaymentModal amount="₹1,500" planName="Pay As You Go Credit" trigger={<Button className="w-full bg-indigo-600 hover:bg-indigo-700">Buy Credits</Button>} />
                        </SignedIn>
                    </CardFooter>
                </Card>

                {/* Pro Tier */}
                <Card className="border-primary shadow-lg relative overflow-hidden flex flex-col scale-105 z-10">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 absolute top-0 right-0 rounded-bl-lg">POPULAR</div>
                    <CardHeader>
                        <CardTitle>Growth</CardTitle>
                        <CardDescription>For startups ready to connect.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="text-4xl font-bold mb-4">₹4,999<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li>• Everything in Explorer</li>
                            <li>• 5 Connection Requests/mo</li>
                            <li>• Direct Messaging</li>
                            <li>• Verified Badge</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <SignedOut>
                            <SignInButton>
                                <Button className="w-full" variant="default">Upgrade to Growth</Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <PaymentModal amount="₹4,999" planName="Growth Plan" trigger={<Button className="w-full" variant="default">Upgrade to Growth</Button>} />
                        </SignedIn>
                    </CardFooter>
                </Card>

                {/* Institution Tier */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Enterprise</CardTitle>
                        <CardDescription>For clinics and institutions.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="text-4xl font-bold mb-4">₹24,999<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li>• Unlimited Connections</li>
                            <li>• Priority Support</li>
                            <li>• API Access</li>
                            <li>• Custom Contracts</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" className="w-full" onClick={() => window.location.href = "/#contact"}>Contact Sales</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
