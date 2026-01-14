"use client"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from "sonner"
import { CreditCard, Lock } from "lucide-react"

interface PaymentModalProps {
    amount: string;
    planName: string;
    trigger?: React.ReactNode;
    onSuccess?: () => void;
}

export function PaymentModal({ amount, planName, trigger, onSuccess }: PaymentModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handlePay = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        setIsOpen(false);
        toast.success(`Successfully subscribed to ${planName}!`);
        if (onSuccess) onSuccess();
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger || <Button>Upgrade</Button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Subscribe to {planName}</DialogTitle>
                    <DialogDescription>
                        Complete your secure payment of <span className="font-bold text-foreground">{amount}</span>.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {/* Mock Card Form */}
                    <div className="space-y-2">
                        <Label htmlFor="card">Card Information</Label>
                        <div className="relative">
                            <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input id="card" placeholder="4242 4242 4242 4242" className="pl-9 font-mono" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry</Label>
                            <Input id="expiry" placeholder="MM/YY" className="font-mono" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" className="font-mono" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted p-2 rounded">
                        <Lock className="h-3 w-3" /> Encrypted by Stripe (Test Mode)
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handlePay} disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700">
                        {loading ? "Processing..." : `Pay ${amount}`}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
