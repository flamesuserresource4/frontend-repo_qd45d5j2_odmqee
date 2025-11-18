import ParallaxSection from './ParallaxSection';

export default function ParallaxSectionsContent() {
  return (
    <div>
      <ParallaxSection id="ops" strength={0.06} bgStrength={0.1} className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-amber-100">Operational telemetry</h3>
            <p className="mt-3 text-amber-100/70">Real-time dashboards tracking agent health, queue depth, and eval scores. Designed for clarity under twin suns.</p>
            <ul className="mt-6 space-y-2 text-amber-100/80 text-sm list-disc pl-5">
              <li>Latency heatmaps and drift detection</li>
              <li>Retrieval quality and grounding checks</li>
              <li>Agentic workflow traces and replay</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-400/20 bg-stone-900/60 p-4">
            <img alt="Ops Telemetry" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" className="rounded-lg object-cover w-full h-72" />
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection id="etl" strength={0.08} bgStrength={0.14} className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl border border-amber-400/20 bg-stone-900/60 p-4 order-last md:order-first">
            <img alt="Data Pipelines" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" className="rounded-lg object-cover w-full h-72" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-amber-100">Data sandcrawlers</h3>
            <p className="mt-3 text-amber-100/70">Fault-tolerant ETL across dunes of data. Connectors for docs, tickets, code, and telemetry out of the box.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-amber-100/80">
              <div className="rounded-md border border-amber-400/20 bg-black/30 p-3">
                <p className="text-amber-200/80">Sources</p>
                <ul className="mt-1 list-disc pl-4">
                  <li>Confluence</li>
                  <li>Slack</li>
                  <li>GitHub</li>
                </ul>
              </div>
              <div className="rounded-md border border-amber-400/20 bg-black/30 p-3">
                <p className="text-amber-200/80">Sinks</p>
                <ul className="mt-1 list-disc pl-4">
                  <li>Vector DB</li>
                  <li>Warehouse</li>
                  <li>Search index</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection id="evals" strength={0.065} bgStrength={0.12} className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-amber-100">Evaluation suite</h3>
            <p className="mt-3 text-amber-100/70">Scenario packs, rubrics, and CI that keep models honest. Scorecards wired to your business metrics.</p>
            <div className="mt-6 rounded-lg border border-amber-400/20 bg-black/30 p-4 font-mono text-xs text-amber-200/80 whitespace-pre-wrap">
{`Task: Troubleshoot billing error\nSignal: High confusion\nIntervention: Retrieve docs -> escalate to human\n\nBefore: 61% success\nAfter: 91% success (A/B over 7d)`}
            </div>
          </div>
          <div className="rounded-2xl border border-amber-400/20 bg-stone-900/60 p-4">
            <img alt="Evals" src="https://images.unsplash.com/photo-1590596975772-ddeed94dd503?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFdmFsc3xlbnwwfDB8fHwxNzYzNDYxNjAyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="rounded-lg object-cover w-full h-72" />
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}
