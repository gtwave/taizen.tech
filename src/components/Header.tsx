"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import ContactModal from "./ContactModal";

const EASE = "cubic-bezier(0.4,0,0.2,1)";
const COLLAPSE_DURATION = "1.7s";

export default function Header() {
  const { theme, toggle } = useTheme();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/servicos", label: t.nav.servicos },
    { href: "/poc", label: t.nav.poc },
    { href: "/cases", label: t.nav.cases },
    { href: "/artigos", label: t.nav.artigos },
    { href: "/contato", label: t.nav.contato },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Same collapse-on-scroll / reopen-on-hover mechanic used across this
  // layout system: past 200px of scroll the pill shrinks to a compact mark
  // and reopens on hover. The icon is full-colour and theme-independent,
  // so it shrinks in place here instead of being cropped or swapped.
  const collapsed = scrolled && !hovering;
  const logoSrc = "/logos/taizen-icon.png";

  return (
    <motion.header
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 py-4 flex justify-center pointer-events-none"
    >
      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="pointer-events-auto rounded-xl bg-(--theme-primary-faded) backdrop-blur-md overflow-hidden mx-6 shadow-sm"
        style={{
          maxWidth: collapsed ? "4.5rem" : "70rem",
          transition: `max-width ${COLLAPSE_DURATION} ${EASE}`,
        }}
      >
        <div className="flex items-center gap-6 px-6 py-3 w-max">
          <Link
            href="/"
            aria-label="Taizen Consulting home"
            className="relative shrink-0"
            style={{
              width: collapsed ? "1.75rem" : "2.75rem",
              height: collapsed ? "1.75rem" : "2.75rem",
              transition: `width ${COLLAPSE_DURATION} ${EASE}, height ${COLLAPSE_DURATION} ${EASE}`,
            }}
          >
            <Image src={logoSrc} alt="Taizen Consulting" fill className="object-contain" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm" aria-label="header navigation">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap font-medium"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ContactModal
              label={t.nav.agendarImersao}
              className="btn btn-verde text-sm py-2! px-4! whitespace-nowrap"
            />
            <button
              onClick={toggle}
              aria-label="toggle the colour scheme"
              className="relative h-6 w-6 shrink-0 rounded-full transition-colors"
              style={{
                background: theme === "dark" ? "#fff" : "var(--preto)",
                WebkitMask:
                  theme === "dark"
                    ? "none"
                    : "url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.52 16.9C12.66 16.9 7.1 11.34 7.1 4.48c0-1.58.3-3.09.84-4.48C3.29 1.8 0 6.3 0 11.58 0 18.44 5.56 24 12.42 24c5.28 0 9.78-3.3 11.58-7.93-1.39.54-2.9.84-4.48.84z'/%3E%3C/svg%3E\") center center / cover",
                mask:
                  theme === "dark"
                    ? "none"
                    : "url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.52 16.9C12.66 16.9 7.1 11.34 7.1 4.48c0-1.58.3-3.09.84-4.48C3.29 1.8 0 6.3 0 11.58 0 18.44 5.56 24 12.42 24c5.28 0 9.78-3.3 11.58-7.93-1.39.54-2.9.84-4.48.84z'/%3E%3C/svg%3E\") center center / cover",
              }}
            />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
