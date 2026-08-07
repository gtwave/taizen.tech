"use client";

import { motion } from "framer-motion";
import RevealLines from "./RevealLines";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-28">
      <div className="container">
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
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="opacity-70 mt-6 mb-8 max-w-xl text-lg"
        >
          {t.hero.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: "backOut" }}
          className="flex flex-wrap gap-4"
        >
          <a href="/poc" className="btn btn-verde">
            {t.hero.ctaPoc}
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5513997985262&text=Ol%C3%A1%21%20Quero%20agendar%20uma%20imers%C3%A3o%20t%C3%A9cnica%20com%20a%20Taizen."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-4 rounded-lg border-2 border-(--brand-verde)/40 font-semibold text-(--brand-verde) hover:border-(--brand-verde) transition-colors"
          >
            {t.hero.ctaImersao}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="grid grid-cols-3 gap-6 mt-16 max-w-xl border-t border-(--theme-secondary)/10 pt-8"
        >
          {t.hero.stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-extrabold text-(--brand-roxo)">{s.value}</p>
              <p className="text-xs opacity-60 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
