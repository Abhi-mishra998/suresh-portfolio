"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const APPLY_OPEN_EVENT = "bh:open-apply";

/* Cohorts live here for now — a static list is the whole "store". When
   Suresh runs cohort 02+, add rows and change the default. */
const COHORTS = [
  {
    id: "cohort-01-eg-ai",
    label: "Cohort 01 · Enterprise-Grade AI Fellowship",
    status: "Applications open",
  },
  {
    id: "cohort-02-eg-data",
    label: "Cohort 02 · Enterprise-Grade Data & Postgres (waitlist)",
    status: "Waitlist",
  },
  {
    id: "corporate",
    label: "Corporate / Team workshop (1–3 days, private)",
    status: "By request",
  },
] as const;

const EXPERIENCE = ["0–2 yrs", "2–5 yrs", "5–10 yrs", "10+ yrs"] as const;
const TARGETS = [
  "FAANG / big tech",
  "Global MNC",
  "Funded product startup",
  "Promotion in current company",
  "Not sure yet",
] as const;

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  cohort: string;
  role: string;
  company: string;
  experience: string;
  target: string;
  reason: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  cohort: COHORTS[0].label,
  role: "",
  company: "",
  experience: "",
  target: "",
  reason: "",
};

const LS_KEY = "bh:apply:last-submission";

