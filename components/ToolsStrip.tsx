import { reveal } from "@/lib/reveal";

const tools = ["Lovable", "Bolt", "Replit", "Cursor", "v0", "Supabase", "Firebase"];

export function ToolsStrip() {
  return (
    <section aria-label="Tools we work with" className="bg-ink text-cream">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-9 gap-y-4 px-4 py-7 sm:px-8">
        <span {...reveal(0)} className="font-hand text-[26px] text-lime">
          we fix apps built with
        </span>
        {tools.map((t, i) => (
          <span key={t} {...reveal(i + 1, 60)} className="font-display text-2xl font-semibold">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
