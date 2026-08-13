"use client";

import BannerPage from "@/components/BannerPage";
import ContentBlock from "@/components/ContentBlock";
import Cta from "@/components/Cta";
import { useLanguage } from "@/components/LanguageProvider";

export default function CasesPage() {
  const { t } = useLanguage();
  const { banner, blocks } = t.casesPage;

  return (
    <>
      <BannerPage image="/images/default-hero.jpg" tagline={banner.tagline} lines={banner.lines} text={banner.text} />

      <ContentBlock id={blocks[0].id} heading={blocks[0].heading} icon={blocks[0].icon} text={blocks[0].text} points={blocks[0].points} />
      <ContentBlock reverse id={blocks[1].id} heading={blocks[1].heading} icon={blocks[1].icon} text={blocks[1].text} points={blocks[1].points} />

      <Cta />
    </>
  );
}
