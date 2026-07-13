import { Container } from "@/components/layout/container";

const FAQS = [
  {
    q: "Is this for beginners?",
    a: "No. You should already ship software professionally. If you're new to programming, this is not the right starting point — you'll spend the whole cohort catching up on prerequisites instead of learning enterprise AI architecture.",
  },
  {
    q: "How is this different from Andrew Ng / DeepLearning.AI / Maven cohorts?",
    a: "Those teach ML fundamentals or prompt patterns. This teaches production architecture — retrieval, evaluation, governance, cost — the parts you have to own once the demo works and leadership asks whether it can be trusted.",
  },
  {
    q: "How much time per week?",
    a: "The founding cohort will run live with async labs. Target time commitment: 6–8 hours per week. Exact schedule confirmed with waitlist members before enrollment.",
  },
  {
    q: "What's the pricing?",
    a: "Founding-cohort pricing is being finalized. Waitlist members will see it first, and founding-cohort seats will be priced below subsequent cohorts as a thank-you for early trust.",
  },
  {
    q: "Do you offer corporate training?",
    a: "Yes — 1–3 day workshops for engineering teams on enterprise AI architecture, PostgreSQL for AI workloads, or specific topics from the curriculum. Reach out via the \"Ask a question\" link with team size and topic focus.",
  },
  {
    q: "What if my company blocks external cohorts?",
    a: "Corporate training is the answer — same material, delivered privately for your team, under your NDA. Alumni have brought these workshops in-house successfully.",
  },
];

export function Faq() {
  return (
    <section
      aria-labelledby="faq-title"
      className="border-b border-line py-24 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-mute">
              FAQ
            </p>
            <h2
              id="faq-title"
              className="reveal mt-4 text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.025em] text-ink"
            >
              Questions{" "}
              <span className="font-serif italic font-normal text-ink-mute">
                answered.
              </span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="border-t border-line">
              {FAQS.map((item, i) => (
                <li
                  key={i}
                  className={`reveal reveal-d${(i % 6) + 1} border-b border-line`}
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 text-[1.05rem] font-medium text-ink transition-colors hover:text-ink-mute md:text-[1.15rem]">
                      <span>{item.q}</span>
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 font-mono text-lg leading-none text-ink-dim transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="pb-8 pr-10 text-[1rem] leading-[1.65] text-ink-mute">
                      {item.a}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
