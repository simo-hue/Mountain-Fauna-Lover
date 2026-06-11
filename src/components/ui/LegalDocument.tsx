export function LegalDocument({
  updated,
  recordLabel,
  sections,
}: {
  updated: string;
  recordLabel: string;
  sections: Array<{ title: string; body: string }>;
}) {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.28fr_0.72fr]">
        <aside>
          <p className="eyebrow">{recordLabel}</p>
          <p className="mt-3 font-mono text-[0.58rem] leading-5 tracking-[0.12em] text-white/30 uppercase">
            {updated}
          </p>
        </aside>
        <div className="space-y-12">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="border-t border-white/12 pt-7"
            >
              <div className="flex gap-5">
                <span className="mt-1 font-mono text-[0.58rem] text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl font-light tracking-tight">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 whitespace-pre-line text-white/50">
                    {section.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
