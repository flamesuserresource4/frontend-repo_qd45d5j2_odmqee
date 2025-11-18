import { Bot, Cpu, Database, Shield } from "lucide-react";

const items = [
  {
    icon: Bot,
    title: "Intelligent copilots",
    desc: "Custom assistants for workflows, support, and ops that speak your domain."
  },
  {
    icon: Cpu,
    title: "Model engineering",
    desc: "From fine-tuning to retrieval pipelines — we craft systems that perform."
  },
  {
    icon: Database,
    title: "Data sandcrawlers",
    desc: "ETL and knowledge graphs that turn dunes of data into insights."
  },
  {
    icon: Shield,
    title: "Enterprise-grade",
    desc: "Security, observability, and governance built in from day one."
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(245,158,11,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-100 text-center">Capabilities crafted by Jawas</h2>
        <p className="mt-3 text-amber-100/70 text-center max-w-2xl mx-auto">Small robed engineers, big AI results.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-amber-400/20 bg-slate-900/60 p-5 backdrop-blur-sm hover:bg-slate-900/80 transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/20 ring-1 ring-amber-400/30 text-amber-200">
                <Icon />
              </div>
              <h3 className="mt-4 font-semibold text-amber-100">{title}</h3>
              <p className="mt-2 text-sm text-amber-100/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
