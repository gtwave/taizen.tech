import GradientBg from "@/components/GradientBg";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GradientBg />
      <SmoothScroll />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
