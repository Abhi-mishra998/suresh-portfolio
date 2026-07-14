import { Container } from "@/components/layout/container";

const FAQS = [
  {
    q: "Will this really help me land a role at a product company, MNC or startup?",
    a: "That's the point. The curriculum, mock system-design rounds, portfolio project and alumni intros are all built around one outcome: getting you an offer at a global product company, a top MNC or a funded startup. 20,000+ engineers have gone through Suresh's training and landed roles.",
  },
  {
    q: "Is this for beginners?",
    a: "No. You should already ship software professionally — a working engineer, a data/DB person, an SRE, a cloud architect, or a strong CS grad. If you're brand new to programming, you'll spend the whole cohort catching up on prerequisites instead of building the architect-level skills the offers require.",
  },
  {
    q: "How is this different from a bootcamp or a generic AI course?",
    a: "Bootcamps teach syntax. Generic AI courses teach prompt patterns. This teaches the enterprise architecture that hiring managers at FAANG, MNCs and product startups actually screen for — retrieval, evaluation, governance, FinOps, cost per request — plus interview prep with a real enterprise architect.",
  },
  {
    q: "How much time per week?",
    a: "Live sessions plus async labs. Target commitment: 6–8 hours a week. Exact schedule confirmed with cohort members before enrollment.",
  },
  {
    q: "What's the pricing?",
    a: "Cohort pricing is disclosed to applicants privately. The offer includes live sessions with Suresh, mock interviews, a portfolio project reviewed 1:1, and alumni-network access.",
  },
  {
    q: "Do you offer corporate / team training?",
    a: "Yes — 1–3 day workshops for engineering teams on enterprise AI architecture, PostgreSQL for AI workloads, FinOps, and specific topics from the curriculum. Reach out with team size and focus.",
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
            <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
              ✦ FAQ
            </p>
            <h2
              id="faq-title"
              className="reveal mt-4 font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-normal leading-[1.03] tracking-[-0.025em] text-ink"
            >
              Questions{" "}
              <span className="italic text-accent">answered.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="border-t border-line">
              {FAQS.map((item, i) => (
                <li
                  key={i}
                  className="reveal border-b border-line"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 text-[1.05rem] font-medium text-ink transition-colors hover:text-accent md:text-[1.15rem]">
                      <span>{item.q}</span>
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 font-serif text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
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
