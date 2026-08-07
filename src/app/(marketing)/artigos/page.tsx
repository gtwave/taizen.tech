import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BannerPage from "@/components/BannerPage";
import RevealFade from "@/components/RevealFade";
import { listArticles } from "@/lib/articles";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Artigos | Taizen Consulting",
  description:
    "Conteúdo técnico sobre engenharia de software, cloud, DevOps e IA aplicada, direto da equipe da Taizen Consulting.",
};

export default function ArtigosPage() {
  const articles = listArticles({ status: "published" });

  return (
    <>
      <BannerPage
        tagline="Conteúdo técnico"
        lines={["Artigos."]}
        text="Reflexões e aprendizados sobre engenharia de software, cloud, DevOps e IA aplicada, direto de quem está no código."
      />

      <section className="pb-24">
        <div className="container">
          {articles.length === 0 ? (
            <p className="opacity-60">Nenhum artigo publicado ainda.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((a, i) => (
                <RevealFade key={a.id} delay={i * 0.06} y={20} blur={4} scale={0.98}>
                  <Link href={`/artigos/${a.slug}`} className="group block">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-(--brand-laranja-light) mb-4">
                      {a.cover_image ? (
                        <Image
                          src={a.cover_image}
                          alt={a.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 30rem"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-5xl">📝</div>
                      )}
                    </div>
                    <p className="text-xs opacity-50 mb-2">
                      {a.published_at &&
                        new Date(a.published_at).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                    </p>
                    <h2 className="text-lg font-bold leading-snug mb-2">{a.title}</h2>
                    {a.excerpt && <p className="text-sm opacity-60 line-clamp-2">{a.excerpt}</p>}
                  </Link>
                </RevealFade>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
