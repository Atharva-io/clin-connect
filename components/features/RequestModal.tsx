"use client"
import { useState } from "react"
import { useDemo } from "@/components/providers/DemoContext"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Sparkles } from "lucide-react"

export function RequestModal({ expertId, expertName }: { expertId: string, expertName: string }) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [aiLoading, setAiLoading] = useState(false)
    const [message, setMessage] = useState("")

    const { sendRequest } = useDemo();

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        sendRequest({
            startupId: 'user-startup',
            startupName: 'ForschMedx',
            mentorId: expertId,
            mentorName: expertName,
            title: (event.target as any).title.value,
            message: message,
            location: 'Mumbai' // Mock
        });

        toast.success("Request sent successfully! Check your dashboard.")
        setOpen(false)
        setLoading(false)
    }

    async function generateWithAI() {
        setAiLoading(true);
        // Simulate AI generation delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        setMessage(`Dear ${expertName},\n\nI am the founder of HealthTech Inc. We are developing a new cardiac monitoring device and would value your inputs on its clinical workflow integration.\n\nBest,\nJohn Doe`);
        toast.success("Message drafted by AI! (Demo Mode)");
        setAiLoading(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-full h-12 text-lg" size="lg">Request Introduction</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Contact {expertName}</DialogTitle>
                    <DialogDescription>
                        Send a brief message to introduce your startup and what you need help with.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Subject
                        </Label>
                        <Input id="title" name="title" placeholder="e.g. Pilot Proposal" className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="message" className="text-right mt-2">
                            Message
                        </Label>
                        <div className="col-span-3 space-y-2">
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Hi, I'm working on..."
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="min-h-[150px]"
                            />
                            <Button
                                type="button"
                                variant="secondary"
                                size="sm"
                                onClick={generateWithAI}
                                disabled={aiLoading}
                                className="w-full"
                            >
                                <Sparkles className="h-4 w-4 mr-2 text-indigo-500" />
                                {aiLoading ? "Generating..." : "Help me write with AI"}
                            </Button>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Request"}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
