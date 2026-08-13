"use client";

import { motion } from "framer-motion";
import RevealLines from "./RevealLines";

export default function BannerPage({
  tagline,
  lines,
  text,
  image = "/images/hero-home.png",
}: {
  tagline?: string;
  lines: string[];
  text?: string;
  image?: string;
}) {
  const hasImage = Boolean(image);

  return (
    <section
      className="relative pt-40 pb-16 md:pt-52 md:pb-24 overflow-hidden"
      style={
        hasImage
          ? {
              backgroundImage: `linear-gradient(to bottom, var(--hero-overlay-image), rgba(0,0,0,0.06)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {hasImage && <div className="absolute inset-0" style={{ backgroundColor: "var(--hero-overlay)" }} />}
      <div className={`container max-w-3xl ${hasImage ? "relative z-10" : ""}`}>
        {tagline && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={hasImage ? "text-white text-sm uppercase tracking-wide mb-4" : "text-(--brand-laranja) text-sm uppercase tracking-wide mb-4"}
          >
            {tagline}
          </motion.p>
        )}
        <RevealLines
          as="h1"
          lines={lines}
          className={hasImage ? "font-normal leading-[1.05] text-4xl md:text-6xl mb-6 text-white" : "font-normal leading-[1.05] text-4xl md:text-6xl mb-6"}
        />
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className={hasImage ? "max-w-xl text-white/90" : "max-w-xl opacity-70"}
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
}
