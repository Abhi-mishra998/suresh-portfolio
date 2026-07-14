import { Container } from "@/components/layout/container";

const OUTCOMES = [
  "Walk into system-design rounds at FAANG, MNCs & product startups and answer at the architect bar.",
  "Own the AI data layer end-to-end — PostgreSQL, pgvector, embeddings, contracts, lineage.",
  "Justify cost-per-request, GPU utilization and FinOps trade-offs in leadership reviews.",
  "Defend architectural choices against security, legal and compliance — the way senior engineers do.",
  "Ship your interview take-home like a staff engineer, not a course grad.",
  "Build the network — direct intros through the alumni base already inside product cos & MNCs.",
];

export function Outcomes() {
  return (
    <section
      aria-labelledby="outcomes-title"
      className="border-b border-line py-24 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
              ✦ What you walk out with
            </p>
            <h2
              id="outcomes-title"
              className="reveal mt-4 font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-normal leading-[1.03] tracking-[-0.025em] text-ink"
            >
              By the end, you can{" "}
              <span className="italic text-accent">land the offer.</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <ul className="space-y-1">
              {OUTCOMES.map((o, i) => (
                <li
                  key={i}
                  className="reveal group flex gap-4 border-b border-line py-5 text-[1.05rem] leading-[1.55] text-ink transition-colors md:text-[1.1rem]"
                >
                  <span
                    aria-hidden
                    className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent"
                  >
                    0{i + 1}
                  </span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
