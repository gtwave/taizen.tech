import RevealFade from "./RevealFade";

export type SimpleCard = {
  icon: string;
  title: string;
  text: string;
  color?: string;
  href?: string;
  extra?: string;
};

export default function SimpleCardGrid({
  tagline,
  heading,
  text,
  cards,
  dark = false,
  cols = 2,
}: {
  tagline: string;
  heading: string;
  text?: string;
  cards: SimpleCard[];
  dark?: boolean;
  cols?: 2 | 3;
}) {
  return (
    <section
      className="py-24"
      style={dark ? { background: "var(--preto)", color: "#fff" } : undefined}
    >
      <div className="container">
        <RevealFade y={16} blur={4}>
          <p
            className="text-sm uppercase tracking-wide mb-2 font-semibold"
            style={{ color: "var(--brand-laranja)" }}
          >
            {tagline}
          </p>
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            {heading}
          </h2>
          {text && <p className="opacity-70 max-w-xl mb-12">{text}</p>}
        </RevealFade>

        <div
          className={`grid gap-6 ${cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}
        >
          {cards.map((c, i) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <RevealFade key={c.title} delay={i * 0.08} y={20} blur={4} scale={0.97}>
                <Wrapper
                  {...(c.href ? { href: c.href } : {})}
                  className="block h-full rounded-xl p-7"
                  style={{
                    background: dark
                      ? "rgba(255,255,255,0.04)"
                      : "var(--theme-primary)",
                    border: dark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid var(--theme-secondary)15",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5"
                    style={{ backgroundColor: `${c.color ?? "#ffb800"}28` }}
                  >
                    {c.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">{c.text}</p>
                  {c.extra && (
                    <p
                      className="text-sm font-bold mt-4"
                      style={{ color: "var(--brand-verde)" }}
                    >
                      {c.extra}
                    </p>
                  )}
                </Wrapper>
              </RevealFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
