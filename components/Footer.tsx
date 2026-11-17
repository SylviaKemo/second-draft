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
              className="inline-flex items-center gap-2 text-sm text-cream no-underline hover:text-lime"
            >
              {velltechCredit}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm">{velltechCredit}</span>
          )}
        </div>
        <p className="text-sm leading-[22px]">
          VellTech Group Limited, trading as Second Draft ·{" "}
          <a href={`mailto:${site.email}`} className="text-cream hover:text-lime">
            {site.email}
          </a>{" "}
          · © 2026
        </p>
      </div>
    </footer>
  );
}
