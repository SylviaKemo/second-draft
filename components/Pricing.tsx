import { reveal } from "@/lib/reveal";
import { ButtonLink } from "./Button";

type Plan = {
  eyebrow: string;
  name: string;
  price: string;
  was: string;
  from?: boolean;
  description: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    eyebrow: "Start here",
    name: "Rescue Audit",
    price: "$600",
    was: "$900",
    description:
      "5 working days. Security, code, data and hosting reviewed. A ranked fix list and a fixed quote. Credited in full if you book a sprint within 14 days.",
  },
  {
    eyebrow: "Most founders need this",
    name: "Production Sprint",
    price: "$2,500",
    was: "$3,500",
    description:
      "3 weeks. Critical fixes, secrets locked down, staging and production, CI, monitoring and backups. Handover docs and 14 days of fix cover.",
    featured: true,
  },
  {
    eyebrow: "Once you're stable",
    name: "AI Automation Build",
    price: "$2,000",
    was: "$3,000",
    from: true,
    description:
      "2–4 weeks. One repetitive workflow (enquiries, documents, reports) automated with AI, on your own accounts, with a human check where it matters.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="container-page flex scroll-mt-4 flex-col gap-12 py-20 sm:py-28">
      <div {...reveal()} className="flex max-w-[720px] flex-col gap-4">
        <h2 className="heading-section">Fixed prices. No surprises.</h2>
        <p className="text-lg leading-7 text-muted">
          Founding-client prices for our first three clients, in exchange for a testimonial and a
          short case study. Prices in Kenya shillings on request.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(290px,100%),1fr))] items-stretch gap-6">
        {plans.map((p, i) => (
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
            <div className="flex flex-wrap items-baseline gap-2.5">
              {p.from && <span className="text-base font-semibold">from</span>}
              <span className="font-display text-5xl leading-none font-extrabold">{p.price}</span>
              <span
                className={`text-base line-through decoration-2 ${
                  p.featured ? "decoration-ink" : "text-muted decoration-coral"
                }`}
              >
                <span className="sr-only">was </span>
                {p.was}
              </span>
            </div>
            <p className="text-base leading-[25px]">{p.description}</p>
            <ButtonLink href="#book" className="mt-auto">
              Book a call
            </ButtonLink>
          </article>
        ))}
      </div>
    </section>
  );
}
