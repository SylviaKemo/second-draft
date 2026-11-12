import { reveal } from "@/lib/reveal";

type Severity = "critical" | "high" | "medium";

const badge: Record<Severity, string> = {
  critical: "bg-rust text-white",
  high: "bg-ink text-cream",
  medium: "bg-lime text-ink",
};

const findings: { severity: Severity; text: string }[] = [
  { severity: "critical", text: "Anyone can read every user's records. Row-level security is off." },
  { severity: "critical", text: "Secret API key shipped to the browser." },
  { severity: "high", text: "No backups. One bad deploy could lose everything." },
  { severity: "medium", text: "Pages load slowly once you pass a few hundred users." },
];

export function AuditSample() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-14 px-4 py-20 sm:px-8 sm:py-28">
        <div {...reveal()} className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
          <h2 className="font-display text-[clamp(40px,5vw,60px)] leading-none font-extrabold tracking-[-0.035em]">
            What an audit <span className="text-lime">looks like</span>
          </h2>
          <p className="text-lg leading-7">
            Plain English, ranked by how much it could hurt you, with the exact file and the fix.
            No jargon walls.
          </p>
          <span className="-rotate-2 font-hand text-[26px] text-lime">
            ← sample, not a real client
          </span>
        </div>
        <div
          role="img"
          aria-label="Sample audit report showing ranked findings"
          {...reveal(1, 120)}
          className="flex min-w-0 flex-[1_1_460px] flex-col gap-3 rounded-[18px] bg-cream p-5 text-ink sm:p-7"
        >
          <div className="flex justify-between gap-3 font-mono text-[13px] text-muted">
            <span>rescue-audit.pdf</span>
            <span>page 2 of 9</span>
          </div>
          {findings.map((f, i) => (
            <div
              key={i}
              {...reveal(i + 2, 120)}
              className={`flex items-center gap-3 rounded-xl border-2 p-3.5 ${
                f.severity === "medium" ? "border-dashed border-muted" : "border-ink"
              }`}
            >
              <span
                className={`rounded-md px-2 py-1 text-xs font-semibold tracking-[0.06em] uppercase ${badge[f.severity]}`}
              >
                {f.severity}
              </span>
              <span className="flex-1 text-[15px] leading-[22px]">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
