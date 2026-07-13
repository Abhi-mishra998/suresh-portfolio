import { Container } from "@/components/layout/container";
import { ParallaxLayer } from "@/components/effects/parallax-layer";

const CASES = [
  {
    num: "01",
    company: "Innovaccer",
    period: "2021 — 2025",
    title: "Healthcare Analytics at Scale",
    body: "Architected data platforms serving hundreds of thousands of concurrent users with ACID-compliant transactions. Synchronized EHR data into Snowflake and built enterprise-grade Snowflake data products processing millions of patient records daily. Built a DB runbook RAG using pgvector + Ollama models for the SRE team.",
    stack: [
      "Aurora PostgreSQL",
      "Snowflake",
      "pgvector",
      "Ollama",
      "Kafka",
      "MongoDB",
    ],
  },
  {
    num: "02",
    company: "Impact Analytics",
    period: "2026 — present",
    title: "Retail AI Data Foundation",
    body: "Own end-to-end data architecture for billion-dollar-scale retail AI products across the Impact Analytics suite. Design OLTP + OLAP models on GCP to power SKU-level demand forecasting, pricing, and inventory optimization for global retailers processing billions of transactions.",
    stack: [
      "GCP",
      "CloudSQL PostgreSQL",
      "ClickHouse",
      "OceanBase",
      "Databricks",
      "BigQuery",
      "Airflow",
    ],
  },
  {
    num: "03",
    company: "S&P Global",
    period: "2016 — 2018",
    title: "Fintech Database Infrastructure",
    body: "Architected enterprise-grade database infrastructure for the financial-services industry underpinning hundreds of trillions of dollars in global financial-market data. Delivered 24×7 mission-critical reliability with Oracle Exadata, PostgreSQL, and Cassandra.",
    stack: ["Oracle Exadata", "PostgreSQL", "Cassandra", "AWS", "Azure"],
  },
  {
    num: "04",
    company: "FourKites",
    period: "2019 — 2021",
    title: "Supply-Chain AI Visibility",
    body: "Drove PostgreSQL and Cassandra direction — patches, upgrades, tooling — for the ML-driven supply-chain visibility platform used by global shippers, carriers, and 3PLs. Built time-series data management for logistics tracking.",
    stack: ["PostgreSQL", "Cassandra", "Redshift", "Redis", "AWS"],
  },
];

export function SignatureWork() {
  return (
    <section
      aria-labelledby="work-title"
      className="relative isolate overflow-hidden border-b border-line py-24 md:py-32"
    >
      <ParallaxLayer
        speed={0.32}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          aria-hidden
          className="absolute -bottom-40 left-[-10%] h-[640px] w-[640px] opacity-50 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_60%)]"
        />
      </ParallaxLayer>

      <Container>
        <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-mute">
          Signature Work
        </p>
        <h2
          id="work-title"
          className="reveal mt-4 max-w-[22ch] text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.025em] text-ink"
        >
          Systems the business{" "}
          <span className="font-serif italic font-normal text-ink-mute">
            actually depends on.
          </span>
        </h2>

        <ul className="mt-14 space-y-10 md:space-y-14">
          {CASES.map((c, i) => (
            <li
              key={c.num}
              className={`reveal reveal-d${(i % 4) + 1} grid grid-cols-1 gap-6 border-t border-line pt-10 md:grid-cols-12 md:gap-10`}
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-dim">
                  {c.num} · {c.period}
                </p>
                <p className="mt-2 font-serif text-xl italic text-ink md:text-2xl">
                  {c.company}
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-[1.35rem] font-medium tracking-[-0.015em] text-ink md:text-[1.5rem]">
                  {c.title}
                </h3>
                <p className="mt-4 text-[1rem] leading-[1.65] text-ink-mute md:text-[1.05rem]">
                  {c.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-dim"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
