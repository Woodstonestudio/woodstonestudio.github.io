import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProductsIntro } from "@/components/products-intro";
import { ContractorySection } from "@/components/contractory-section";
import { AlphaOSSection } from "@/components/alphaos-section";
import { AuthorAISection } from "@/components/authorai-section";
import { Services } from "@/components/services";
import { WorkShowcase } from "@/components/work-showcase";
import { IdeaCTA } from "@/components/idea-cta";
import { Studio } from "@/components/studio";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductsIntro />
        <ContractorySection />
        <AlphaOSSection />
        <AuthorAISection />
        <Services />
        <WorkShowcase />
        <IdeaCTA />
        <Studio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
