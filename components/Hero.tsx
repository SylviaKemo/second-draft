import { ButtonLink } from "./Button";

const diff = [
  { type: "del", text: '- const key = "sk_live_XXXX"' },
  { type: "del", text: "- createClient(url, key)" },
  { type: "add", text: "+ const key = process.env.SERVICE_KEY" },
  { type: "add", text: "+ // server only, rotated, RLS on" },
  { type: "add", text: "+ createClient(url, key)" },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="container-page flex flex-wrap items-center gap-14 pt-12 pb-24 sm:pt-[72px]"
    >
      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
        <p className="animate-rise origin-left -rotate-2 font-hand text-[28px] leading-none text-rust">
          for apps built with AI ↓
        </p>
        <h1 className="animate-rise [--delay:80ms] font-display text-[clamp(44px,6.6vw,92px)] leading-[0.98] font-extrabold tracking-[-0.04em]">
          Lovable wrote your{" "}
          <span className="whitespace-nowrap text-muted line-through decoration-coral decoration-[6px]">
            first
          </span>{" "}
          draft. We write the one that <span className="rounded-lg bg-lime px-2.5">ships.</span>
        </h1>
        <p className="animate-rise [--delay:180ms] max-w-[560px] text-[19px] leading-[1.55]">
          Your Lovable, Bolt, Replit or Cursor app works in the demo, then wobbles with real
          users. We fix the security holes, messy code and fragile deployments so you can launch
          for real.
        </p>
        <div className="animate-rise [--delay:260ms] flex flex-wrap items-center gap-3.5">
          <ButtonLink href="#book" size="lg">
            Book a free 20-min call
          </ButtonLink>
          <ButtonLink href="#pricing" size="lg" variant="outline">
            See prices
          </ButtonLink>
        </div>
        <ul className="animate-rise [--delay:340ms] flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-muted">
          <li>✓ Fixed prices</li>
          <li>✓ You own the code</li>
          <li>✓ Audit in 5 working days</li>
        </ul>
      </div>

      <figure
        aria-label="Example of a fix we'd make, shown as a code change"
        className="animate-rise [--delay:300ms] relative m-0 mb-10 w-full max-w-[500px] min-w-0 flex-[1_1_300px] sm:flex-[1_1_400px]"
      >
        <div className="rotate-[1.5deg] overflow-hidden rounded-[18px] bg-ink text-cream shadow-lime">
          <div className="flex items-center justify-between border-b border-code-line px-5 py-3.5 font-mono text-[13px]">
            <span>src/lib/supabase.ts</span>
            <span className="text-lime">draft 2</span>
          </div>
          <div className="flex flex-col p-5 font-mono text-xs leading-[26px] sm:text-sm">
            {diff.map((line, i) => (
              <span
                key={i}
                className={`rounded px-2 break-all ${
                  line.type === "del" ? "bg-diff-del" : "bg-diff-add"
                } ${i === 2 ? "mt-1.5" : ""}`}
              >
                {line.text}
              </span>
            ))}
            <span className="mt-3.5 text-faint">✓ 3 critical issues fixed · ready to launch</span>
          </div>
        </div>
        <figcaption className="absolute -bottom-11 left-0 -rotate-[4deg] font-hand text-[26px] text-rust sm:-left-6">
          example: keys out of the browser
        </figcaption>
      </figure>
    </section>
  );
}
