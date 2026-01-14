import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, MessageSquare, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center py-24 md:py-32 text-center space-y-8 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
            New: AI Copilot for Introductions
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground">
            Connect with Healthcare Experts <br className="hidden md:inline" />
            <span className="text-primary">Without the Friction.</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
            ClinConnect bridges the gap between health-tech startups and clinical domain experts.
            Find the right partners for validation, pilots, and advisory.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/explore">
              <Button size="lg" className="rounded-full px-8 w-full sm:w-auto">Find Experts <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="outline" size="lg" className="rounded-full px-8 w-full sm:w-auto">For Clinics & Experts</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-background rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Smart Discovery</h3>
              <p className="text-muted-foreground">
                Search verified experts by specialty, availability, and interests. Filter by price and location.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-background rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Verified Profiles</h3>
              <p className="text-muted-foreground">
                Every clinic and expert is manually verified to ensure high-quality, trustworthy connections.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-background rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Seamless Outreach</h3>
              <p className="text-muted-foreground">
                Direct messaging and AI-assisted introductions help you cut through the noise and get responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Say Testimonials */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold tracking-tight">Expert Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">See what industry leaders are saying about ClinConnect.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl bg-card text-left space-y-4 shadow-sm">
              <p className="text-muted-foreground italic">"ClinConnect has drastically reduced the time it takes for us to find pilot partners. The verification process gives us peace of mind."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-200 text-slate-500 font-bold flex items-center justify-center">AS</div>
                <div>
                  <div className="font-bold text-sm">Dr. Ananya Sharma</div>
                  <div className="text-xs text-primary">Chief of Cardiology, Apollo</div>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded-xl bg-card text-left space-y-4 shadow-sm">
              <p className="text-muted-foreground italic">"As a startup founder in Bangalore, getting access to KOLS was a nightmare. Here, I booked 3 meetings in my first week."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-200 text-slate-500 font-bold flex items-center justify-center">AK</div>
                <div>
                  <div className="font-bold text-sm">Arjun Kumar</div>
                  <div className="text-xs text-primary">CEO, NeuroTech India</div>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded-xl bg-card text-left space-y-4 shadow-sm">
              <p className="text-muted-foreground italic">"The AI copilot helped me draft outreach messages that actually got responses. It's a game changer."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-200 text-slate-500 font-bold flex items-center justify-center">PD</div>
                <div>
                  <div className="font-bold text-sm">Priya Desai</div>
                  <div className="text-xs text-primary">Founder, BioGen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Expert Say Testimonials */}
      {/* (Duplicate section removed) */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="text-muted-foreground">Have questions about enterprise plans or partnership opportunities? Reach out to our team in Mumbai.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a0 0 0 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <div className="font-semibold">Headquarters - VJTI college TBI</div>
                    <div className="text-sm text-muted-foreground">VJTI, Matunga, Mumbai, MH 400019</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-sm text-muted-foreground">+91 12345 67890</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Maps Preview */}
            <div className="h-[300px] w-full bg-slate-200 rounded-xl overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.459312217623!2d72.86720027581788!3d19.068595552994943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8eace248d2d%3A0xe54db222837f828a!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709283748291!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-muted/10">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2026 ClinConnect. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
