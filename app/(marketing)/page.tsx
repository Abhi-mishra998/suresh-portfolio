import { Container } from "@/components/layout/container";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { TrustBar } from "@/components/sections/trust-bar";
import { Placements } from "@/components/sections/placements";
import { TheGap } from "@/components/sections/the-gap";
import { Curriculum } from "@/components/sections/curriculum";
import { Audience } from "@/components/sections/audience";
import { Founder } from "@/components/sections/founder";
import { SignatureWork } from "@/components/sections/signature-work";
import { Testimonials } from "@/components/sections/testimonials";
import { Outcomes } from "@/components/sections/outcomes";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { ApplyButton } from "@/components/apply/apply-dialog";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32"
        aria-labelledby="hero-title"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-6%] -z-10 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(232,206,125,0.55), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-[-8%] -z-10 h-[440px] w-[440px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(232,206,125,0.45), transparent 70%)",
          }}
        />

        <Container>
          <p className="hero-in flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-mute">
            <span
              aria-hidden
              className="relative flex h-2 w-2 items-center justify-center"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Next cohort · Applications open
          </p>

          <h1
            id="hero-title"
            className="mt-8 max-w-[22ch] font-serif text-[clamp(2.9rem,7.8vw,6rem)] font-normal leading-[1] tracking-[-0.035em] text-ink"
          >
            <span className="hero-in inline-block [animation-delay:100ms]">
              Land your next role at
            </span>{" "}
            <span className="hero-in inline-block italic text-accent [animation-delay:280ms]">
              FAANG, top MNCs &amp; product startups.
            </span>
          </h1>

          <p className="hero-in mt-8 max-w-[46rem] text-[1.15rem] leading-[1.6] text-ink-mute md:text-[1.2rem] [animation-delay:460ms]">
            <span className="text-ink">Trained by Suresh Babu Avula</span> —
            enterprise architect who has designed petabyte-scale data & AI
            systems for the world&rsquo;s largest companies and saved{" "}
            <span className="text-ink">$40M+ in cloud cost</span> for global
            enterprises. <span className="text-ink">20,000+ engineers</span>{" "}
            trained. One trainer. One bar: enterprise-grade.
          </p>

          <div className="hero-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 [animation-delay:620ms]">
            <ApplyButton className="group relative inline-flex h-12 items-center overflow-hidden rounded-full bg-ink px-6 text-[0.95rem] font-medium text-canvas transition-colors hover:bg-accent">
              <span className="relative z-10">Apply to the cohort</span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
              />
            </ApplyButton>
            <a
              href="#testimonials"
              className="group inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-accent"
            >
              See student outcomes
              <span
                aria-hidden
                className="translate-y-[-1px] transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
              >
                →
              </span>
            </a>
          </div>

          <ul
            aria-label="Signature impact"
            className="hero-in mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line-strong/70 pt-8 md:grid-cols-4 [animation-delay:780ms]"
          >
            {[
              { n: "20,000+", l: "Engineers trained" },
              { n: "$40M+", l: "Enterprise savings" },
              { n: "Petabyte", l: "Scale operated" },
              { n: "18+ yrs", l: "Enterprise architecture" },
            ].map((s) => (
              <li key={s.l} className="group">
                <p className="font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] leading-none text-ink transition-colors group-hover:text-accent">
                  {s.n}
                </p>
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-dim">
                  {s.l}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Placements />
      <TrustBar />
      <TheGap />
      <Curriculum />
      <Testimonials />
      <Founder />
      <SignatureWork />
      <TechMarquee />
      <Audience />
      <Outcomes />
      <Faq />
      <FinalCta />
    </>
  );
}
