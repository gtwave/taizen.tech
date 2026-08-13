"use client";

export type FeatureCard = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

function Card({ card }: { card: FeatureCard }) {
  const isImageHeader = typeof card.icon === "string" && card.icon.startsWith("/");

  return (
    <div className="shrink-0 min-w-[20rem] max-w-[22rem] rounded-3xl overflow-hidden border border-(--theme-secondary)/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.04)]">
      {isImageHeader ? (
        <>
          <div
            className="h-44 bg-cover bg-center"
            style={{ backgroundImage: `url(${card.icon})` }}
          />
          <div className="p-7 -mt-10 bg-white/95 backdrop-blur-sm rounded-3xl mx-4 shadow-sm">
            <h3 className="font-bold text-lg mb-3">{card.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed">{card.description}</p>
          </div>
        </>
      ) : (
        <div className="p-7">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-5"
            style={{ backgroundColor: `${card.color}24` }}
          >
            {card.icon}
          </div>
          <h3 className="font-bold text-lg mb-3">{card.title}</h3>
          <p className="text-sm opacity-80 leading-relaxed">{card.description}</p>
        </div>
      )}
    </div>
  );
}

export default function CardsCarousel({
  tagline,
  heading,
  cards,
}: {
  tagline: string;
  heading: string;
  cards: FeatureCard[];
}) {
  return (
    <section className="relative py-24">
      <div className="container mb-10">
        <p className="text-(--brand-laranja) text-sm uppercase tracking-wide mb-2 font-semibold">{tagline}</p>
        <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
          {heading}
        </h2>
      </div>

      <div className="overflow-x-auto pb-6">
        <div className="mx-auto flex w-max gap-6 px-6 sm:px-0 snap-x snap-mandatory">
          {cards.map((c) => (
            <div key={c.title} className="snap-center">
              <Card card={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
