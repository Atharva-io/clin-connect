import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ClinConnect - Healthcare Innovation Network",
  description: "Connect startups with healthcare experts and clinics.",
};

import { MockAuthProvider } from "@/components/providers/MockAuthProvider";

//...
import { AISidebar } from "@/components/features/AISidebar";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { DemoProvider } from "@/components/providers/DemoContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DemoProvider>
      <MockAuthProvider>
        <html lang="en" suppressHydrationWarning>
          <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <main>{children}</main>
              <AISidebar />
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </MockAuthProvider>
    </DemoProvider>
  );
}
