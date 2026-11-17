import { ButtonLink } from "./Button";
import { Logo } from "./Logo";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header id="top" className="container-page py-4 sm:py-6">
      <nav
        aria-label="Main"
        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1"
      >
        <a
          href="/#top"
          aria-label="Second Draft home"
          className="inline-flex min-h-11 items-center text-ink no-underline"
        >
          <Logo className="text-[26px]" />
        </a>

        {/* Phones: links sit on their own row under the logo. md+: inline before the button. */}
        <div className="order-last -ml-3 flex w-full items-center text-[15px] font-medium md:order-none md:ml-auto md:w-auto md:gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex min-h-11 items-center px-3 no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        <ButtonLink href="/#book" size="sm">
          Book a free call
        </ButtonLink>
      </nav>
    </header>
  );
}
