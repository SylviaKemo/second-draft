"use client";

import { useEffect, useState } from "react";
import { reveal } from "@/lib/reveal";
import { ButtonLink } from "./Button";

type Currency = "USD" | "KES";
type Amount = { now: number; was: number };

type Plan = {
  eyebrow: string;
  name: string;
  prices: Record<Currency, Amount>;
  from?: boolean;
  description: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    eyebrow: "Start here",
    name: "Rescue Audit",
    prices: { USD: { now: 600, was: 900 }, KES: { now: 40_000, was: 60_000 } },
    description:
      "5 working days. Security, code, data and hosting reviewed. A ranked fix list and a fixed quote. Credited in full if you book a sprint within 14 days.",
  },
  {
    eyebrow: "Most founders need this",
    name: "Production Sprint",
    prices: { USD: { now: 2_500, was: 3_500 }, KES: { now: 180_000, was: 250_000 } },
    description:
      "3 weeks. Critical fixes, secrets locked down, staging and production, CI, monitoring and backups. Handover docs and 14 days of fix cover.",
    featured: true,
  },
  {
    eyebrow: "Once you're stable",
    name: "AI Automation Build",
    prices: { USD: { now: 2_000, was: 3_000 }, KES: { now: 150_000, was: 220_000 } },
    from: true,
    description:
      "2–4 weeks. One repetitive workflow (enquiries, documents, reports) automated with AI, on your own accounts, with a human check where it matters.",
  },
];

const STORAGE_KEY = "sd-currency";
const fmt = (n: number) => n.toLocaleString("en-US");
const label = (c: Currency, n: number) => (c === "USD" ? `$${fmt(n)}` : `KES ${fmt(n)}`);

function CurrencySwitch({ value, onChange }: { value: Currency; onChange: (c: Currency) => void }) {
  return (
    <div
      role="group"
      aria-label="Show prices in"
      className="inline-flex self-start rounded-full border-2 border-ink bg-white p-1"
    >
      {(["USD", "KES"] as const).map((c) => (
        <button
          key={c}
          type="button"
          aria-pressed={value === c}
          onClick={() => onChange(c)}
          className={`min-h-10 cursor-pointer rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust ${
            value === c ? "bg-ink text-cream" : "text-ink hover:bg-lime"
          }`}
        >
          {c === "USD" ? "US $" : "KES"}
        </button>
      ))}
    </div>
  );
}

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD");

  // Default: the visitor's last choice, else KES for visitors in Kenya's time zone.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (saved === "USD" || saved === "KES") setCurrency(saved);
    else if (Intl.DateTimeFormat().resolvedOptions().timeZone === "Africa/Nairobi") setCurrency("KES");
  }, []);

  const choose = (c: Currency) => {
    setCurrency(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {}
  };

  return (
    <section id="pricing" className="container-page flex scroll-mt-4 flex-col gap-12 py-20 sm:py-28">
      <div {...reveal()} className="flex max-w-[720px] flex-col gap-4">
        <h2 className="heading-section">Fixed prices. No surprises.</h2>
        <p className="text-lg leading-7 text-muted">
          Founding-client prices for our first three clients, in exchange for a testimonial and a
          short case study. Pay in US dollars or Kenya shillings.
        </p>
        <CurrencySwitch value={currency} onChange={choose} />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(290px,100%),1fr))] items-stretch gap-6">
        {plans.map((p, i) => {
          const { now, was } = p.prices[currency];
          return (
            <article
              key={p.name}
              {...reveal(i, 120)}
              className={`flex flex-col gap-[18px] rounded-[22px] border-2 border-ink p-8 ${
                p.featured ? "bg-lime shadow-ink" : "bg-white"
              }`}
            >
              <span
                className={`text-[13px] font-semibold tracking-[0.06em] uppercase ${
                  p.featured ? "" : "text-muted"
                }`}
              >
                {p.eyebrow}
              </span>
              <h3 className="font-display text-[30px] leading-[34px] font-extrabold">{p.name}</h3>
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1" aria-live="polite">
                {p.from && <span className="text-base font-semibold">from</span>}
                <span className="font-display text-5xl leading-none font-extrabold whitespace-nowrap">
                  <span className="sr-only">{label(currency, now)}</span>
                  <span aria-hidden="true">
                    {currency === "KES" ? (
                      <>
                        <span className="mr-1.5 text-2xl">KES</span>
                        {fmt(now)}
                      </>
                    ) : (
                      `$${fmt(now)}`
                    )}
                  </span>
                </span>
                <span
                  className={`text-base whitespace-nowrap line-through decoration-2 ${
                    p.featured ? "decoration-ink" : "text-muted decoration-coral"
                  }`}
                >
                  <span className="sr-only">was </span>
                  {label(currency, was)}
                </span>
              </div>
              <p className="text-base leading-[25px]">{p.description}</p>
              <ButtonLink href="#book" className="mt-auto">
                Book a call
              </ButtonLink>
            </article>
          );
        })}
      </div>
    </section>
  );
}
