import { Container } from "@/components/layout/container";
import { ParallaxLayer } from "@/components/effects/parallax-layer";

const WAITLIST_HREF =
  "mailto:suresh.avula@bytehubble.ai?subject=Waitlist%20%E2%80%93%20ByteHubble%20AI%20Academy&body=Please%20add%20me%20to%20the%20founding%20cohort%20waitlist.";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative isolate overflow-hidden py-28 md:py-40"
    >
      <ParallaxLayer
        speed={0.2}
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[520px] opacity-[0.8] [background:radial-gradient(900px_500px_at_50%_100%,rgba(255,255,255,0.11),transparent_65%)]"
        />
      </ParallaxLayer>
      <ParallaxLayer
        speed={0.08}
        className="pointer-events-none absolute inset-0 -z-30"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_100%,black_10%,transparent_65%)]"
        />
      </ParallaxLayer>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal flex items-center justify-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-mute">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-success" />
            Founding cohort · Forming
          </p>
          <h2
            id="final-cta-title"
            className="reveal reveal-d2 mt-8 text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink"
          >
            Join the founding cohort.{" "}
            <span className="font-serif italic font-normal text-ink-mute">
              First seats go to the earliest signups.
            </span>
          </h2>
          <p className="reveal reveal-d3 mx-auto mt-8 max-w-xl text-[1.1rem] leading-[1.6] text-ink-mute">
            No spam. One email when the cohort dates, format, and pricing are
            finalized — you get to say yes or no before it opens publicly.
          </p>
          <div className="reveal reveal-d4 mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WAITLIST_HREF}
              className="group relative inline-flex h-12 items-center overflow-hidden rounded-full bg-ink px-7 text-[0.95rem] font-medium text-canvas transition-colors hover:bg-ink-mute"
            >
              <span className="relative z-10">Join the waitlist</span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
              />
            </a>
          </div>
          <p className="reveal reveal-d5 mt-6 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-dim">
            Or write directly · suresh.avula@bytehubble.ai
          </p>
        </div>
      </Container>
    </section>
  );
}
