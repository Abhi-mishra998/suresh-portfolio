import Link from "next/link";
import { Container } from "@/components/layout/container";

const WAITLIST_HREF =
  "mailto:suresh.avula@bytehubble.ai?subject=Waitlist%20%E2%80%93%20ByteHubble%20AI%20Academy&body=Please%20add%20me%20to%20the%20founding%20cohort%20waitlist.";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/90 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-canvas/70">
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between"
        >
          <Link
            href="/"
            aria-label="ByteHubble AI Academy — home"
            className="group inline-flex items-baseline gap-2 rounded-sm"
          >
            <span className="font-serif text-[1.35rem] italic leading-none tracking-tight text-ink transition-colors group-hover:text-ink-mute">
              ByteHubble
            </span>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-mute">
              AI Academy
            </span>
          </Link>

          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-mute md:inline-flex">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-success"
              />
              Founding cohort · Forming
            </span>
            <a
              href={WAITLIST_HREF}
              className="inline-flex h-9 items-center rounded-full border border-line-strong px-4 text-[0.85rem] font-medium text-ink transition-colors hover:bg-ink hover:text-canvas"
            >
              <span className="hidden sm:inline">Join the waitlist</span>
              <span className="sm:hidden">Waitlist</span>
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
