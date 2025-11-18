import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <Logo className="w-9 h-9" />
            {/* Twin suns sparkle */}
            <span className="pointer-events-none absolute -top-1 -left-1 h-2 w-2 rounded-full bg-amber-300/70 blur-[1px] group-hover:scale-125 transition-transform" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-amber-200 drop-shadow group-hover:text-amber-100 transition-colors">Jawa Networks</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-amber-100/80 hover:text-amber-100 transition">Features</a>
          <a href="#usecases" className="text-amber-100/80 hover:text-amber-100 transition">Use cases</a>
          <a href="#pricing" className="text-amber-100/80 hover:text-amber-100 transition">Plans</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-amber-500/90 px-4 py-2 text-slate-900 font-semibold shadow hover:bg-amber-400 transition">Get a quote</a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center p-2 text-amber-100" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-amber-400/20 bg-slate-900/70 backdrop-blur-md p-4 space-y-2 animate-in">
          <a href="#features" className="block px-3 py-2 rounded-md text-amber-100/90 hover:bg-amber-400/10">Features</a>
          <a href="#usecases" className="block px-3 py-2 rounded-md text-amber-100/90 hover:bg-amber-400/10">Use cases</a>
          <a href="#pricing" className="block px-3 py-2 rounded-md text-amber-100/90 hover:bg-amber-400/10">Plans</a>
          <a href="#contact" className="block px-3 py-2 rounded-md bg-amber-500/90 text-slate-900 font-semibold">Get a quote</a>
        </div>
      )}
    </header>
  );
}
