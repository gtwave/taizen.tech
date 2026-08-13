import RevealFade from "./RevealFade";

export type SimpleCard = {
  // `icon` can be an emoji/text or an image path (public folder) starting with '/'
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
            const isImageHeader = typeof c.icon === "string" && c.icon.startsWith("/");
            return (
              <RevealFade key={c.title} delay={i * 0.08} y={20} blur={4} scale={0.97}>
                <Wrapper
                  {...(c.href ? { href: c.href } : {})}
                  className="block h-full rounded-xl overflow-hidden border shadow-[0_24px_80px_rgba(15,23,42,0.04)]"
                  style={{
                    borderColor: "var(--card-border)",
                    backgroundColor: isImageHeader ? "transparent" : "var(--card-bg)",
                    color: "var(--card-text)",
                  }}
                >
                  {isImageHeader && (
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${c.icon})` }}
                    />
                  )}
                  <div
                    className={`relative ${isImageHeader ? "-mt-10 backdrop-blur-sm rounded-3xl px-7 pb-7 pt-6" : "p-7"}`}
                    style={{
                      backgroundColor: isImageHeader ? "var(--card-panel-bg)" : "transparent",
                      color: "var(--card-panel-text)",
                      border: isImageHeader ? "1px solid var(--card-panel-border)" : undefined,
                    }}
                  >
                    {!isImageHeader && (
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5 overflow-hidden"
                        style={{ backgroundColor: `${c.color ?? "#ffb800"}28` }}
                      >
                        {c.icon}
                      </div>
                    )}
                    <div className={isImageHeader ? "w-full" : ""}>
                      <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                      <p className={`text-sm leading-relaxed ${isImageHeader ? "opacity-90" : "opacity-70"}`}>
                        {c.text}
                      </p>
                      {c.extra && (
                        <p
                          className="text-sm font-bold mt-4"
                          style={{ color: isImageHeader ? "#111" : "var(--brand-verde)" }}
                        >
                          {c.extra}
                        </p>
                      )}
                    </div>
                  </div>
                </Wrapper>
              </RevealFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
