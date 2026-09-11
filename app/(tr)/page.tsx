import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProductsIntro } from "@/components/products-intro";
import { Services } from "@/components/services";
import { WorkShowcase } from "@/components/work-showcase";
import { IdeaCTA } from "@/components/idea-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      tr: "https://woodstonestudio.com/",
      en: "https://woodstonestudio.com/en",
      sq: "https://woodstonestudio.com/sq",
    },
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductsIntro />
        <Services />
        <WorkShowcase />
        <IdeaCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
