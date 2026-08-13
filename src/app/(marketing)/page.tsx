"use client";

import Hero from "@/components/Hero";
import SimpleCardGrid from "@/components/SimpleCardGrid";
import ComparisonTable from "@/components/ComparisonTable";
import Cta from "@/components/Cta";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />

      <SimpleCardGrid
        tagline={t.home.desafios.tagline}
        heading={t.home.desafios.heading}
        text={t.home.desafios.text}
        cards={t.home.desafios.cards.map((c, i) => ({ ...c, color: ["#ffb800", "#7c3aed"][i] }))}
      />

      <SimpleCardGrid
        tagline={t.home.portfolio.tagline}
        heading={t.home.portfolio.heading}
        text=""
        cards={t.home.portfolio.cards.map((c, i) => ({
          icon: c.icon,
          title: c.title,
          text: c.description,
          color: ["#ffb800", "#7ed321", "#ffb800", "#7c3aed"][i],
        }))}
      />

      <SimpleCardGrid
        dark
        tagline={t.home.diferencial.tagline}
        heading={t.home.diferencial.heading}
        text={t.home.diferencial.text}
        cols={3}
        cards={t.home.diferencial.cards.map((c, i) => ({ ...c, color: ["#ffb800", "#ffb800", "#7c3aed"][i] }))}
      />

      <SimpleCardGrid
        tagline={t.home.cases.tagline}
        heading={t.home.cases.heading}
        text={t.home.cases.text}
        cards={t.home.cases.cards.map((c, i) => ({
          ...c,
          color: ["#ffb800", "#7ed321"][i],
          href: ["/cases#wexp", "/cases#isa"][i],
        }))}
      />

      <ComparisonTable />

      <Cta />
    </>
  );
}
