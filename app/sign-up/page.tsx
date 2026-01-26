"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/providers/MockAuthProvider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Stethoscope, Rocket, UserPlus } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"

export default function SignUpPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signIn } = useAuth()
    const router = useRouter()

    const handleSignUp = (role: 'STARTUP' | 'MENTOR') => {
        // Mock Validation
        if (!name || !email || !password) {
            toast.error("Please fill in all fields.")
            return
        }

        toast.loading("Creating your account...")

        setTimeout(() => {
            signIn(role)
            toast.dismiss()
            toast.success(`Welcome to ClinConnect, ${name}!`)
        }, 1500)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
            <Card className="w-full max-w-md shadow-xl border-primary/10">
                <CardHeader className="text-center space-y-2">
                    <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                        <UserPlus className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
                    <CardDescription>
                        Join ClinConnect to start your journey
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="startup" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="startup">
                                <Rocket className="h-4 w-4 mr-2" /> Startup
                            </TabsTrigger>
                            <TabsTrigger value="mentor">
                                <Stethoscope className="h-4 w-4 mr-2" /> Mentor
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="startup">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name-s">Company Name</Label>
                                    <Input
                                        id="name-s"
                                        placeholder="e.g. ForschMedx"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email-s">Work Email</Label>
                                    <Input
                                        id="email-s"
                                        type="email"
                                        placeholder="founder@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password-s">Password</Label>
                                    <Input
                                        id="password-s"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <Button className="w-full" onClick={() => handleSignUp('STARTUP')}>
                                    Get Started
                                </Button>
                                <div className="text-center text-sm text-muted-foreground mt-4">
                                    Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="mentor">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name-m">Full Name</Label>
                                    <Input
                                        id="name-m"
                                        placeholder="e.g. Dr. Ananya Sharma"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email-m">Email</Label>
                                    <Input
                                        id="email-m"
                                        type="email"
                                        placeholder="doctor@hospital.org"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password-m">Password</Label>
                                    <Input
                                        id="password-m"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <Button className="w-full" onClick={() => handleSignUp('MENTOR')}>
                                    Join as Expert
                                </Button>
                                <div className="text-center text-sm text-muted-foreground mt-4">
                                    Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}
