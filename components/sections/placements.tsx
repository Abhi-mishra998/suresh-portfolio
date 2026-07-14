import { Container } from "@/components/layout/container";

const DESTINATIONS = [
  "Google",
  "Amazon",
  "Microsoft",
  "Meta",
  "Netflix",
  "Nvidia",
  "Databricks",
  "Snowflake",
  "Stripe",
  "Uber",
  "Adobe",
  "Salesforce",
  "LinkedIn",
  "PayPal",
  "Atlassian",
  "ServiceNow",
  "Palantir",
  "Cloudflare",
];

/* Same seamless-marquee trick as tech-marquee: items × 2, translateX(-50%). */
export function Placements() {
  const items = [...DESTINATIONS, ...DESTINATIONS];
  return (
    <section
      aria-label="Where our engineers land"
      className="marquee-pausable border-y border-line bg-surface-raised/70 py-10 md:py-14"
    >
      <Container>
        <p className="reveal text-center font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute">
          <span aria-hidden className="text-accent">✦ </span>
          Where our engineers land — product cos, MNCs &amp; top startups
        </p>
      </Container>
      <div className="relative mt-8 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-canvas to-transparent sm:w-24 md:w-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-canvas to-transparent sm:w-24 md:w-40"
        />
        <ul className="flex w-max min-w-full items-center gap-12 motion-safe:animate-[marquee_60s_linear_infinite] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-12 whitespace-nowrap font-serif text-[1.4rem] italic text-ink transition-colors hover:text-accent md:text-[1.7rem]"
            >
              {item}
              <span aria-hidden className="text-accent/60">
                ✦
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
