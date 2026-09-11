import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProductsIntro } from "@/components/products-intro";
import { Services } from "@/components/services";
import { WorkShowcase } from "@/components/work-showcase";
import { IdeaCTA } from "@/components/idea-cta";
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
      sq: "https://woodstonestudio.com/sq",
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
        <Services t={enSections.services} />
        <WorkShowcase t={enSections.work} />
        <IdeaCTA t={enSections.idea} />
        <Contact t={enSections.contact} />
      </main>
      <Footer t={enSections.footer} />
    </>
  );
}
