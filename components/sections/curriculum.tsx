import { Container } from "@/components/layout/container";

const TRACKS = [
  {
    num: "01",
    title: "AI Systems Design",
    body: "Reference architectures for RAG, agents, tool use, and multi-model systems. When to use which pattern — and how to prove it worked.",
  },
  {
    num: "02",
    title: "Data for AI",
    body: "PostgreSQL, pgvector, embeddings, and the data contracts production models depend on. From ingestion to retrieval to lineage.",
  },
  {
    num: "03",
    title: "Retrieval & Evaluation",
    body: "Hybrid retrieval, reranking, chunking strategies. Evaluation frameworks — golden sets, LLM-as-judge, red teams — and how to keep them honest.",
  },
  {
    num: "04",
    title: "Cloud, Cost & Latency",
    body: "Serving, scaling, observability for AI workloads. FinOps for GPU-heavy inference. Real cost-per-request budgets.",
  },
  {
    num: "05",
    title: "Governance & Safety",
    body: "Enterprise safety review, PII handling, prompt-injection defenses, audit trails, and the compliance posture legal will ask for.",
  },
  {
    num: "06",
    title: "Agentic Systems & MCP",
    body: "Multi-step agents, tool use, MCP servers, human-in-the-loop workflows. Where agents actually work — and where they don't.",
  },
];

export function Curriculum() {
  return (
    <section
      aria-labelledby="curriculum-title"
      className="border-b border-line py-24 md:py-32"
    >
      <Container>
        <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-mute">
          Curriculum
        </p>
        <h2
          id="curriculum-title"
          className="reveal mt-4 max-w-[24ch] text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.025em] text-ink"
        >
          Six tracks.{" "}
          <span className="font-serif italic font-normal text-ink-mute">
            One outcome.
          </span>
        </h2>
        <p className="reveal reveal-d2 mt-6 max-w-[var(--container-prose)] text-[1.05rem] leading-[1.6] text-ink-mute">
          Built for engineers who already ship software and want to ship AI the
          same way — with the same rigor around correctness, cost, and
          operations.
        </p>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t, i) => (
            <li
              key={t.num}
              className={`reveal reveal-d${(i % 6) + 1} group relative rounded-xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-line-strong md:p-8`}
            >
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-dim">
                {t.num}
              </span>
              <h3 className="mt-3 text-xl font-medium tracking-[-0.01em] text-ink">
                {t.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-[1.6] text-ink-mute">
                {t.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
