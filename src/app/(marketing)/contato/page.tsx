"use client";

import BannerPage from "@/components/BannerPage";
import SimpleCardGrid from "@/components/SimpleCardGrid";
import Cta from "@/components/Cta";
import { useLanguage } from "@/components/LanguageProvider";

const CARD_LINKS = [
  "https://api.whatsapp.com/send?phone=5513997985262&text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Taizen%20Consulting.",
  "mailto:uriel@taizentreinamentos.com.br",
  undefined,
];
const CARD_COLORS = ["#7ed321", "#ffb800", "#7c3aed"];

export default function ContatoPage() {
  const { t } = useLanguage();
  const { banner, grid, cta } = t.contatoPage;

  return (
    <>
      <BannerPage tagline={banner.tagline} lines={banner.lines} text={banner.text} />

      <SimpleCardGrid
        tagline={grid.tagline}
        heading={grid.heading}
        cols={3}
        cards={grid.cards.map((c, i) => ({ ...c, color: CARD_COLORS[i], href: CARD_LINKS[i] }))}
      />

      <Cta heading={cta.heading} text={cta.text} ctaLabel={cta.ctaLabel} />
    </>
  );
}
