"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";

type RevealLinesProps = {
  lines: string[];
  as?: string;
  className?: string;
  delay?: number;
  style?: CSSProperties;
};

export default function RevealLines({
  lines,
  as = "h1",
  className = "",
  delay = 0,
  style,
}: RevealLinesProps) {
  const Tag: any = as;
  const ref = useRef<any>(null);
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
    <Tag className={className} style={style} ref={ref as any}>
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
