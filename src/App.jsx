import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import UseCases from './components/UseCases'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-amber-50 relative">
      {/* Subtle starfield + heat haze */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(110%_80%_at_50%_-10%,rgba(245,158,11,0.08),transparent),radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.06),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_22%),radial-gradient(circle_at_60%_70%,rgba(255,255,255,0.04),transparent_18%)]" />

      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Pricing />

      {/* Contact / CTA */}
      <section id="contact" className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(234,179,8,0.10),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-100">Tell us your mission</h2>
          <p className="mt-3 text-amber-100/75">Well scope your custom AI build and share a plan within 48 standard hours.</p>
          <form className="mt-8 grid gap-4 text-left">
            <input type="text" name="name" placeholder="Your name" className="w-full rounded-md border border-amber-400/20 bg-slate-900/60 px-4 py-3 text-amber-100 placeholder-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
            <input type="email" name="email" placeholder="Work email" className="w-full rounded-md border border-amber-400/20 bg-slate-900/60 px-4 py-3 text-amber-100 placeholder-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
            <textarea name="project" rows="4" placeholder="What are you trying to build?" className="w-full rounded-md border border-amber-400/20 bg-slate-900/60 px-4 py-3 text-amber-100 placeholder-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
            <div className="flex items-center justify-center">
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-900 shadow hover:bg-amber-400 transition">
                Send transmission
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer with Jawa easter egg */}
      <footer className="relative border-t border-amber-400/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-amber-100/70 text-sm">© {new Date().getFullYear()} Jawa Networks — Custom AI development</p>
          <p className="text-amber-200/80 text-sm">Utinni! Fueling innovation from Tatooine to Coruscant.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
