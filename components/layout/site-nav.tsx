import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ApplyButton } from "@/components/apply/apply-dialog";

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
            className="group inline-flex items-baseline gap-2.5 rounded-sm"
          >
            <span className="font-serif text-[1.6rem] italic leading-none tracking-tight text-ink transition-colors group-hover:text-accent">
              ByteHubble
            </span>
            <span aria-hidden className="text-accent/70">
              ✦
            </span>
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-mute">
              AI Academy
            </span>
          </Link>

          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-mute md:inline-flex">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              Next cohort · Applications open
            </span>
            <ApplyButton className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-[0.85rem] font-medium text-canvas transition-colors hover:bg-accent">
              <span className="hidden sm:inline">Apply to cohort</span>
              <span className="sm:hidden">Apply</span>
            </ApplyButton>
          </div>
        </nav>
      </Container>
    </header>
  );
}
