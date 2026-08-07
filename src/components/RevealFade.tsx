"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function RevealFade({
  children,
  delay = 0,
  y = 40,
  blur = 8,
  scale = 0.94,
  className = "",
  duration = 1,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: number;
  scale?: number;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y, scale, filter: `blur(${blur}px)` }
      }
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
