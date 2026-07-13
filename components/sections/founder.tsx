import { Container } from "@/components/layout/container";
import { ParallaxLayer } from "@/components/effects/parallax-layer";

const STATS = [
  { number: "18+", label: "Years enterprise architecture" },
  { number: "$40M+", label: "Cumulative cloud cost saved" },
  { number: "Petabyte-scale", label: "Data platforms operated" },
  { number: "100+", label: "Oracle RAC & DR builds" },
];

const CREDENTIALS = [
  "11g Oracle Certified Professional",
  "AWS Solutions Architect",
  "PMP · ITIL V3 — IIT Kharagpur",
  "MCA — JNTU Hyderabad",
];

const PRACTICE = [
  "Enterprise Architecture",
  "Data Architecture",
  "AI Architecture",
  "Cloud Architecture",
  "PostgreSQL",
  "pgvector · RAG",
  "FinOps",
  "Databricks · Delta Lake · Iceberg",
];

export function Founder() {
  return (
    <section
      aria-labelledby="founder-title"
      className="relative isolate overflow-hidden border-b border-line py-24 md:py-32"
      id="founder"
    >
      <ParallaxLayer
        speed={0.28}
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div
          aria-hidden
          className="absolute right-[-8%] top-[-10%] h-[720px] w-[720px] opacity-60 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"
        />
      </ParallaxLayer>
      <ParallaxLayer
        speed={0.12}
        className="pointer-events-none absolute inset-0 -z-30"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_60%_40%,black_15%,transparent_75%)]"
        />
      </ParallaxLayer>

      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-mute">
              Founder
            </p>
            <h2
              id="founder-title"
              className="reveal mt-4 text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink"
            >
              Suresh Babu{" "}
              <span className="font-serif italic font-normal">Avula</span>
            </h2>
            <p className="reveal reveal-d2 mt-4 font-mono text-[0.82rem] uppercase tracking-[0.14em] text-ink-mute">
              Enterprise Architect · Data · AI · Cloud · PostgreSQL
            </p>
          </div>

          <div className="md:col-span-7">
            <p className="reveal reveal-d2 text-[1.1rem] leading-[1.65] text-ink-mute md:text-[1.15rem]">
              <span className="text-ink">18+ years</span> designing
              petabyte-scale data and AI systems for the world&rsquo;s largest
              enterprises. Currently{" "}
              <span className="text-ink">
                Enterprise Architect at Impact Analytics
              </span>{" "}
              — architecting the data foundation for retail AI products
              (ForecastSmart, PriceSmart, InventorySmart) that process billions
              of transactions across global retailers.
            </p>
            <p className="reveal reveal-d3 mt-6 text-[1.1rem] leading-[1.65] text-ink-mute md:text-[1.15rem]">
              Previously built the healthcare analytics platform at{" "}
              <span className="text-ink">Innovaccer</span>, supply-chain AI
              visibility at <span className="text-ink">FourKites</span>,
              digital-governance systems at{" "}
              <span className="text-ink">Ernst &amp; Young</span> (Andhra
              Pradesh e-Pragathi), and enterprise database infrastructure at{" "}
              <span className="text-ink">S&amp;P Global</span> underpinning
              hundreds of trillions of dollars in global financial-market data.
            </p>
            <p className="reveal reveal-d4 mt-6 text-[1.1rem] leading-[1.65] text-ink-mute md:text-[1.15rem]">
              Delivered{" "}
              <span className="text-ink">
                $40M+ in cumulative cloud cost savings
              </span>{" "}
              across a 15-year architect career through FinOps tooling, workload
              right-sizing, and enterprise EDP / MAP negotiations.
            </p>

            <ul
              aria-label="Areas of practice"
              className="mt-8 flex flex-wrap gap-2"
            >
              {PRACTICE.map((p, i) => (
                <li
                  key={p}
                  className={`reveal reveal-d${(i % 6) + 1} rounded-full border border-line px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-mute`}
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-20 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`reveal reveal-d${i + 1} bg-canvas p-6 text-center md:p-8 md:text-left`}
            >
              <p className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.02em] text-ink">
                {s.number}
              </p>
              <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-mute">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-dim">
            Credentials
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-ink-mute">
            {CREDENTIALS.map((c, i) => (
              <li key={c} className={`reveal reveal-d${i + 1}`}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
