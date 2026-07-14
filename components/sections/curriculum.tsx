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
        <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
          ✦ Curriculum
        </p>
        <h2
          id="curriculum-title"
          className="reveal mt-4 max-w-[24ch] font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-normal leading-[1.03] tracking-[-0.025em] text-ink"
        >
          Six tracks.{" "}
          <span className="italic text-accent">One outcome.</span>
        </h2>
        <p className="reveal mt-6 max-w-[var(--container-prose)] text-[1.05rem] leading-[1.65] text-ink-mute">
          Built for engineers who already ship software and want the job at a
          product company, MNC or funded startup — with the same rigor around
          correctness, cost and operations that hiring managers screen for.
        </p>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t, i) => (
            <li
              key={t.num}
              className={`reveal group relative rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_0_rgba(20,33,61,0.04)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_36px_-24px_rgba(184,134,11,0.35)] md:p-8`}
            >
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent transition-colors">
                {t.num}
              </span>
              <h3 className="mt-3 font-serif text-2xl font-normal tracking-[-0.01em] text-ink transition-colors group-hover:text-accent md:text-[1.65rem]">
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
