import { Container } from "@/components/layout/container";

export function TheGap() {
  return (
    <section
      aria-labelledby="gap-title"
      className="relative isolate overflow-hidden border-b border-line bg-surface py-24 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
              ✦ The Gap
            </p>
          </div>
          <div className="md:col-span-8">
            <h2
              id="gap-title"
              className="reveal font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-normal leading-[1.03] tracking-[-0.025em] text-ink"
            >
              Certifications and prompt engineering won&rsquo;t get you the
              offer.{" "}
              <span className="italic text-accent">Architecture will.</span>
            </h2>
            <p className="reveal mt-8 max-w-[var(--container-prose)] text-[1.05rem] leading-[1.7] text-ink-mute md:text-[1.1rem]">
              Every AI course teaches how to talk to a model. Product companies,
              top MNCs and funded startups hire on the system around it —
              retrieval architectures, evaluation frameworks, data contracts,
              latency budgets, cost governance, safety review, audit trails.
            </p>
            <p className="reveal mt-6 max-w-[var(--container-prose)] text-[1.05rem] leading-[1.7] text-ink-mute md:text-[1.1rem]">
              The distance between a working demo and a production system is
              architecture.{" "}
              <span className="text-ink">
                That distance is what stands between you and the offer.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
