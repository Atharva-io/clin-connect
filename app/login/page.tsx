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
    const [isAdminMode, setIsAdminMode] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { signIn } = useAuth()
    const router = useRouter()
    const handleLogin = (role: 'STARTUP' | 'MENTOR' | 'ADMIN_LOGIN') => {
        // Demo validation
        if (role === 'STARTUP') {
            if ((username === 'FM' && password === 'FM') || (username === 'userS' && password === 'passS')) {
                signIn('STARTUP')
                toast.success("Welcome back, Founder!")
            } else {
                toast.error("Invalid credentials. Try FM / FM")
            }
        } else if (role === 'MENTOR') {
            if ((username === 'AS' && password === 'AS') || (username === 'userM' && password === 'passM')) {
                signIn('MENTOR')
                toast.success("Welcome back, Doctor!")
            } else {
                toast.error("Invalid credentials. Try AS / AS")
            }
        } else if (role === 'ADMIN_LOGIN') {
            if (username === 'admin' && password === 'admin') {
                signIn('ADMIN')
                toast.success("Welcome, Admin")
            } else if (username === 'Sadmin' && password === 'Sadmin') {
                signIn('SUPER_ADMIN')
                toast.success("Welcome, Super Admin")
            } else if (username === 'Madmin' && password === 'Madmin') {
                signIn('MENTOR_ADMIN')
                toast.success("Welcome, Mentor Admin")
            } else if (username === 'SS' && password === 'SS') {
                signIn('SUPPORT')
                toast.success("Welcome, Support Staff")
            } else {
                toast.error("Invalid admin credentials")
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
            <Card className="w-full max-w-md shadow-xl border-primary/10">
                <CardHeader className="text-center space-y-2">
                    <div
                        className={`mx-auto h-12 w-12 rounded-full flex items-center justify-center mb-2 cursor-pointer transition-colors ${isAdminMode ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}
                        onClick={() => setIsAdminMode(!isAdminMode)}
                    >
                        <Lock className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{isAdminMode ? 'System Access' : 'Welcome Back'}</CardTitle>
                    <CardDescription>
                        {isAdminMode ? 'Restricted Area' : 'Sign in to access your dashboard'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {isAdminMode ? (
                        <div className="space-y-4">
                            <div className="p-3 bg-destructive/10 text-destructive text-sm rounded border border-destructive/20">
                                <strong>Admin Access Only.</strong> All actions are logged.
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="username-admin">Admin ID</Label>
                                <Input
                                    id="username-admin"
                                    placeholder="admin"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password-admin">Passkey</Label>
                                <Input
                                    id="password-admin"
                                    type="password"
                                    placeholder="••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleLogin('ADMIN_LOGIN');
                                        }
                                    }}
                                />
                            </div>
                            <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => handleLogin('ADMIN_LOGIN')}>
                                Authenticate
                            </Button>
                            <div className="text-center text-xs text-muted-foreground mt-4">
                                <span className="cursor-pointer hover:underline" onClick={() => setIsAdminMode(false)}>Return to standard login</span>
                            </div>
                        </div>
                    ) : (
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
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    document.getElementById("password-s")?.focus();
                                                }
                                            }}
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
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleLogin('STARTUP');
                                                }
                                            }}
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
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    document.getElementById("password-m")?.focus();
                                                }
                                            }}
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
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleLogin('MENTOR');
                                                }
                                            }}
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
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
