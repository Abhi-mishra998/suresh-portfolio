import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container as="section" className="py-24 md:py-32">
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-mute">
        404
      </p>
      <h1 className="mt-6 max-w-[20ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
        This page isn&rsquo;t here.
      </h1>
      <p className="mt-6 max-w-[var(--container-prose)] text-ink-mute">
        The page you&rsquo;re looking for may have moved, or never existed.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block underline decoration-ink-mute underline-offset-4 transition-colors hover:decoration-ink"
      >
        Back to home
      </Link>
    </Container>
  );
}
