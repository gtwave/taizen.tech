"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage, type Lang } from "./LanguageProvider";

const OPTIONS: { lang: Lang; flag: string; label: string }[] = [
  { lang: "pt", flag: "🇧🇷", label: "Português" },
  { lang: "es", flag: "🇪🇸", label: "Español" },
  { lang: "en", flag: "🇺🇸", label: "English" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);
  const current = OPTIONS.find((o) => o.lang === lang) ?? OPTIONS[0];

  const openMenu = () => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (rect) setMenuPos({ top: rect.bottom + 8, left: rect.right - 144 });
    setOpen((v) => !v);
  };

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={openMenu}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        aria-label="Selecionar idioma"
        className="w-8 h-8 rounded-full flex items-center justify-center text-lg leading-none border border-(--theme-secondary)/15 hover:border-(--brand-laranja) transition-colors"
      >
        {current.flag}
      </button>
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed rounded-lg overflow-hidden border border-(--theme-secondary)/12 bg-(--theme-primary) shadow-lg z-[999] w-36"
            style={{ top: menuPos.top, left: menuPos.left }}
          >
            {OPTIONS.map((o) => (
              <button
                key={o.lang}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setLang(o.lang);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-(--theme-secondary)/8 transition-colors"
                style={{ fontWeight: o.lang === lang ? 700 : 400 }}
              >
                <span className="text-lg leading-none">{o.flag}</span>
                {o.label}
              </button>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
}
