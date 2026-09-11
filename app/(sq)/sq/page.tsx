import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProductsIntro } from "@/components/products-intro";
import { Services } from "@/components/services";
import { WorkShowcase } from "@/components/work-showcase";
import { IdeaCTA } from "@/components/idea-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { sqNav, sqHero, sqSections } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sq",
    languages: {
      tr: "https://woodstonestudio.com/",
      en: "https://woodstonestudio.com/en",
      sq: "https://woodstonestudio.com/sq",
    },
  },
};

export default function HomeSQ() {
  return (
    <>
      <Nav t={sqNav} />
      <main>
        <Hero t={sqHero} />
        <ProductsIntro t={sqSections.productsIntro} />
        <Services t={sqSections.services} />
        <WorkShowcase t={sqSections.work} />
        <IdeaCTA t={sqSections.idea} />
        <Contact t={sqSections.contact} />
      </main>
      <Footer t={sqSections.footer} />
    </>
  );
}
