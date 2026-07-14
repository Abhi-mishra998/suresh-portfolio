import { Container } from "@/components/layout/container";

/* Year is baked at build. Rebuild yearly OR fine — the number never lies about
   the deployment vintage. If wrong feels wrong, swap for a client component. */
const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-line py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="flex items-baseline gap-2.5">
              <span className="font-serif text-3xl italic leading-none tracking-tight text-ink">
                ByteHubble
              </span>
              <span aria-hidden className="text-accent/70">
                ✦
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-mute">
                AI Academy
              </span>
            </p>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ink-mute">
              Training engineers, students and professionals into roles at
              global product companies, MNCs and top startups — through
              enterprise-grade AI &amp; data architecture.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-dim">
              Contact
            </p>
            <ul className="mt-5 space-y-2 text-[0.95rem]">
              <li>
                <a
                  href="mailto:suresh.avula@bytehubble.ai"
                  className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
                >
                  suresh.avula@bytehubble.ai
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 md:text-right">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-dim">
              Founded by
            </p>
            <p className="mt-5 text-[0.95rem] text-ink">Suresh Avula</p>
            <p className="mt-1 text-[0.9rem] text-ink-mute">
              Enterprise AI Educator
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-3 border-t border-line pt-6 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-dim md:flex-row md:justify-between">
          <span>© {YEAR} ByteHubble AI Academy</span>
          <span>Made with care</span>
        </div>
      </Container>
    </footer>
  );
}
