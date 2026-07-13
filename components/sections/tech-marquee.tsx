const TOPICS = [
  "PostgreSQL",
  "pgvector",
  "Retrieval",
  "Evaluation",
  "Governance",
  "Cost & Latency",
  "Databricks",
  "Delta Lake",
  "Iceberg",
  "Kafka",
  "Snowflake",
  "Airflow",
  "dbt",
  "MCP",
  "Agentic systems",
];

/* Seamless marquee: track holds items ×2 so translateX(-50%) shows a fresh
   copy at the exact moment the first copy exits. CSS-only, no JS.
   Under prefers-reduced-motion the animation pauses and the track wraps. */
export function TechMarquee() {
  const items = [...TOPICS, ...TOPICS];
  return (
    <section
      aria-label="Curriculum topics"
      className="relative overflow-hidden border-y border-line py-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-canvas to-transparent sm:w-24 md:w-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-canvas to-transparent sm:w-24 md:w-40"
      />
      <ul className="flex w-max min-w-full items-center gap-14 motion-safe:animate-[marquee_50s_linear_infinite] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8">
        {items.map((item, i) => (
          <li
            key={i}
            className="whitespace-nowrap font-mono text-[0.82rem] uppercase tracking-[0.22em] text-ink-mute"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
