"use client";

import RevealFade from "./RevealFade";
import { useLanguage } from "./LanguageProvider";

export default function Cta({
  heading,
  text,
  ctaLabel,
  ctaHref = "https://api.whatsapp.com/send?phone=5513997985262&text=Ol%C3%A1%21%20Quero%20agendar%20uma%20imers%C3%A3o%20t%C3%A9cnica%20com%20a%20Taizen.",
}: {
  heading?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const { t } = useLanguage();
  const finalHeading = heading ?? t.ctaDefault.heading;
  const finalText = text ?? t.ctaDefault.text;
  const finalCtaLabel = ctaLabel ?? t.ctaDefault.ctaLabel;

  return (
    <section className="py-24">
      <div className="container">
        <RevealFade y={24} blur={6} scale={0.96}>
          <div
            className="rounded-2xl p-12 text-center text-white relative overflow-hidden"
            style={{ background: "var(--brand-roxo)" }}
          >
            <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
              {finalHeading}
            </h2>
            <p className="opacity-85 max-w-lg mx-auto mb-8">{finalText}</p>
            <a
              href={ctaHref}
              target={ctaHref.startsWith("http") ? "_blank" : undefined}
              rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="btn"
              style={{ background: "#fff", color: "var(--brand-roxo)" }}
            >
              {finalCtaLabel}
            </a>
          </div>
        </RevealFade>
      </div>
    </section>
  );
}
