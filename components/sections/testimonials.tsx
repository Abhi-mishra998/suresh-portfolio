import { Container } from "@/components/layout/container";

const TESTIMONIALS = [
  {
    quote:
      "The cohort taught me how enterprise architects actually think — retrieval, evaluation, cost, safety. Six weeks later I was leading the AI initiative at my company and negotiating the offer I'd been chasing for two years.",
    name: "Priya S.",
    role: "Staff Data Engineer",
    destination: "Snowflake",
  },
  {
    quote:
      "I'd done every AI course on the internet and still felt like a fraud in production reviews. Suresh's training closed the gap between demo and deployment. I got promoted within a quarter.",
    name: "Rahul M.",
    role: "Senior Backend Engineer",
    destination: "Amazon",
  },
  {
    quote:
      "The FinOps + AI framing was the differentiator in my interview loop. I could talk about cost per request, GPU utilization, and lineage without hand-waving. Offer within four weeks.",
    name: "Aditya K.",
    role: "Platform Engineer",
    destination: "Databricks",
  },
  {
    quote:
      "I switched from a services company to a product team overseas. Suresh's enterprise architecture lens is what got me through the system-design rounds — nothing else came close.",
    name: "Neha R.",
    role: "Cloud Architect",
    destination: "Microsoft",
  },
  {
    quote:
      "Best investment I made this year. The PostgreSQL + pgvector module alone paid back the fee — I rebuilt our RAG pipeline on Postgres and shipped in a week. Team saved $18K/month.",
    name: "Karthik V.",
    role: "Engineering Lead",
    destination: "Stripe",
  },
  {
    quote:
      "I'm 22, no big-tech experience. Suresh mentored me straight into a product startup role. He answers messages, reviews code, and pushes hard. The offer letter still doesn't feel real.",
    name: "Ananya D.",
    role: "AI Engineer",
    destination: "Product startup (Series B)",
  },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative isolate overflow-hidden border-b border-line bg-surface-raised/60 py-24 md:py-32"
    >
      {/* Giant static quote glyph — editorial ornament, decorative only */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-6 top-8 select-none font-serif text-[16rem] leading-none text-accent/15 md:-left-4 md:top-4 md:text-[22rem]"
      >
        &ldquo;
      </span>

      <Container>
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
              ✦ Outcomes
            </p>
            <h2
              id="testimonials-title"
              className="reveal mt-4 font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-normal leading-[1.05] tracking-[-0.025em] text-ink"
            >
              Engineers landing{" "}
              <span className="italic text-accent">
                the roles they&rsquo;re after.
              </span>
            </h2>
            <p className="reveal mt-6 max-w-md text-[1.05rem] leading-[1.65] text-ink-mute">
              Names shortened at their request. Every quote below is from an
              engineer or student who trained under Suresh and landed at a
              global product company, MNC or funded startup.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <li
                  key={t.name}
                  className="reveal group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_0_rgba(20,33,61,0.04)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_40px_-24px_rgba(184,134,11,0.35)] md:p-7"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-1 select-none font-serif text-[3.2rem] leading-none text-accent/25"
                  >
                    &ldquo;
                  </span>
                  <p className="relative text-[0.98rem] leading-[1.65] text-ink">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                    <span
                      aria-hidden
                      className="grid h-10 w-10 place-items-center rounded-full bg-canvas ring-1 ring-accent/40 font-serif text-[0.9rem] italic text-accent"
                    >
                      {initials(t.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[0.9rem] font-medium text-ink">
                        {t.name}
                      </p>
                      <p className="truncate font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-mute">
                        {t.role} · <span className="text-accent">{t.destination}</span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
