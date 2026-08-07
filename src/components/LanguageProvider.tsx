"use client";

import { createContext, useContext, useEffect, useState } from "react";
import pt from "@/lib/i18n/dictionaries/pt";
import es from "@/lib/i18n/dictionaries/es";
import en from "@/lib/i18n/dictionaries/en";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";

export type Lang = "pt" | "es" | "en";

const DICTIONARIES: Record<Lang, Dictionary> = { pt, es, en };

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dictionary;
}>({ lang: "pt", setLang: () => {}, t: pt });

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang") as Lang | null;
    if (stored && stored in DICTIONARIES) {
      setLangState(stored);
      return;
    }
    // No saved preference yet — guess from the browser's own language list
    // instead of always defaulting to Portuguese.
    const browserLangs = window.navigator.languages ?? [window.navigator.language];
    const detected = browserLangs
      .map((l) => l.slice(0, 2).toLowerCase())
      .find((code) => code === "es" || code === "en" || code === "pt");
    if (detected) setLangState(detected as Lang);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: DICTIONARIES[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}