export function ApplyDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const closeDialog = useCallback(() => {
    const el = dialogRef.current;
    if (!el || !el.open) return;
    /* Play the CSS exit animation, then actually close. `animationend` may not
       fire (interrupted), so a 240ms fallback timer guarantees close. */
    el.classList.add("is-closing");
    let closed = false;
    const finish = () => {
      if (closed) return;
      closed = true;
      el.classList.remove("is-closing");
      el.close();
    };
    el.addEventListener("animationend", finish, { once: true });
    window.setTimeout(finish, 260);
  }, []);

  useEffect(() => {
    const onOpen = () => {
      const el = dialogRef.current;
      if (!el || el.open) return;
      el.showModal();
    };
    window.addEventListener(APPLY_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(APPLY_OPEN_EVENT, onOpen);
  }, []);

  /* Intercept ESC + backdrop click → run the animated close path instead of
     the browser's instant close. */
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      closeDialog();
    };
    const onClick = (e: MouseEvent) => {
      if (e.target === el) closeDialog();
    };
    el.addEventListener("cancel", onCancel);
    el.addEventListener("click", onClick);
    return () => {
      el.removeEventListener("cancel", onCancel);
      el.removeEventListener("click", onClick);
    };
  }, [closeDialog]);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Something went wrong.");
      }
      /* Local receipt so the applicant can retrieve what they sent if the
         server drops it. Not authoritative — server logs are. */
      try {
        window.localStorage.setItem(
          LS_KEY,
          JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
        );
      } catch {
        /* Private mode, storage disabled — ignore. */
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error.");
    }
  }

  function reset() {
    setForm(EMPTY);
    setStatus("idle");
    setError(null);
  }

  return (
    <dialog
      ref={dialogRef}
      className="apply-dialog"
      aria-labelledby="apply-title"
    >
      <div className="relative mx-auto max-h-[92vh] overflow-y-auto rounded-2xl bg-canvas p-6 shadow-[0_30px_80px_-30px_rgba(20,33,61,0.55)] ring-1 ring-line-strong/70 md:p-8">
        {/* Close */}
        <button
          type="button"
          onClick={closeDialog}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-mute transition-colors hover:bg-line hover:text-ink"
          aria-label="Close application form"
        >
          <span aria-hidden className="text-xl leading-none">
            ×
          </span>
        </button>

        {status === "success" ? (
          <SuccessView onClose={closeDialog} onAgain={reset} name={form.name} />
        ) : (
          <>
            <header>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-accent">
                ✦ Apply · Cohort 01
              </p>
              <h2
                id="apply-title"
                className="mt-3 font-serif text-[clamp(1.9rem,4vw,2.6rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink"
              >
                Enterprise-Grade{" "}
                <span className="italic text-accent">AI Fellowship</span>
              </h2>
              <p className="mt-3 text-[0.98rem] leading-[1.55] text-ink-mute">
                Suresh personally reviews every application. He&rsquo;ll come
                back within{" "}
                <span className="text-ink">3 business days</span> with next
                steps.
              </p>
            </header>

            <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
              <Row>
                <Field
                  label="Full name"
                  required
                  value={form.name}
                  onChange={(v) => set("name", v)}
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(v) => set("email", v)}
                  autoComplete="email"
                />
              </Row>

              <Row>
                <Field
                  label="WhatsApp / Phone"
                  value={form.whatsapp}
                  onChange={(v) => set("whatsapp", v)}
                  autoComplete="tel"
                  placeholder="+91 …"
                />
                <Select
                  label="Cohort"
                  value={form.cohort}
                  onChange={(v) => set("cohort", v)}
                >
                  {COHORTS.map((c) => (
                    <option key={c.id} value={c.label}>
                      {c.label} · {c.status}
                    </option>
                  ))}
                </Select>
              </Row>

              <Row>
                <Field
                  label="Current role"
                  value={form.role}
                  onChange={(v) => set("role", v)}
                  placeholder="e.g. Senior Data Engineer"
                />
                <Field
                  label="Current company"
                  value={form.company}
                  onChange={(v) => set("company", v)}
                  autoComplete="organization"
                />
              </Row>

              <Row>
                <Select
                  label="Experience"
                  value={form.experience}
                  onChange={(v) => set("experience", v)}
                >
                  <option value="">Select…</option>
                  {EXPERIENCE.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </Select>
                <Select
                  label="Target destination"
                  value={form.target}
                  onChange={(v) => set("target", v)}
                >
                  <option value="">Select…</option>
                  {TARGETS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </Select>
              </Row>

              <div>
                <label className="block font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-mute">
                  Why now?
                </label>
                <textarea
                  value={form.reason}
                  onChange={(e) => set("reason", e.target.value)}
                  rows={3}
                  maxLength={2000}
                  placeholder="The specific role you're chasing, the wall you keep hitting, what would move the needle."
                  className="mt-1.5 w-full resize-y rounded-xl border border-line bg-surface px-3.5 py-2.5 text-[0.98rem] text-ink placeholder:text-ink-dim focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>

              {error ? (
                <p
                  role="alert"
                  className="rounded-lg border border-error/40 bg-error/5 px-3 py-2 text-[0.9rem] text-error"
                >
                  {error}
                </p>
              ) : null}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <p className="text-[0.8rem] text-ink-dim">
                  Your details go to Suresh only. No spam, ever.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={closeDialog}
                    className="inline-flex h-11 items-center rounded-full px-4 text-[0.9rem] font-medium text-ink-mute transition-colors hover:text-ink"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-[0.9rem] font-medium text-canvas transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Spinner /> Sending…
                      </>
                    ) : (
                      <>
                        Submit application
                        <span aria-hidden>→</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-mute">
        {label} {required ? <span className="text-accent">*</span> : null}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-[0.98rem] text-ink placeholder:text-ink-dim focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-mute">
        {label}
      </span>
      <div className="relative mt-1.5">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-line bg-surface px-3.5 py-2.5 pr-9 text-[0.98rem] text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          {children}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-mute"
        >
          ▾
        </span>
      </div>
    </label>
  );
}

function Spinner() {
  return (
    <span
      aria-hidden
      className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-canvas/50 border-t-canvas"
    />
  );
}

function SuccessView({
  onClose,
  onAgain,
  name,
}: {
  onClose: () => void;
  onAgain: () => void;
  name: string;
}) {
  return (
    <div className="py-6 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft/40 ring-1 ring-accent/40">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            className="check-draw"
            d="M4 12.5l4.5 4.5L20 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--color-accent)" }}
          />
        </svg>
      </div>
      <h2 className="mt-6 font-serif text-[clamp(1.8rem,4vw,2.4rem)] font-normal leading-[1.1] tracking-[-0.02em] text-ink">
        Application received{name ? <>, <span className="italic text-accent">{name.split(" ")[0]}</span></> : null}.
      </h2>
      <p className="mx-auto mt-4 max-w-md text-[1rem] leading-[1.55] text-ink-mute">
        Suresh will personally review it and get back within{" "}
        <span className="text-ink">3 business days</span> with next steps —
        curriculum details, format, cohort dates and pricing.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-[0.9rem] font-medium text-canvas transition-colors hover:bg-accent"
        >
          Done
        </button>
        <button
          type="button"
          onClick={onAgain}
          className="inline-flex h-11 items-center rounded-full px-4 text-[0.9rem] font-medium text-ink-mute transition-colors hover:text-ink"
        >
          Submit another
        </button>
      </div>
    </div>
  );
}

/* Small helper button consumers can drop anywhere — clicks dispatch the
   custom event and let the mounted <ApplyDialog /> open itself. Rendering
   the dialog next to the button would multiply dialogs across the page. */
export function ApplyButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(APPLY_OPEN_EVENT))}
      className={className}
    >
      {children}
    </button>
  );
}
