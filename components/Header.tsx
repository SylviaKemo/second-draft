import { ButtonLink } from "./Button";
import { Logo } from "./Logo";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="container-page py-6">
      <nav aria-label="Main" className="flex flex-wrap items-center justify-between gap-4">
        <a href="#top" aria-label="Second Draft home" className="text-ink no-underline">
          <Logo className="text-[26px]" />
        </a>
        <div className="flex flex-wrap items-center gap-5 text-[15px] font-medium sm:gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden no-underline md:inline">
              {l.label}
            </a>
          ))}
          <ButtonLink href="#book" size="sm">
            Book a free call
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
