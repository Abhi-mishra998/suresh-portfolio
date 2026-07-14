import { NextResponse } from "next/server";

/* Apply endpoint. Accepts a JSON payload with the applicant's details,
   validates the two required fields (name + email), and logs a structured
   line to stdout so Vercel captures it in the deploy's function logs.

   ponytail: log-only until volume warrants persistence. Upgrade path when
   ready: pipe the same payload to Resend (email to Suresh), a Slack webhook,
   a Vercel KV store, or a GitHub Issue via the octokit REST API — swap the
   `console.log` for the chosen sink and keep the response shape. */

type ApplyPayload = {
  name?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  cohort?: unknown;
  role?: unknown;
  company?: unknown;
  experience?: unknown;
  target?: unknown;
  reason?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(v: unknown, max = 500): string {
  return typeof v === "string" ? v.slice(0, max).trim() : "";
}

export async function POST(request: Request) {
  let body: ApplyPayload;
  try {
    body = (await request.json()) as ApplyPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);

  if (!name || !email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Name and a valid email are required." },
      { status: 400 },
    );
  }

  const record = {
    name,
    email,
    whatsapp: str(body.whatsapp, 40),
    cohort: str(body.cohort, 120),
    role: str(body.role, 160),
    company: str(body.company, 160),
    experience: str(body.experience, 40),
    target: str(body.target, 40),
    reason: str(body.reason, 2000),
    submittedAt: new Date().toISOString(),
    userAgent: str(request.headers.get("user-agent") ?? "", 300),
    referer: str(request.headers.get("referer") ?? "", 300),
  };

  console.log("[apply]", JSON.stringify(record));

  return NextResponse.json({ ok: true });
}
