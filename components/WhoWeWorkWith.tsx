import { reveal } from "@/lib/reveal";

const groups = [
  {
    tag: "01",
    title: "Founders who aren't technical",
    text: "You built your app with an AI tool. It works, but you can't read the code, and you're not sure it's safe to put real users on it.",
  },
  {
    tag: "02",
    title: "Startups that grew fast",
    text: "Users arrived before the engineering caught up. Now things break, slow down or cost too much, and you need it steady without stopping work.",
  },
  {
    tag: "03",
    title: "Agencies and freelancers",
    text: "You built an app for a client and need it checked and made safe before it goes live, so you can hand over something you stand behind.",
  },
];

export function WhoWeWorkWith() {
  return (
    <section id="who" className="container-page flex scroll-mt-4 flex-col gap-12 pb-20 sm:pb-28">
      <h2 {...reveal()} className="heading-section">
        Who we work with
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6">
        {groups.map((g, i) => (
          <div
            key={g.title}
            {...reveal(i, 110)}
            className="flex flex-col gap-4 rounded-[18px] border-2 border-ink bg-white p-7"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-lime font-display text-base font-extrabold">
              {g.tag}
            </span>
            <h3 className="font-display text-[24px] leading-[28px] font-extrabold">{g.title}</h3>
            <p className="text-base leading-[26px] text-muted">{g.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
