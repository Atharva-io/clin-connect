"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/providers/MockAuthProvider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Stethoscope, Rocket, Lock } from "lucide-react"
import { toast } from "sonner"

export default function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { signIn } = useAuth()
    const router = useRouter()

    const handleLogin = (role: 'STARTUP' | 'MENTOR') => {
        // Demo validation
        if (role === 'STARTUP') {
            if ((username === 'FM' && password === 'FM') || (username === 'userS' && password === 'passS')) {
                signIn('STARTUP')
                toast.success("Welcome back, Founder!")
            } else {
                toast.error("Invalid credentials. Try FM / FM")
            }
        } else {
            if ((username === 'AS' && password === 'AS') || (username === 'userM' && password === 'passM')) {
                signIn('MENTOR')
                toast.success("Welcome back, Doctor!")
            } else {
                toast.error("Invalid credentials. Try AS / AS")
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
            <Card className="w-full max-w-md shadow-xl border-primary/10">
                <CardHeader className="text-center space-y-2">
                    <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                        <Lock className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                    <CardDescription>
                        Sign in to access your dashboard
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
                                    <Label htmlFor="username-s">Username</Label>
                                    <Input
                                        id="username-s"
                                        placeholder="FM"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password-s">Password</Label>
                                    <Input
                                        id="password-s"
                                        type="password"
                                        placeholder="FM"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <Button className="w-full" onClick={() => handleLogin('STARTUP')}>
                                    Log in as Founder
                                </Button>
                                <div className="text-center text-xs text-muted-foreground mt-4 bg-muted p-2 rounded">
                                    Demo Creds: <strong>FM</strong> / <strong>FM</strong>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="mentor">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="username-m">Username</Label>
                                    <Input
                                        id="username-m"
                                        placeholder="AS"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password-m">Password</Label>
                                    <Input
                                        id="password-m"
                                        type="password"
                                        placeholder="AS"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <Button className="w-full" onClick={() => handleLogin('MENTOR')}>
                                    Log in as Expert
                                </Button>
                                <div className="text-center text-xs text-muted-foreground mt-4 bg-muted p-2 rounded">
                                    Demo Creds: <strong>AS</strong> / <strong>AS</strong>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}
