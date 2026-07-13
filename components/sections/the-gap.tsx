import { Container } from "@/components/layout/container";
import { ParallaxLayer } from "@/components/effects/parallax-layer";

export function TheGap() {
  return (
    <section
      aria-labelledby="gap-title"
      className="relative isolate overflow-hidden border-b border-line py-24 md:py-32"
    >
      <ParallaxLayer
        speed={0.25}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          aria-hidden
          className="absolute -left-32 top-1/2 h-[540px] w-[540px] -translate-y-1/2 opacity-50 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]"
        />
      </ParallaxLayer>

      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-mute">
              The Gap
            </p>
          </div>
          <div className="md:col-span-8">
            <h2
              id="gap-title"
              className="reveal text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.025em] text-ink"
            >
              Prompt engineering will not get you to production.{" "}
              <span className="font-serif italic font-normal text-ink-mute">
                Architecture will.
              </span>
            </h2>
            <p className="reveal reveal-d2 mt-8 max-w-[var(--container-prose)] text-[1.05rem] leading-[1.7] text-ink-mute md:text-[1.1rem]">
              Every AI course teaches how to talk to a model. Enterprise AI is
              building the system around it — retrieval architectures,
              evaluation frameworks, data contracts, latency budgets, cost
              governance, safety review, audit trails.
            </p>
            <p className="reveal reveal-d3 mt-6 max-w-[var(--container-prose)] text-[1.05rem] leading-[1.7] text-ink-mute md:text-[1.1rem]">
              The distance between a working demo and a production system is
              architecture.{" "}
              <span className="text-ink">
                That distance is what this academy trains.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
