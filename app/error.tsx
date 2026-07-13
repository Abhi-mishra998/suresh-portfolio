"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/container";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // ponytail: console.error is the whole error reporter for now.
    // Wire Sentry / Vercel Log Drains when there's real traffic to monitor.
    console.error(error);
  }, [error]);

  return (
    <Container as="section" className="py-24 md:py-32">
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-mute">
        Error
      </p>
      <h1 className="mt-6 max-w-[20ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
        Something went wrong.
      </h1>
      <p className="mt-6 max-w-[var(--container-prose)] text-ink-mute">
        {error.digest
          ? `Something failed loading this page. Reference: ${error.digest}.`
          : "The page failed to load. Please try again."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 underline decoration-ink-mute underline-offset-4 transition-colors hover:decoration-ink"
      >
        Try again
      </button>
    </Container>
  );
}
