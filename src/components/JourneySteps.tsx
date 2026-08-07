"use client";

import RevealFade from "./RevealFade";
import { useLanguage } from "./LanguageProvider";

export default function JourneySteps() {
  const { t } = useLanguage();
  return (
    <section className="py-24" style={{ background: "var(--preto)", color: "#fff" }}>
      <div className="container">
        <RevealFade y={16} blur={4}>
          <p className="text-(--brand-verde) text-sm uppercase tracking-wide mb-2 font-semibold">
            {t.journeySteps.tagline}
          </p>
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            {t.journeySteps.heading}
          </h2>
          <p className="opacity-60 max-w-xl mb-16">{t.journeySteps.text}</p>
        </RevealFade>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {t.journeySteps.steps.map((s, i) => (
            <RevealFade key={s.n} delay={i * 0.1} y={20} blur={4}>
              <div className="text-center px-2">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-extrabold"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--brand-azul), var(--brand-verde), var(--brand-laranja), var(--brand-roxo))",
                  }}
                >
                  {s.n}
                </div>
                <h3 className="font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-xs opacity-50 leading-relaxed">{s.text}</p>
              </div>
            </RevealFade>
          ))}
        </div>
      </div>
    </section>
  );
}
