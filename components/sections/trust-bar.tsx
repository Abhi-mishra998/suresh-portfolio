import { Container } from "@/components/layout/container";

const COMPANIES = [
  "Impact Analytics",
  "Innovaccer",
  "S&P Global",
  "FourKites",
  "Ernst & Young",
  "Hewlett-Packard",
  "Citi Group",
  "IBM",
  "Wipro",
];

export function TrustBar() {
  const items = [...COMPANIES, ...COMPANIES];
  return (
    <section
      aria-label="Suresh's enterprise track record"
      className="marquee-pausable border-b border-line bg-canvas py-10 md:py-14"
    >
      <Container>
        <p className="reveal text-center font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute">
          <span aria-hidden className="text-accent">✦ </span>
          Practiced across{" "}
          <span className="text-accent">{COMPANIES.length} enterprises</span>{" "}
          the world runs on
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
        <ul className="flex w-max min-w-full items-center gap-14 motion-safe:animate-[marquee_55s_linear_infinite] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8">
          {items.map((c, i) => (
            <li
              key={i}
              className="flex items-center gap-14 whitespace-nowrap font-serif text-[1.4rem] italic text-ink-mute transition-colors hover:text-accent md:text-[1.7rem]"
            >
              {c}
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
