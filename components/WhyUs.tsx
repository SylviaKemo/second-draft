const reasons = [
  {
    title: "We keep what works",
    text: "No pointless rewrite. Your app, your stack, just production-grade.",
  },
  {
    title: "Senior engineers only",
    text: "Production experience with AI products and web apps in Kenya, the UK, Sweden and the US.",
  },
  {
    title: "Fixed scope, fixed price",
    text: "You know the cost and the date before we start. No hourly meter.",
  },
  {
    title: "It's all yours",
    text: "Code, accounts and docs in your name at handover. No lock-in.",
  },
];

export function WhyUs() {
  return (
    <section className="container-page flex flex-col gap-12 py-20 sm:py-28">
      <h2 className="heading-section">Why founders pick us</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="flex flex-col gap-2.5 border-t-[3px] border-ink pt-5">
            <h3 className="font-display text-2xl font-extrabold">{r.title}</h3>
            <p className="text-base leading-[26px] text-muted">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
