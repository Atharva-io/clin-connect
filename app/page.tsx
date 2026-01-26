import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, MessageSquare, ShieldCheck, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden text-[#f8fbff] pb-12 bg-[#050b1b]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover filter saturate-[1.08] brightness-60"
            src="/assets/Video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <span className="absolute inset-0 bg-gradient-to-b from-[#030712]/15 to-[#030712]/85 mix-blend-screen pointer-events-none"></span>
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(77,161,255,0.25),transparent_58%)] mix-blend-screen pointer-events-none"></span>
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(33,212,167,0.22),transparent_64%)] mix-blend-screen pointer-events-none"></span>
        </div>

        <section className="relative z-10 flex flex-col items-center gap-8 pt-24 pb-16 text-center container mx-auto px-4">
          <div className="flex flex-col items-center gap-5 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center rounded-full border border-[#4aa3ff]/30 px-3 py-1 text-xs font-semibold backdrop-blur-md bg-[#4aa3ff]/10 text-[#4aa3ff] mb-2 shadow-[0_0_15px_rgba(74,163,255,0.3)]">
              New: AI Copilot for Introductions
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-[3.9rem] leading-[1.08] font-bold text-foreground tracking-tight">
              Connect with Healthcare Experts <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4aa3ff] to-[#35d3b4]">Without the Friction.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-[700px] leading-relaxed">
              ClinConnect bridges the gap between health-tech startups and clinical domain experts.
              Find the right partners for validation, pilots, and advisory.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link href="/explore">
                <Button size="lg" className="rounded-full px-8 bg-gradient-to-br from-[#35d3b4] to-[#4aa3ff] text-white border-0 shadow-[0_20px_38px_-22px_rgba(74,163,255,0.6)] hover:shadow-lg hover:scale-105 transition-all duration-200">
                  Find Experts <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="outline" size="lg" className="rounded-full px-8 bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:text-white transition-all duration-200">
                  For Clinics & Experts
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features / Value Prop */}
        <section className="relative z-10 pb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300" id="features">
          <div className="absolute top-0 left-0 w-full -translate-y-1/2 pointer-events-none text-[#060e1e]/90" aria-hidden="true">
            <svg viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[120px] fill-current">
              <path d="M0 120L60 108C120 96 240 72 360 66C480 60 600 72 720 78C840 84 960 84 1080 60C1200 36 1320 -12 1380 -36L1440 -60V180H1380C1320 180 1200 180 1080 180C960 180 840 180 720 180C600 180 480 180 360 180C240 180 120 180 60 180H0V120Z" />
            </svg>
          </div>

          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Card 1 */}
            <article className="bg-[#0f172a]/60 backdrop-blur-md border border-slate-700/30 rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300 group">
              <span className="block w-16 h-16 mb-6 p-3 rounded-2xl bg-gradient-to-br from-[#4aa3ff]/20 to-[#35d3b4]/20 text-[#4aa3ff] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(74,163,255,0.15)] box-border">
                <Search className="w-full h-full" />
              </span>
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground">Smart Discovery</h3>
              <p className="text-muted-foreground leading-relaxed">Search verified experts by specialty, availability, and interests. Filter by price and location.</p>
            </article>

            {/* Card 2 */}
            <article className="bg-[#0f172a]/60 backdrop-blur-md border border-slate-700/30 rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300 group">
              <span className="block w-16 h-16 mb-6 p-3 rounded-2xl bg-gradient-to-br from-[#4aa3ff]/20 to-[#35d3b4]/20 text-[#35d3b4] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(53,211,180,0.15)] box-border">
                <ShieldCheck className="w-full h-full" />
              </span>
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground">Verified Profiles</h3>
              <p className="text-muted-foreground leading-relaxed">Every clinic and expert is manually verified to ensure high-quality, trustworthy connections.</p>
            </article>

            {/* Card 3 */}
            <article className="bg-[#0f172a]/60 backdrop-blur-md border border-slate-700/30 rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300 group">
              <span className="block w-16 h-16 mb-6 p-3 rounded-2xl bg-gradient-to-br from-[#4aa3ff]/20 to-[#35d3b4]/20 text-[#4aa3ff] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(74,163,255,0.15)] box-border">
                <MessageSquare className="w-full h-full" />
              </span>
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground">Seamless Outreach</h3>
              <p className="text-muted-foreground leading-relaxed">Direct messaging and AI-assisted introductions help you cut through the noise and get responses.</p>
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
