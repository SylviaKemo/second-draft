const problems = [
  {
    quote: "“it worked yesterday”",
    text: "It works on your laptop but falls over in production.",
    rotate: "-rotate-1",
  },
  {
    quote: "“is our data… safe?”",
    text: "You're not sure who can see your users' data.",
    rotate: "rotate-1",
    highlight: true,
  },
  {
    quote: "“fix one, break two”",
    text: "Every new feature breaks two old ones.",
    rotate: "-rotate-[0.5deg]",
  },
  {
    quote: "“the AI keeps looping”",
    text: "Your AI tool goes in circles and you can't read the code it wrote.",
    rotate: "rotate-[1.2deg]",
  },
];

export function Problems() {
  return (
    <section className="container-page flex flex-col gap-12 py-20 sm:py-28">
      <h2 className="heading-section max-w-[760px]">Sound familiar?</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {problems.map((p) => (
          <div
            key={p.quote}
            className={`flex flex-col gap-3.5 rounded-[18px] border-2 border-ink p-7 ${p.rotate} ${
              p.highlight ? "bg-lime" : "bg-white"
            }`}
          >
            <span className={`font-hand text-2xl ${p.highlight ? "text-ink" : "text-rust"}`}>
              {p.quote}
            </span>
            <p className="text-lg leading-[27px] font-medium">{p.text}</p>
          </div>
        ))}
      </div>
      <p className="max-w-[680px] text-xl leading-normal">
        That&apos;s normal. AI tools are brilliant at first drafts. Getting to something real
        users can rely on takes an engineer&apos;s{" "}
        <span className="bg-lime px-1">second pass</span>. That&apos;s us.
      </p>
    </section>
  );
}
