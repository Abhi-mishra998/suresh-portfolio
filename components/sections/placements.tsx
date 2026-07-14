import { Container } from "@/components/layout/container";

/* Each entry is a brand our alumni have joined. Logo files are bundled in
   /public/logos and served same-origin (CSP-friendly, cacheable, no CDN
   coupling). SVGs are rendered as monochrome silhouettes via CSS mask so
   the whole marquee reads as one editorial navy tone — brand palettes get
   normalised without touching the source SVGs. */
const DESTINATIONS = [
  { name: "Google", file: "google" },
  { name: "Microsoft", file: "microsoft" },
  { name: "Amazon Web Services", file: "amazon" },
  { name: "Meta", file: "meta" },
  { name: "Netflix", file: "netflix" },
  { name: "Nvidia", file: "nvidia" },
  { name: "Databricks", file: "databricks" },
  { name: "Snowflake", file: "snowflake" },
  { name: "Stripe", file: "stripe" },
  { name: "Uber", file: "uber" },
  { name: "Adobe", file: "adobe" },
  { name: "Salesforce", file: "salesforce" },
  { name: "LinkedIn", file: "linkedin" },
  { name: "PayPal", file: "paypal" },
  { name: "Atlassian", file: "atlassian" },
  { name: "OpenAI", file: "openai" },
  { name: "GitHub", file: "github" },
  { name: "Shopify", file: "shopify" },
  { name: "Cloudflare", file: "cloudflare" },
  { name: "Palantir", file: "palantir" },
];

export function Placements() {
  const items = [...DESTINATIONS, ...DESTINATIONS];
  return (
    <section
      aria-label="Where our engineers land"
      className="marquee-pausable border-y border-line bg-surface-raised/70 py-12 md:py-16"
    >
      <Container>
        <p className="reveal text-center font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute">
          <span aria-hidden className="text-accent">✦ </span>
          Where our engineers land — product cos, MNCs &amp; top startups
        </p>
      </Container>
      <div className="relative mt-10 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-surface-raised/95 to-transparent sm:w-24 md:w-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-surface-raised/95 to-transparent sm:w-24 md:w-40"
        />
        <ul className="flex w-max min-w-full items-center gap-14 motion-safe:animate-[marquee_65s_linear_infinite] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8 md:gap-20">
          {items.map((d, i) => (
            <li key={i} className="group shrink-0">
              <span
                role="img"
                aria-label={`${d.name} logo`}
                className="logo-mono h-8 w-28 text-ink-mute/80 group-hover:text-accent group-hover:-translate-y-0.5 md:h-10 md:w-32"
                style={{
                  maskImage: `url(/logos/${d.file}.svg)`,
                  WebkitMaskImage: `url(/logos/${d.file}.svg)`,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
