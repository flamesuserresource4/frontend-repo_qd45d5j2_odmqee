export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(245,158,11,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-100 text-center">Plans for any outpost</h2>
        <p className="mt-3 text-amber-100/70 text-center max-w-2xl mx-auto">Start small, scale to the size of a Star Destroyer.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-amber-400/20 bg-slate-900/60 p-6">
            <h3 className="text-amber-200 font-semibold">Starter</h3>
            <p className="mt-1 text-sm text-amber-100/70">Discovery + prototype</p>
            <p className="mt-6 text-3xl font-bold text-amber-100">$5k</p>
            <ul className="mt-4 space-y-2 text-sm text-amber-100/80">
              <li>2-week sprint</li>
              <li>1 workflow/droid</li>
              <li>Basic evaluations</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-amber-400 bg-slate-900/70 p-6 shadow-[0_0_50px_rgba(245,158,11,0.15)]">
            <h3 className="text-amber-200 font-semibold">Growth</h3>
            <p className="mt-1 text-sm text-amber-100/70">Production deployment</p>
            <p className="mt-6 text-3xl font-bold text-amber-100">$20k+</p>
            <ul className="mt-4 space-y-2 text-sm text-amber-100/80">
              <li>6-8 week build</li>
              <li>Multiple workflows</li>
              <li>Eval suite + dashboards</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-400/20 bg-slate-900/60 p-6">
            <h3 className="text-amber-200 font-semibold">Enterprise</h3>
            <p className="mt-1 text-sm text-amber-100/70">Planetary-scale systems</p>
            <p className="mt-6 text-3xl font-bold text-amber-100">Custom</p>
            <ul className="mt-4 space-y-2 text-sm text-amber-100/80">
              <li>Security & governance</li>
              <li>SLAs & training</li>
              <li>On-prem options</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
