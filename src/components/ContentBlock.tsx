import Image from "next/image";
import RevealFade from "./RevealFade";
import RevealLines from "./RevealLines";

export default function ContentBlock({
  heading,
  text,
  points,
  image,
  icon,
  reverse = false,
  id,
}: {
  heading: string;
  text: string;
  points?: string[];
  image?: string;
  icon?: string;
  reverse?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className="py-16 scroll-mt-28">
      <div
        className={`container grid gap-10 md:grid-cols-2 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <RevealLines
            as="h2"
            lines={[heading]}
            className="font-extrabold mb-4 text-3xl md:text-4xl"
          />
          <RevealFade delay={0.1} y={16} blur={4}>
            <p className="opacity-70 mb-6">{text}</p>
            {points && (
              <ul className="space-y-2 text-sm">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-(--brand-verde) font-bold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </RevealFade>
        </div>
        <RevealFade y={24} blur={8} scale={0.94}>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-(--brand-laranja-light) flex items-center justify-center">
            {image || (typeof icon === "string" && icon.startsWith("/")) ? (
              <Image
                src={image ?? icon!}
                alt={heading}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40rem"
              />
            ) : (
              <span className="text-7xl">{icon}</span>
            )}
          </div>
        </RevealFade>
      </div>
    </section>
  );
}
