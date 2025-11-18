export default function UseCases() {
  const cases = [
    {
      title: "Support droids",
      desc: "24/7 multilingual help that understands your products like a protocol droid.",
    },
    {
      title: "Ops automation",
      desc: "From quotes to QA — automated workflows that cut through red tape like a lightsaber.",
    },
    {
      title: "Sales copilots",
      desc: "Prospecting, call prep, and follow-ups that keep your reps moving faster than a speeder.",
    },
    {
      title: "Knowledge mining",
      desc: "Ingest docs, chats, and code to power search and insights across your org.",
    },
  ];

  return (
    <section id="usecases" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(234,179,8,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-100 text-center">Where we deploy</h2>
        <p className="mt-3 text-amber-100/70 text-center max-w-2xl mx-auto">Use cases proven across scrappy startups and planetary-scale enterprises.</p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="rounded-xl border border-amber-400/20 bg-slate-900/60 p-6">
              <h3 className="font-semibold text-amber-100">{c.title}</h3>
              <p className="mt-2 text-amber-100/70 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
