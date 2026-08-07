import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import LanguageProvider from "@/components/LanguageProvider";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Taizen Consulting | Engenharia de Software & Inovação Digital Sênior",
  description:
    "Consultoria boutique de engenharia de software, cloud/DevOps e IA aplicada, liderada por especialistas com mais de 20 anos de mercado.",
  openGraph: {
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={poppins.variable}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
