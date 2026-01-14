"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, X, Send, Sparkles } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export function AISidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
        { role: 'ai', content: "Hi! I'm ClinCopilot. I can help you find an expert or answer questions about the platform." }
    ])
    const [input, setInput] = useState("")

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }])
        setInput("")

        // Mock AI Response
        setTimeout(() => {
            let aiResponse = "I can help with that. Try searching in the 'Explore' tab.";
            if (userMsg.toLowerCase().includes("pricing")) {
                aiResponse = "We have three tiers: Explorer (Free), Growth ($49/mo), and Institution ($299/mo).";
            } else if (userMsg.toLowerCase().includes("expert")) {
                aiResponse = "You can filter experts by specialty in the Explore page. Would you like me to take you there?";
            }
            setMessages(prev => [...prev, { role: 'ai', content: aiResponse }])
        }, 1000)
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed bottom-24 right-6 w-80 z-50 shadow-2xl"
                    >
                        <Card className="h-96 flex flex-col border-primary/20">
                            <CardHeader className="bg-primary/5 pb-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Bot className="h-5 w-5 text-primary" />
                                        <CardTitle className="text-sm font-bold">ClinCopilot</CardTitle>
                                    </div>
                                    <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messages.map((m, i) => (
                                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] rounded-lg p-3 text-sm ${m.role === 'user'
                                                ? 'bg-primary text-primary-foreground'
                                                : 'bg-muted text-foreground'
                                            }`}>
                                            {m.content}
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                            <CardFooter className="p-3 pt-0">
                                <form
                                    className="flex w-full gap-2"
                                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                >
                                    <Input
                                        placeholder="Ask me anything..."
                                        className="h-9 text-sm"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                    />
                                    <Button size="icon" type="submit" className="h-9 w-9">
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="fixed bottom-6 right-6 z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button
                    size="lg"
                    className={`rounded-full h-14 w-14 shadow-lg ${isOpen ? 'bg-muted text-foreground hover:bg-muted/80' : 'bg-primary text-primary-foreground'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-7 w-7" />}
                </Button>
            </motion.div>
        </>
    )
}
