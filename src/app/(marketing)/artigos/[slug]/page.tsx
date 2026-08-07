import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BannerPage from "@/components/BannerPage";
import RevealFade from "@/components/RevealFade";
import { getArticleBySlug } from "@/lib/articles";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.status !== "published") {
    return { title: "Artigo não encontrado | " + SITE_NAME };
  }

  const title = article.seo_title || article.title;
  const description = article.seo_description || article.excerpt || undefined;
  const url = `${SITE_URL}/artigos/${article.slug}`;
  const images = article.cover_image ? [{ url: `${SITE_URL}${article.cover_image}` }] : undefined;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: SITE_NAME,
      images,
      publishedTime: article.published_at ?? undefined,
      modifiedTime: article.updated_at,
      locale: "pt_BR",
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title,
      description,
      images: images?.map((i) => i.url),
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.status !== "published") notFound();

  const url = `${SITE_URL}/artigos/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seo_description || article.excerpt || undefined,
    image: article.cover_image ? [`${SITE_URL}${article.cover_image}`] : undefined,
    datePublished: article.published_at ?? undefined,
    dateModified: article.updated_at,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logos/taizen-icon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BannerPage
        tagline={
          article.published_at
            ? new Date(article.published_at).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })
            : "Taizen Consulting"
        }
        lines={[article.title]}
        text={article.excerpt || undefined}
      />

      {article.cover_image && (
        <div className="container mb-16">
          <RevealFade y={20} blur={6} scale={0.97}>
            <div className="relative aspect-[16/8] rounded-2xl overflow-hidden bg-(--brand-laranja-light)">
              <Image src={article.cover_image} alt={article.title} fill className="object-cover" priority />
            </div>
          </RevealFade>
        </div>
      )}

      <section className="pb-24">
        <div className="container max-w-3xl">
          <RevealFade y={16} blur={4}>
            <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-extrabold prose-a:text-(--brand-laranja)">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
            </article>
          </RevealFade>
        </div>
      </section>
    </>
  );
}
