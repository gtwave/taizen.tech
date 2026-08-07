"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

export type FeatureCard = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

function Card({
  card,
  cardRef,
}: {
  card: FeatureCard;
  cardRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const localRef = useRef<HTMLDivElement>(null);
  const ref = cardRef ?? localRef;
  // Focus is driven by the card's *actual* on-screen position, measured every
  // frame — not by an abstract fraction of scroll progress. That guarantees
  // the sharp/enlarged card is always whichever one is really centered in the
  // viewport, regardless of the track's translateX easing or card widths.
  const scale = useMotionValue(0.9);
  const opacity = useMotionValue(0.65);
  const blur = useMotionValue(1.5);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  useAnimationFrame(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const viewportCenter = window.innerWidth / 2;
    const falloff = Math.max(rect.width * 0.9, window.innerWidth * 0.35);
    const focus = Math.max(0, 1 - Math.abs(cardCenter - viewportCenter) / falloff);

    scale.set(0.9 + focus * 0.28); // 0.9 (normal) → 1.18 (highlighted)
    opacity.set(0.65 + focus * 0.35); // 0.65 → 1, never too faint to read
    blur.set((1 - focus) * 1.5); // 1.5px → 0px, gentle enough to stay legible
  });

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, filter }}
      className="shrink-0 w-[70vw] sm:w-[24rem] mr-12 rounded-xl overflow-hidden relative aspect-[3/2] flex flex-col justify-between p-8"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: `${card.color}24` }}
      />
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
        style={{ backgroundColor: `${card.color}30` }}
      >
        {card.icon}
      </div>
      <div>
        <p className="text-lg font-bold mb-2">{card.title}</p>
        <p className="text-sm opacity-70 leading-relaxed">{card.description}</p>
      </div>
    </motion.div>
  );
}

export default function CardsCarousel({
  tagline,
  heading,
  cards,
}: {
  tagline: string;
  heading: string;
  cards: FeatureCard[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Measured (not guessed) so the first and last cards actually reach
  // viewport center instead of the track starting/ending while they're
  // still off to the side. offsetLeft/offsetWidth reflect layout position
  // and are unaffected by the translateX transform applied below, so this
  // stays correct while the track is mid-scroll.
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    function measure() {
      const first = firstCardRef.current;
      const last = lastCardRef.current;
      if (!first || !last) return;
      setStartX(window.innerWidth / 2 - (first.offsetLeft + first.offsetWidth / 2));
      setEndX(window.innerWidth / 2 - (last.offsetLeft + last.offsetWidth / 2));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cards.length]);

  const x = useTransform(scrollYProgress, [0, 1], [startX, endX]);
  const xPx = useTransform(x, (v) => `${v}px`);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${Math.max(200, cards.length * 70)}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mb-10">
          <p className="text-(--brand-laranja) text-sm uppercase tracking-wide mb-2 font-semibold">{tagline}</p>
          <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            {heading}
          </h2>
        </div>
        <motion.div ref={trackRef} style={{ x: xPx }} className="flex pl-6">
          {cards.map((c, i) => (
            <Card
              key={c.title}
              card={c}
              cardRef={i === 0 ? firstCardRef : i === cards.length - 1 ? lastCardRef : undefined}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
