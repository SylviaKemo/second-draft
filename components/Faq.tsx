import { reveal } from "@/lib/reveal";

const faqs = [
  {
    q: "Do you rewrite everything?",
    a: "No. We keep what works and fix what doesn't. A full rewrite is rarely the right call.",
  },
  {
    q: "Which tools do you support?",
    a: "Lovable, Bolt, Replit, Cursor, v0, and most React, Node or Python stacks on Supabase, Firebase or Vercel.",
  },
  {
    q: "Will I own the code?",
    a: "Yes. Everything is handed over in your name once the work is paid for.",
  },
  {
    q: "How do I pay?",
    a: "Audits are paid upfront. Sprints and builds are 50% to start and 50% at handover. USD for clients abroad, KES in Kenya.",
  },
  {
    q: "Is my data safe with you?",
    a: "We use read-only access wherever we can, sign a data processing agreement, never copy your users' data to our machines, and delete everything when the job ends.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-4 border-t-2 border-ink bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-14 px-4 py-20 sm:px-8 sm:py-28">
        <h2 {...reveal()} className="heading-section flex-[1_1_280px]">
          Questions
        </h2>
        <div
          {...reveal(1, 120)}
          className="flex min-w-0 flex-[2_1_560px] flex-col border-b-2 border-ink"
        >
          {faqs.map((f) => (
            <details key={f.q} className="group border-t-2 border-ink py-[22px]">
              <summary className="flex justify-between gap-4 font-display text-[22px] leading-7 font-extrabold">
                {f.q}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3.5 text-base leading-[26px] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
