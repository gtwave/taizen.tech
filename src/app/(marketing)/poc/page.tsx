"use client";

import BannerPage from "@/components/BannerPage";
import JourneySteps from "@/components/JourneySteps";
import ComparisonTable from "@/components/ComparisonTable";
import Cta from "@/components/Cta";
import { useLanguage } from "@/components/LanguageProvider";

export default function PocPage() {
  const { t } = useLanguage();
  const { banner, comparison, cta } = t.pocPage;

  return (
    <>
      <BannerPage tagline={banner.tagline} lines={banner.lines} text={banner.text} />

      <JourneySteps />

      <ComparisonTable tagline={comparison.tagline} heading={comparison.heading} />

      <Cta heading={cta.heading} text={cta.text} />
    </>
  );
}
