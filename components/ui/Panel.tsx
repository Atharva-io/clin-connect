import React from "react"
import { cn } from "@/lib/utils"

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Panel({ className, ...props }: PanelProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-border bg-card text-card-foreground shadow-sm",
                className
            )}
            {...props}
        />
    )
}
