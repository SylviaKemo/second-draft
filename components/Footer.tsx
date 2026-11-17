import { site } from "@/lib/site";
import { Logo } from "./Logo";

const velltechCredit = (
  <>
    <span>a VellTech company</span>
    <span aria-hidden="true" className="size-2 rounded-[2px] bg-velltech" />
  </>
);

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-4 py-10 sm:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <Logo className="text-2xl" />
          {site.velltechUrl ? (
            <a
              href={site.velltechUrl}
              className="inline-flex min-h-11 items-center gap-2 text-sm text-cream no-underline hover:text-lime"
            >
              {velltechCredit}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm">{velltechCredit}</span>
          )}
        </div>
        <p className="flex flex-wrap items-center gap-x-1.5 text-sm leading-[22px]">
          <span>VellTech Group Limited, trading as Second Draft ·</span>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center text-cream hover:text-lime"
          >
            {site.email}
          </a>
          <span>· © 2026</span>
        </p>
      </div>
    </footer>
  );
}
