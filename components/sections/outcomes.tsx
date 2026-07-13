import { Container } from "@/components/layout/container";

const OUTCOMES = [
  "Architect a production AI system end-to-end — retrieval, evaluation, safety, cost.",
  "Own the data layer: PostgreSQL, pgvector, embeddings, contracts, lineage.",
  "Ship AI workloads to AWS, GCP, or Azure with observability and cost budgets.",
  "Defend architectural choices in front of leadership, security, and legal.",
  "Speak the language of enterprise architecture — not tutorial-land.",
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
            <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-mute">
              Outcomes
            </p>
            <h2
              id="outcomes-title"
              className="reveal mt-4 text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.025em] text-ink"
            >
              By the end, you can{" "}
              <span className="font-serif italic font-normal text-ink-mute">
                own it.
              </span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <ul className="space-y-1">
              {OUTCOMES.map((o, i) => (
                <li
                  key={i}
                  className={`reveal reveal-d${(i % 5) + 1} flex gap-4 border-b border-line py-5 text-[1.05rem] leading-[1.55] text-ink md:text-[1.1rem]`}
                >
                  <span
                    aria-hidden
                    className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-dim"
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
