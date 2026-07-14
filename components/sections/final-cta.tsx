import { Container } from "@/components/layout/container";
import { ApplyButton } from "@/components/apply/apply-dialog";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative isolate overflow-hidden bg-canvas py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-40 -z-10 h-[520px] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 100%, rgba(232,206,125,0.5), transparent 65%)",
        }}
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal flex items-center justify-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-mute">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            Next cohort · Applications open
          </p>
          <h2
            id="final-cta-title"
            className="reveal mt-8 font-serif text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[1] tracking-[-0.03em] text-ink"
          >
            Ready to land the offer?{" "}
            <span className="italic text-accent">Apply today.</span>
          </h2>
          <p className="reveal mx-auto mt-8 max-w-xl text-[1.1rem] leading-[1.65] text-ink-mute">
            Seats are limited so Suresh can personally review every applicant
            and give feedback that goes into your interview prep — before the
            cohort even starts.
          </p>
          <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-4">
            <ApplyButton className="group relative inline-flex h-12 items-center overflow-hidden rounded-full bg-ink px-7 text-[0.95rem] font-medium text-canvas transition-colors hover:bg-accent">
              <span className="relative z-10">Apply to the cohort</span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
              />
            </ApplyButton>
          </div>
          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-dim">
            Or write directly · suresh.avula@bytehubble.ai
          </p>
        </div>
      </Container>
    </section>
  );
}
