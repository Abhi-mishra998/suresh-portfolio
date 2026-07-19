import { Container } from "@/components/layout/container";

const DESTINATIONS = [
  "American Express",
  "HSBC",
  "DBS",
  "Citibank",
  "JP Morgan",
  "AWS",
  "Google",
  "Apple",
  "Salesforce",
  "Yugabyte",
  "EDB",
  "FourKites",
  "Innovaccer",
  "IBM",
  "TCS",
  "Mercedes-Benz",
  "Honda",
  "Walmart",
  "HP",
  "Deloitte",
  "Accenture",
  "SoftwareOne",
  "DXC",
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
          Where our engineers land —{" "}
          <span className="text-accent">{DESTINATIONS.length} enterprises</span>{" "}
          the world runs on
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
        <ul className="flex w-max min-w-full items-center gap-14 motion-safe:animate-[marquee_65s_linear_infinite] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8 md:gap-16">
          {items.map((name, i) => (
            <li
              key={i}
              className="flex items-center gap-14 whitespace-nowrap font-serif text-[1.4rem] italic text-ink-mute transition-colors hover:text-accent md:text-[1.7rem] md:gap-16"
            >
              {name}
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
