import { AuditSample } from "@/components/AuditSample";
import { BookCta } from "@/components/BookCta";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Problems } from "@/components/Problems";
import { ToolsStrip } from "@/components/ToolsStrip";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ToolsStrip />
        <Problems />
        <HowItWorks />
        <Pricing />
        <AuditSample />
        <WhyUs />
        <Faq />
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
