import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-white/70">
            <Sparkles size={14} className="text-fuchsia-300" /> AI Voice Agent
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Speak with your AI. Natural. Instant. Everywhere.
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Aivoice is a real-time voice agent that understands context, remembers conversations, and automates tasks across your apps. Delightfully fast and human.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              id="get-started"
              href="#features"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 px-5 py-3 font-medium text-slate-950 hover:opacity-90 transition"
            >
              Launch Demo <ArrowRight size={18} />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
