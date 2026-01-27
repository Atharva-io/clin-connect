import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, MessageSquare, ShieldCheck, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden pb-20 bg-background text-foreground border-b border-border">
        <div className="absolute inset-0 z-0 select-none">

          {/* Vibrant Overlay */}
          {/* Vibrant Overlay - Visible in Dark Mode */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#0f172a]/80 to-transparent dark:block hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-teal-900/30 mix-blend-overlay dark:block hidden"></div>
        </div>

        <section className="relative z-10 flex flex-col items-center gap-8 pt-32 pb-20 text-center container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 max-w-5xl animate-in fade-in slide-in-from-bottom-5 duration-1000">

            {/* Pill */}
            <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-700 dark:text-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.2)] backdrop-blur-md mb-4 hover:bg-teal-500/20 transition-colors cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400 mr-2 animate-pulse"></span>
              New: AI Copilot for Introductions
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] font-extrabold tracking-tight drop-shadow-2xl">
              Connect with <span className="text-foreground">Healthcare Experts</span> <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 drop-shadow-sm">
                Without the Friction.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground max-w-[800px] leading-relaxed font-light drop-shadow-md">
              ClinConnect bridges the gap between health-tech startups and clinical domain experts.
              Find the right partners for validation, pilots, and advisory.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-6">
              <Link href="/explore">
                <Button size="lg" className="h-14 rounded-full px-10 text-lg font-semibold bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white shadow-[0_10px_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all duration-300 border border-white/10">
                  Find Experts <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-lg font-semibold bg-white/50 dark:bg-white/5 backdrop-blur-sm border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300">
                  For Clinics & Experts
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features / Value Prop */}
        <section className="relative z-10 pb-12" id="features">
          <div className="absolute top-0 left-0 w-full -translate-y-1/2 pointer-events-none text-slate-900/50" aria-hidden="true">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[80px] fill-current">
              <path d="M0 0h1440v120H0z" fill="transparent" /> {/* Simplified cleaning */}
            </svg>
          </div>

          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Card 1 */}
            <article className="group relative bg-card dark:bg-slate-900/60 backdrop-blur-xl border border-border rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(59,130,246,0.3)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center w-16 h-16 mb-6 p-4 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-all duration-300 shadow-inner ring-1 ring-border">
                <Search className="w-full h-full" />
              </span>
              <h3 className="relative text-2xl font-bold font-heading mb-3 text-card-foreground transition-colors">Smart Discovery</h3>
              <p className="relative text-muted-foreground leading-relaxed transition-colors">Search verified experts by specialty, availability, and interests. Filter by price and location.</p>
            </article>

            {/* Card 2 */}
            <article className="group relative bg-card dark:bg-slate-900/60 backdrop-blur-xl border border-border rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(20,184,166,0.3)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center w-16 h-16 mb-6 p-4 rounded-2xl bg-teal-500/10 text-teal-500 group-hover:scale-110 transition-all duration-300 shadow-inner ring-1 ring-border">
                <ShieldCheck className="w-full h-full" />
              </span>
              <h3 className="relative text-2xl font-bold font-heading mb-3 text-card-foreground transition-colors">Verified Profiles</h3>
              <p className="relative text-muted-foreground leading-relaxed transition-colors">Every clinic and expert is manually verified to ensure high-quality, trustworthy connections.</p>
            </article>

            {/* Card 3 */}
            <article className="group relative bg-card dark:bg-slate-900/60 backdrop-blur-xl border border-border rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(168,85,247,0.3)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center w-16 h-16 mb-6 p-4 rounded-2xl bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-all duration-300 shadow-inner ring-1 ring-border">
                <MessageSquare className="w-full h-full" />
              </span>
              <h3 className="relative text-2xl font-bold font-heading mb-3 text-card-foreground transition-colors">Seamless Outreach</h3>
              <p className="relative text-muted-foreground leading-relaxed transition-colors">Direct messaging and AI-assisted introductions help you cut through the noise and get responses.</p>
            </article>
          </div>
        </section>
      </header>


      {/* Expert Say Testimonials */}
      <section className="py-24 bg-background relative overflow-hidden" id="testimonials">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground">Expert Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">See what industry leaders are saying about ClinConnect.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative">
              <p className="text-muted-foreground italic mb-6 leading-relaxed">"ClinConnect has drastically reduced the time it takes for us to find pilot partners. The verification process gives us peace of mind."</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold flex items-center justify-center">AS</div>
                <div>
                  <div className="font-bold text-sm text-foreground">Dr. Ananya Sharma</div>
                  <div className="text-xs text-primary">Chief of Cardiology, Apollo</div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative">
              <p className="text-muted-foreground italic mb-6 leading-relaxed">"As a startup founder in Bangalore, getting access to KOLS was a nightmare. Here, I booked 3 meetings in my first week."</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold flex items-center justify-center">AK</div>
                <div>
                  <div className="font-bold text-sm text-foreground">Arjun Kumar</div>
                  <div className="text-xs text-primary">CEO, NeuroTech India</div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative">
              <p className="text-muted-foreground italic mb-6 leading-relaxed">"The AI copilot helped me draft outreach messages that actually got responses. It's a game changer."</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold flex items-center justify-center">PD</div>
                <div>
                  <div className="font-bold text-sm text-foreground">Priya Desai</div>
                  <div className="text-xs text-primary">Founder, BioGen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#050b1b] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1124]/50 pointer-events-none"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Get in Touch</h2>
                <p className="text-slate-300">Have questions about enterprise plans or partnership opportunities? Reach out to our team in Mumbai.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#4aa3ff]/10 flex items-center justify-center text-[#4aa3ff] shrink-0 mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Headquarters</div>
                    <div className="text-slate-400">VJTI college TBI<br />VJTI, Matunga, Mumbai, MH 400019</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#35d3b4]/10 flex items-center justify-center text-[#35d3b4] shrink-0 mt-1">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Phone</div>
                    <div className="text-slate-400">+91 12345 67890</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Map Preview */}
            <div className="h-[350px] w-full bg-slate-800 rounded-2xl overflow-hidden relative shadow-2xl border border-slate-700/50 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.459312217623!2d72.86720027581788!3d19.068595552994943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8eace248d2d%3A0xe54db222837f828a!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709283748291!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Footer */}
      <footer className="border-t border-border/10 py-12 bg-[#020610] text-slate-400">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">
            © 2026 ClinConnect. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
