import { Container } from "@/components/layout/container";

const STATS = [
  { number: "20,000+", label: "Engineers & students trained" },
  { number: "$40M+", label: "Cloud cost saved for enterprises" },
  { number: "Petabyte", label: "Scale data platforms operated" },
  { number: "18+ yrs", label: "Enterprise architecture" },
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
      className="relative isolate overflow-hidden border-b border-line bg-surface py-24 md:py-32"
      id="founder"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="reveal relative inline-flex items-center gap-5">
              {/* Static gold monogram — placeholder identity mark. Swap for a
                  real portrait when Suresh provides one; keep the ring/frame. */}
              <span
                aria-hidden
                className="relative grid h-20 w-20 place-items-center rounded-full bg-canvas ring-1 ring-line-strong md:h-24 md:w-24"
              >
                <span
                  aria-hidden
                  className="absolute inset-[3px] rounded-full ring-1 ring-accent/40"
                />
                <span className="font-serif text-[1.9rem] italic text-accent md:text-[2.1rem]">
                  SBA
                </span>
              </span>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
                ✦ The trainer
              </p>
            </div>
            <h2
              id="founder-title"
              className="reveal mt-6 font-serif text-[clamp(2.4rem,5.2vw,3.9rem)] font-normal leading-[1] tracking-[-0.03em] text-ink"
            >
              Suresh Babu{" "}
              <span className="italic text-accent">Avula</span>
            </h2>
            <p className="reveal mt-4 font-mono text-[0.82rem] uppercase tracking-[0.14em] text-ink-mute">
              Enterprise Architect · Data · Databases · AI · Cloud · FinOps
            </p>
          </div>

          <div className="md:col-span-7">
            <p className="reveal text-[1.1rem] leading-[1.7] text-ink-mute md:text-[1.15rem] [&::first-letter]:mr-1 [&::first-letter]:float-left [&::first-letter]:font-serif [&::first-letter]:text-[3.6rem] [&::first-letter]:font-normal [&::first-letter]:leading-[0.85] [&::first-letter]:text-accent">
              An enterprise product & data architect who has spent{" "}
              <span className="text-ink">18+ years</span> designing
              petabyte-scale data and database platforms that power products used
              by the world&rsquo;s largest enterprises — engineering systems
              that ingest terabytes daily, analyze terabyte-to-petabyte volumes,
              and synchronize data across clouds with deep mastery of OLTP, OLAP,
              in-memory and search workloads.
            </p>
            <p className="reveal mt-6 text-[1.1rem] leading-[1.7] text-ink-mute md:text-[1.15rem]">
              Repeatedly integral to{" "}
              <span className="text-ink">unicorn growth journeys</span> as the
              Database / Data / SRE / Cloud / Data Architect who models
              multi-billion-dollar products and turns data into durable
              competitive advantage across{" "}
              <span className="text-ink">Innovaccer, Impact Analytics,</span>{" "}
              <span className="text-ink">FourKites, S&amp;P Global,</span> and
              government-scale digital transformation with Ernst &amp; Young.
            </p>
            <p className="reveal mt-6 text-[1.1rem] leading-[1.7] text-ink-mute md:text-[1.15rem]">
              Delivered{" "}
              <span className="text-ink">
                $40M+ in cumulative cloud cost savings
              </span>{" "}
              through FinOps, workload optimization and enterprise EDP / MAP
              negotiations — and mentored{" "}
              <span className="text-ink">20,000+ engineers</span>,
              professionals and students into roles at global product companies,
              MNCs and top startups.
            </p>

            <ul
              aria-label="Areas of practice"
              className="reveal mt-8 flex flex-wrap gap-2"
            >
              {PRACTICE.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-line-strong/70 bg-canvas px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-mute transition-colors hover:border-accent hover:text-ink"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-strong/70 bg-line-strong/60 md:mt-20 md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group bg-surface p-6 text-center transition-colors hover:bg-accent-soft/25 md:p-8 md:text-left"
            >
              <p className="font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] font-normal leading-none tracking-[-0.02em] text-accent">
                {s.number}
              </p>
              <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-mute">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 border-t border-line pt-8">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-dim">
            ✦ Credentials
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-ink-mute">
            {CREDENTIALS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
