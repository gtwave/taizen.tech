"use client";

import BannerPage from "@/components/BannerPage";
import ContentBlock from "@/components/ContentBlock";
import Cta from "@/components/Cta";
import { useLanguage } from "@/components/LanguageProvider";

export default function ServicosPage() {
  const { t } = useLanguage();
  const { banner, blocks, cta } = t.servicosPage;

  return (
    <>
      <BannerPage tagline={banner.tagline} lines={banner.lines} text={banner.text} />

      <ContentBlock heading={blocks[0].heading} icon={blocks[0].icon} text={blocks[0].text} points={blocks[0].points} />
      <ContentBlock reverse heading={blocks[1].heading} icon={blocks[1].icon} text={blocks[1].text} points={blocks[1].points} />
      <ContentBlock heading={blocks[2].heading} icon={blocks[2].icon} text={blocks[2].text} points={blocks[2].points} />
      <ContentBlock reverse heading={blocks[3].heading} icon={blocks[3].icon} text={blocks[3].text} points={blocks[3].points} />

      <Cta heading={cta.heading} text={cta.text} ctaLabel={cta.ctaLabel} ctaHref="/poc" />
    </>
  );
}
