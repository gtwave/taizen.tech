"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const MARQUEE_WORDS = [
  "Engenharia Sênior",
  "Cloud & DevOps",
  "IA Aplicada",
  "Taizen Consulting",
];

// Temporarily disabled per request — flip back to true to restore the marquee.
const SHOW_MARQUEE = false;

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "YouTube",
    href: "#",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [newsletterError, setNewsletterError] = useState(false);
  const [newsletterSending, setNewsletterSending] = useState(false);

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNewsletterSending(true);
    setNewsletterError(false);
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterError(true);
      setNewsletterSending(false);
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setNewsletterSent(true);
        event.currentTarget.reset();
      } else {
        setNewsletterError(true);
      }
    } catch {
      setNewsletterError(true);
    } finally {
      setNewsletterSending(false);
    }
  }

  return (
    <footer className="pt-24 pb-10">
      <div className="container">
        {SHOW_MARQUEE && (
          <div className="overflow-hidden mb-16 -mx-3">
            <div className="marquee-track text-(--brand-roxo) font-bold" style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}>
              {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
                <span key={i} className="whitespace-nowrap">
                  {w} ✦
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-10 md:grid-cols-2 items-start text-right md:text-left">
          <div className="md:order-1 order-2">
            <Link href="/" aria-label="Taizen Consulting home" className="relative block w-10 h-10 ml-auto md:ml-0 mb-4">
              <Image src="/logos/taizen-icon.png" alt="Taizen Consulting" fill className="object-contain" />
            </Link>
            <p className="opacity-70 text-sm">{t.footer.text}</p>
            <p className="opacity-50 text-xs mt-2">
              <a href="tel:+5513997985262" className="underline">(13) 9 9798-5262</a>
              {" · "}
              <a href="mailto:uriel@taizentreinamentos.com.br" className="underline">
                uriel@taizentreinamentos.com.br
              </a>
            </p>

            <div className="flex gap-3 justify-end md:justify-start mt-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-(--theme-secondary)/15 opacity-70 hover:opacity-100 hover:border-(--brand-laranja) transition-all"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={subscribe}
            className="md:order-2 order-1 md:ml-auto max-w-md w-full"
          >
            <p className="text-sm opacity-70 mb-3">
              {newsletterSent ? t.footer.newsletterSuccess : t.footer.newsletterLabel}
            </p>
            <div className="flex gap-2">
              <input
                name="email"
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 min-w-0 rounded-md border border-(--theme-secondary)/20 bg-transparent px-4 py-2 text-sm outline-none focus:border-(--brand-laranja)"
              />
              <button type="submit" disabled={newsletterSending} className="btn text-sm py-2! px-4! disabled:opacity-60">
                {newsletterSending ? t.footer.newsletterSending : t.footer.submitLabel}
              </button>
            </div>
            {newsletterError && <p className="mt-2 text-xs text-red-500">{t.footer.newsletterError}</p>}
          </form>
        </div>

        <div className="mt-10 pt-6 border-t border-(--theme-secondary)/10 text-xs opacity-50">
          © {new Date().getFullYear()} {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
