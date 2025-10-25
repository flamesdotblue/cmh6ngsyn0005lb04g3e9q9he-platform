import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400" />
            <span className="text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-cyan-300">
              Aivoice
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
            <a href="#how" className="text-white/80 hover:text-white transition">How it works</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            <a href="#get-started" className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20 transition border border-white/10">
              Get started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center p-2 rounded-md hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            <a onClick={() => setOpen(false)} href="#features" className="block px-2 py-2 rounded hover:bg-white/10">Features</a>
            <a onClick={() => setOpen(false)} href="#how" className="block px-2 py-2 rounded hover:bg-white/10">How it works</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block px-2 py-2 rounded hover:bg-white/10">Contact</a>
            <a onClick={() => setOpen(false)} href="#get-started" className="block px-2 py-2 rounded bg-white/10 text-center">Get started</a>
          </div>
        </div>
      )}
    </header>
  );
}
