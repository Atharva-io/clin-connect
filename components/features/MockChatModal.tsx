"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { Send } from "lucide-react"

export function MockChatModal({ trigger, name }: { trigger: React.ReactNode, name: string }) {
    const [messages, setMessages] = useState<{ text: string, sender: 'me' | 'them' }[]>([
        { text: `Hi! Thanks for connecting. How can I help you with ${name}?`, sender: 'them' }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { text: input, sender: 'me' }]);
        setInput("");

        // Auto reply
        setTimeout(() => {
            setMessages(prev => [...prev, { text: "This is a demo chat. In the real app, this would be a real-time message.", sender: 'them' }]);
        }, 1000);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Chat with {name}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col h-[400px]">
                    <ScrollArea className="flex-1 pr-4 p-4 border rounded-md mb-4 bg-muted/20">
                        <div className="space-y-4">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-lg p-3 text-sm ${m.sender === 'me'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-muted border'
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="flex gap-2">
                        <Input
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <Button size="icon" onClick={handleSend}><Send className="h-4 w-4" /></Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
