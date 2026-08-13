"use client";

import { motion } from "framer-motion";
import RevealLines from "./RevealLines";
import { useLanguage } from "./LanguageProvider";
import ContactModal from "./ContactModal";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, var(--hero-overlay-image), rgba(0,0,0,0.06)), url(/images/hero-home.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "var(--hero-overlay)" }} />
      <div className="container relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-(--brand-laranja) text-sm uppercase tracking-wide font-semibold mb-4"
        >
          {t.hero.tagline}
        </motion.p>

        <RevealLines
          as="h1"
          lines={t.hero.lines}
          className="font-extrabold leading-[1.05] text-4xl md:text-6xl max-w-3xl"
          delay={0.1}
          style={{ color: "var(--hero-text)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 mb-8 max-w-xl text-lg"
          style={{ color: "var(--hero-subtext)" }}
        >
          {t.hero.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: "backOut" }}
          className="flex flex-wrap gap-4"
        >
          <ContactModal label={t.hero.ctaPoc} className="btn btn-verde" />
          <ContactModal
            label={t.hero.ctaImersao}
            className="inline-flex items-center px-6 py-4 rounded-lg border-2 font-semibold transition-colors"
            style={{
              borderColor: "rgba(255,255,255,0.4)",
              color: "var(--btn-secondary-text)",
              backgroundColor: "var(--btn-secondary-bg)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="grid grid-cols-3 gap-6 mt-16 max-w-xl border-t pt-8"
          style={{ borderColor: "rgba(255,255,255,0.24)" }}
        >
          {t.hero.stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-extrabold" style={{ color: "var(--hero-text)" }}>{s.value}</p>
              <p className="text-xs mt-1" style={{ color: "var(--hero-subtext)" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
