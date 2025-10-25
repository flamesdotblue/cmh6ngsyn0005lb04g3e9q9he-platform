import { Mic, Zap, Shield, Sparkles } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.06]">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-fuchsia-500/10 via-indigo-500/10 to-cyan-400/10 opacity-0 blur-lg transition group-hover:opacity-100 pointer-events-none" />
      <div className="relative">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-fuchsia-300">
          <Icon size={18} />
        </div>
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Your AI that listens, thinks, and acts</h2>
          <p className="mt-3 text-white/70">Built for teams that value speed, clarity, and great conversations.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Mic}
            title="Real-time voice"
            description="Ultra-low latency streaming and natural prosody for human-like conversations without awkward gaps."
          />
          <FeatureCard
            icon={Zap}
            title="Agentic actions"
            description="Connect to calendars, CRMs, and internal tools. Let your agent book, update, and resolve tasks autonomously."
          />
          <FeatureCard
            icon={Shield}
            title="Secure by design"
            description="Role-based access, audit logs, and encryption at rest and in transit keep your data protected."
          />
          <FeatureCard
            icon={Sparkles}
            title="Personalized memory"
            description="Context and preferences are remembered across sessions for truly tailored experiences."
          />
        </div>

        <div id="how" className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <ol className="space-y-4 text-white/80">
                <li>
                  <span className="font-medium text-white">1. Connect channels</span>
                  <p className="text-sm text-white/70">Add phone numbers, web widgets, or WhatsApp in minutes.</p>
                </li>
                <li>
                  <span className="font-medium text-white">2. Teach your agent</span>
                  <p className="text-sm text-white/70">Import docs, FAQs, and set guardrails with a simple policy language.</p>
                </li>
                <li>
                  <span className="font-medium text-white">3. Ship with confidence</span>
                  <p className="text-sm text-white/70">Review transcripts, iterate prompts, and monitor analytics in real-time.</p>
                </li>
              </ol>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/10 to-cyan-400/10" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                alt="AI Voice Agent Dashboard"
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        <div id="contact" className="mt-20 flex flex-col sm:flex-row items-center gap-4">
          <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 px-5 py-3 font-medium text-slate-950 hover:opacity-90 transition">
            Start free trial
          </a>
          <span className="text-white/60 text-sm">No credit card required • 14-day trial</span>
        </div>
      </div>
    </section>
  );
}
