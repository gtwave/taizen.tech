"use client";

import RevealFade from "./RevealFade";
import { useLanguage } from "./LanguageProvider";

export default function ComparisonTable({
  tagline,
  heading,
}: {
  tagline?: string;
  heading?: string;
}) {
  const { t } = useLanguage();
  const finalTagline = tagline ?? t.comparisonTable.tagline;
  const finalHeading = heading ?? t.comparisonTable.heading;

  return (
    <section className="py-24">
      <div className="container">
        <RevealFade y={16} blur={4}>
          <p className="text-(--brand-laranja) text-sm uppercase tracking-wide mb-2 font-semibold">
            {finalTagline}
          </p>
          <h2 className="font-extrabold mb-10" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            {finalHeading}
          </h2>
        </RevealFade>

        <RevealFade y={20} blur={6}>
          <div className="overflow-x-auto rounded-xl border border-(--theme-secondary)/12">
            <table className="w-full border-collapse text-sm min-w-[640px]">
              <thead>
                <tr className="bg-(--theme-secondary)/5">
                  <th className="text-left p-5 font-semibold text-xs uppercase tracking-wide"></th>
                  <th className="text-left p-5 font-semibold text-xs uppercase tracking-wide">
                    {t.comparisonTable.theadTradicional}
                  </th>
                  <th className="text-left p-5 font-semibold text-xs uppercase tracking-wide text-(--brand-laranja)">
                    {t.comparisonTable.theadTaizen}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.comparisonTable.rows.map((r, i) => (
                  <tr key={r.label} className={i !== t.comparisonTable.rows.length - 1 ? "border-b border-(--theme-secondary)/8" : ""}>
                    <th className="text-left p-5 font-bold whitespace-nowrap align-top bg-(--theme-secondary)/5">
                      {r.label}
                    </th>
                    <td className="p-5 font-semibold align-top">{r.tradicional}</td>
                    <td className="p-5 font-semibold align-top bg-(--brand-laranja)/5">{r.taizen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealFade>
      </div>
    </section>
  );
}
