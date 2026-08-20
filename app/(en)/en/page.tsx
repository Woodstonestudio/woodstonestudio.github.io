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
import { enNav, enHero, enSections } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/en",
    languages: {
      tr: "https://woodstonestudio.com/",
      en: "https://woodstonestudio.com/en",
    },
  },
};

export default function HomeEN() {
  return (
    <>
      <Nav t={enNav} />
      <main>
        <Hero t={enHero} />
        <ProductsIntro t={enSections.productsIntro} />
        <ContractorySection t={enSections.contractory} />
        <AlphaOSSection t={enSections.alphaos} />
        <AuthorAISection t={enSections.authorai} />
        <Services t={enSections.services} />
        <WorkShowcase t={enSections.work} />
        <IdeaCTA t={enSections.idea} />
        <Studio t={enSections.studio} />
        <FAQ t={enSections.faq} />
        <Contact t={enSections.contact} />
      </main>
      <Footer t={enSections.footer} />
    </>
  );
}
