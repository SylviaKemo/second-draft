import type { ReactNode } from "react";

const steps: { title: ReactNode; text: string }[] = [
  {
    title: "Read it",
    text: "A free 20-minute call. You tell us what you built and where it hurts. We tell you honestly if we can help.",
  },
  {
    title: (
      <span className="underline decoration-coral decoration-4 underline-offset-[6px]">
        Mark it up
      </span>
    ),
    text: "The Rescue Audit: in 5 working days, a plain-English report of every issue, ranked, with a fixed price to fix them.",
  },
  {
    title: "Rewrite it",
    text: "A 3-week Production Sprint: we fix what matters, add tests, monitoring, backups and proper deployment.",
  },
  {
    title: <span className="rounded bg-lime px-1.5">Ship it</span>,
    text: "Clean code, docs and a stable deployment, all in your name. Plus 14 days of fix cover.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-4 border-y-2 border-ink bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14 px-4 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="heading-section">How it works</h2>
          <span className="-rotate-2 font-hand text-[26px] text-rust">
            like editing, but for code
          </span>
        </div>
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-7">
          {steps.map((s, i) => (
            <li key={i} className="flex flex-col gap-3.5">
              <span className="font-display text-[64px] leading-none font-extrabold">{i + 1}</span>
              <h3 className="font-display text-[26px] leading-[30px] font-extrabold">{s.title}</h3>
              <p className="text-base leading-[26px] text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
