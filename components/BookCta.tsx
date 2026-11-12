import { reveal } from "@/lib/reveal";
import { site } from "@/lib/site";
import { ButtonLink } from "./Button";

export function BookCta() {
  return (
    <section id="book" className="border-t-2 border-ink bg-lime">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-8 px-4 py-24 sm:px-8 sm:py-32">
        <span {...reveal(0)} className="-rotate-2 font-hand text-[30px]">
          ok, deep breath…
        </span>
        <h2 {...reveal(1, 100)} className="max-w-[1050px] font-display text-[clamp(52px,7.6vw,108px)] leading-[0.95] font-extrabold tracking-[-0.045em]">
          Ready for your second draft?
        </h2>
        <p {...reveal(2, 100)} className="max-w-[580px] text-xl leading-normal">
          20 minutes, free, no pitch. Tell us what you built and we&apos;ll tell you what it needs.
        </p>
        <ButtonLink
          {...reveal(3, 100)}
          href={site.bookingUrl}
          size="xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a free 20-min call
        </ButtonLink>
      </div>
    </section>
  );
}
