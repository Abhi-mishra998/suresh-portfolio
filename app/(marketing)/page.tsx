import { Container } from "@/components/layout/container";
import { HeroSpotlight } from "@/components/effects/hero-spotlight";
import { ParallaxLayer } from "@/components/effects/parallax-layer";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { TrustBar } from "@/components/sections/trust-bar";
import { TheGap } from "@/components/sections/the-gap";
import { Curriculum } from "@/components/sections/curriculum";
import { Audience } from "@/components/sections/audience";
import { Founder } from "@/components/sections/founder";
import { SignatureWork } from "@/components/sections/signature-work";
import { Outcomes } from "@/components/sections/outcomes";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

const WAITLIST_HREF =
  "mailto:suresh.avula@bytehubble.ai?subject=Waitlist%20%E2%80%93%20ByteHubble%20AI%20Academy&body=Please%20add%20me%20to%20the%20founding%20cohort%20waitlist.";

/* Inline SVG turbulence noise — pure white pixels with alpha, blended over
   the dark canvas for a subtle film-grain texture. No external asset. */
const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' seed='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden pt-20 pb-28 md:pt-32 md:pb-36"
        aria-labelledby="hero-title"
      >
        <ParallaxLayer
          speed={0.15}
          className="pointer-events-none absolute inset-0 -z-30"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]"
          />
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.4}
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[720px] opacity-70 [background:radial-gradient(1000px_500px_at_50%_-10%,rgba(255,255,255,0.11),transparent_65%)]"
          />
        </ParallaxLayer>

        <HeroSpotlight />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage: `url("${GRAIN_SVG}")`,
            backgroundSize: "140px 140px",
          }}
        />

        <Container>
          <p className="hero-in flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-mute">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-success" />
            Founding cohort · Forming
          </p>

          <h1
            id="hero-title"
            className="mt-10 max-w-[18ch] text-[clamp(2.6rem,7vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.035em] text-ink"
          >
            <span className="hero-in inline-block [animation-delay:100ms]">
              Become an AI Engineer.
            </span>{" "}
            <span className="hero-in inline-block font-serif italic font-normal text-ink-mute [animation-delay:280ms]">
              Not merely an AI user.
            </span>
          </h1>

          <p className="hero-in mt-8 max-w-[var(--container-prose)] text-[1.15rem] leading-[1.55] text-ink-mute md:text-[1.2rem] [animation-delay:460ms]">
            An enterprise AI academy for engineers. Learn how production AI
            systems are actually designed, deployed, and operated —{" "}
            <span className="text-ink">
              from an architect with 18+ years shipping them at scale.
            </span>
          </p>

          <div className="hero-in mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 [animation-delay:620ms]">
            <a
              href={WAITLIST_HREF}
              className="group relative inline-flex h-12 items-center overflow-hidden rounded-full bg-ink px-6 text-[0.95rem] font-medium text-canvas transition-colors hover:bg-ink-mute"
            >
              <span className="relative z-10">Join the waitlist</span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
              />
            </a>
            <a
              href="#founder"
              className="group inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-ink"
            >
              Meet the founder
              <span
                aria-hidden
                className="translate-y-[-1px] transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
              >
                →
              </span>
            </a>
          </div>

          <ul
            aria-label="What defines the academy"
            className="hero-in mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-dim [animation-delay:780ms]"
          >
            <li>For senior engineers</li>
            <li aria-hidden className="hidden md:inline">
              ·
            </li>
            <li>Enterprise architecture lens</li>
            <li aria-hidden className="hidden md:inline">
              ·
            </li>
            <li>PostgreSQL + AI</li>
          </ul>
        </Container>
      </section>

      <TrustBar />
      <TheGap />
      <Curriculum />
      <TechMarquee />
      <Audience />
      <Founder />
      <SignatureWork />
      <Outcomes />
      <Faq />
      <FinalCta />
    </>
  );
}
