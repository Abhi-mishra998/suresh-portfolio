import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { SkipLink } from "@/components/layout/skip-link";
import { ApplyDialog } from "@/components/apply/apply-dialog";
import "./globals.css";

const SITE_URL = "https://bytehubble.ai";
const SITE_NAME = "ByteHubble AI Academy";
const SITE_DESCRIPTION =
  "ByteHubble AI Academy trains software engineers to design, deploy, and operate production AI systems in the enterprise. Founded by Suresh Avula, an enterprise architect specializing in data, AI, cloud, and PostgreSQL.";
const SITE_TAGLINE = "Become an AI Engineer. Not merely an AI user.";

/* Inter — variable, industry-standard sans for body copy. Fraunces — variable
   editorial serif with an opsz axis (light at small sizes, dramatic at display);
   the SOFT axis lets the italic feel warm instead of stiff. Both are Google
   Fonts, self-hosted by next/font at build. */
const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-sans-var",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
  variable: "--font-serif-var",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono-var",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Become an AI Engineer`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Suresh Avula" }],
  creator: "Suresh Avula",
  publisher: SITE_NAME,
  keywords: [
    "AI engineering",
    "enterprise AI",
    "AI architecture",
    "production AI systems",
    "PostgreSQL",
    "pgvector",
    "AI training",
    "AI education",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: SITE_NAME,
    description: SITE_TAGLINE,
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#fbf7ef",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/* JSON-LD graph: three linked entities (WebSite → EducationalOrganization → Person)
   cross-referenced by @id so AI-search extractors read them as related entities
   rather than three disconnected blobs. */
const linkedDataGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#org`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      founder: { "@id": `${SITE_URL}/#suresh` },
      knowsAbout: [
        "Artificial intelligence engineering",
        "Enterprise AI systems",
        "Retrieval-augmented generation",
        "PostgreSQL",
        "pgvector",
        "Cloud architecture",
        "Data architecture",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#suresh`,
      name: "Suresh Avula",
      jobTitle: "Enterprise AI Educator",
      description:
        "Enterprise Architect with deep expertise in data, AI, cloud, and PostgreSQL. Designs production AI systems at scale.",
      knowsAbout: [
        "Enterprise architecture",
        "Data architecture",
        "Artificial intelligence",
        "Cloud architecture",
        "PostgreSQL",
        "Retrieval-augmented generation",
        "FinOps",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <SkipLink />
        <SiteNav />
        <main id="content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        {/* One dialog for the whole app — triggers dispatch a custom event. */}
        <ApplyDialog />
        {/* Vercel Analytics + Speed Insights: cookieless, first-party, no consent
            banner needed. Auto-tracks page views + real-user Web Vitals. */}
        <Analytics />
        <SpeedInsights />
        {/* JSON-LD: payload is a build-time constant. Escape "<" defensively so the
            script parses even if a future value ever contains an angle bracket. */}
        <script type="application/ld+json">
          {JSON.stringify(linkedDataGraph).replace(/</g, "\\u003c")}
        </script>
      </body>
    </html>
  );
}
