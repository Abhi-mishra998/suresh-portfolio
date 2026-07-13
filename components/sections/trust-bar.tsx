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
];

export function TrustBar() {
  return (
    <section
      aria-label="Founder track record"
      className="border-y border-line bg-surface/40 py-10 md:py-14"
    >
      <Container>
        <p className="reveal text-center font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-dim">
          Practiced across enterprise data &amp; AI at
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {COMPANIES.map((c, i) => (
            <li
              key={c}
              className={`reveal reveal-d${(i % 6) + 1} font-serif text-lg italic text-ink-mute md:text-xl`}
            >
              {c}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
