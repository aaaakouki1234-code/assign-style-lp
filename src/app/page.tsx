import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Companies } from "@/components/Companies";
import { FormSection } from "@/components/FormSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Companies />
        <FormSection />
      </main>
      <Footer />

      {/* mobile sticky CTA */}
      <a
        href="#form"
        className="fixed inset-x-3 bottom-3 z-50 rounded-full bg-gradient-to-b from-gold to-gold-deep py-3.5 text-center text-base font-bold text-navy-900 shadow-float sm:hidden"
      >
        無料でキャリア相談に申込む
      </a>
    </>
  );
}
