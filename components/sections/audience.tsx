import { Container } from "@/components/layout/container";

const ROLES = [
  "Senior Backend Engineers",
  "Platform & Cloud Engineers",
  "Data & Database Engineers",
  "PostgreSQL DBAs",
  "SRE & DevOps Engineers",
  "Architects",
  "Engineering Managers",
  "Enterprise Leaders",
];

export function Audience() {
  return (
    <section
      aria-labelledby="audience-title"
      className="border-b border-line py-24 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="reveal font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-mute">
              Who it&rsquo;s for
            </p>
            <h2
              id="audience-title"
              className="reveal mt-4 text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.025em] text-ink"
            >
              For engineers{" "}
              <span className="font-serif italic font-normal text-ink-mute">
                already shipping.
              </span>
            </h2>
            <p className="reveal reveal-d2 mt-6 max-w-md text-[1.05rem] leading-[1.6] text-ink-mute">
              Not for beginners. If you already ship software professionally and
              your team is being asked to &ldquo;add AI,&rdquo; this is the
              missing training.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {ROLES.map((role, i) => (
                <li
                  key={role}
                  className={`reveal reveal-d${(i % 6) + 1} flex items-baseline gap-3 border-b border-line pb-4 text-[1.05rem] text-ink`}
                >
                  <span
                    aria-hidden
                    className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-dim"
                  >
                    →
                  </span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
