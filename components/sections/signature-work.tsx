import { Container } from "@/components/layout/container";

const CASES = [
  {
    num: "01",
    company: "Innovaccer",
    title: "Healthcare Analytics at Scale",
    body: "Architected data platforms serving hundreds of thousands of concurrent users with ACID-compliant transactions. Synchronized EHR data into Snowflake and shipped Snowflake data products processing millions of patient records daily. Built a DB runbook RAG on pgvector + Ollama for the SRE team.",
    stack: [
      "Aurora PostgreSQL",
      "Snowflake",
      "pgvector",
      "Ollama",
      "Kafka",
      "MongoDB",
    ],
    metric: "M+ patient records / day",
  },
  {
    num: "02",
    company: "Impact Analytics",
    title: "Retail AI Data Foundation",
    body: "Owns end-to-end data architecture for billion-dollar-scale retail AI products across the Impact Analytics suite. OLTP + OLAP models on GCP power SKU-level demand forecasting, pricing and inventory optimization for global retailers processing billions of transactions.",
    stack: [
      "GCP",
      "CloudSQL Postgres",
      "ClickHouse",
      "OceanBase",
      "Databricks",
      "BigQuery",
      "Airflow",
    ],
    metric: "B+ retail transactions",
  },
  {
    num: "03",
    company: "S&P Global",
    title: "Fintech-Grade Infrastructure",
    body: "Architected enterprise database infrastructure for the financial-services industry — underpinning hundreds of trillions of dollars in global financial-market data with 24×7 mission-critical reliability on Oracle Exadata, PostgreSQL and Cassandra.",
    stack: ["Oracle Exadata", "PostgreSQL", "Cassandra", "AWS", "Azure"],
    metric: "$100T+ market data",
  },
  {
    num: "04",
    company: "FourKites",
    title: "Supply-Chain AI Visibility",
    body: "Drove PostgreSQL and Cassandra direction — patches, upgrades, tooling — for the ML-driven supply-chain visibility platform used by global shippers, carriers and 3PLs. Built time-series data management for real-time logistics tracking.",
    stack: ["PostgreSQL", "Cassandra", "Redshift", "Redis", "AWS"],
    metric: "Global shipper coverage",
  },
];

export function SignatureWork() {
  return (
    <section
      aria-labelledby="work-title"
      className="relative isolate overflow-hidden border-b border-line bg-canvas py-24 md:py-32"
    >
      <Container>
        <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
          ✦ Enterprise Impact
        </p>
        <h2
          id="work-title"
          className="reveal mt-4 max-w-[24ch] font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-normal leading-[1.03] tracking-[-0.025em] text-ink"
        >
          Systems the business{" "}
          <span className="italic text-accent">actually depends on.</span>
        </h2>
        <p className="reveal mt-6 max-w-[var(--container-prose)] text-[1.05rem] leading-[1.65] text-ink-mute">
          A snapshot of platforms Suresh has designed and operated for global
          enterprises — the same architecture playbook you&rsquo;ll learn to
          apply in the cohort.
        </p>

        <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {CASES.map((c) => (
            <li
              key={c.num}
              className="reveal group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_0_rgba(20,33,61,0.04)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_-24px_rgba(184,134,11,0.35)] md:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-dim">
                  {c.num}
                </span>
                <span className="font-serif text-2xl italic text-ink transition-colors group-hover:text-accent md:text-[1.65rem]">
                  {c.company}
                </span>
              </div>
              <h3 className="mt-6 text-[1.3rem] font-medium tracking-[-0.015em] text-ink md:text-[1.45rem]">
                {c.title}
              </h3>
              <p className="mt-4 flex-1 text-[1rem] leading-[1.65] text-ink-mute">
                {c.body}
              </p>
              <p className="mt-6 font-serif text-[1.55rem] leading-none text-accent md:text-[1.9rem]">
                {c.metric}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line-strong/70 bg-canvas px-3 py-1 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-dim"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
