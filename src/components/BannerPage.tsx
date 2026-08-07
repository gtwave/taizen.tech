"use client";

import { motion } from "framer-motion";
import RevealLines from "./RevealLines";

export default function BannerPage({
  tagline,
  lines,
  text,
}: {
  tagline?: string;
  lines: string[];
  text?: string;
}) {
  return (
    <section className="pt-40 pb-16 md:pt-52 md:pb-24">
      <div className="container max-w-3xl">
        {tagline && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-(--brand-laranja) text-sm uppercase tracking-wide mb-4"
          >
            {tagline}
          </motion.p>
        )}
        <RevealLines
          as="h1"
          lines={lines}
          className="font-normal leading-[1.05] text-4xl md:text-6xl mb-6"
        />
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="opacity-70 max-w-xl"
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
}
