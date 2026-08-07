"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function RevealLines({
  lines,
  as: Tag = "h1",
  className = "",
  delay = 0,
}: {
  lines: string[];
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag className={className} ref={ref}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <motion.span
            className="block"
            initial={false}
            animate={{ y: visible ? "0%" : "108%" }}
            transition={{
              duration: 1.1,
              delay: delay + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
