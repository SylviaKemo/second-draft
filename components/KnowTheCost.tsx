import { reveal } from "@/lib/reveal";

const facts = [
  { big: "5 days", text: "Audit report in 5 working days" },
  { big: "3 weeks", text: "A fix sprint takes 3 weeks" },
  { big: "Fixed", text: "Price agreed before we start" },
];

export function KnowTheCost() {
  return (
    <section aria-labelledby="know-the-cost" className="bg-ink text-cream">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-4 py-14 sm:px-8 md:flex-row md:items-center md:gap-14">
        <h2
          id="know-the-cost"
          {...reveal()}
          className="font-display text-[clamp(32px,4vw,44px)] leading-none font-extrabold tracking-[-0.03em] md:w-56 md:shrink-0"
        >
          Know the <span className="text-lime">cost</span>
        </h2>
        <ul className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
          {facts.map((f, i) => (
            <li
              key={f.big}
              {...reveal(i + 1, 100)}
              className="flex flex-col gap-1.5 border-t-2 border-code-line pt-4"
            >
              <span className="font-display text-[34px] leading-none font-extrabold text-lime">
                {f.big}
              </span>
              <span className="text-base leading-6">{f.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
