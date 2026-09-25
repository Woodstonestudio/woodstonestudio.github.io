import { SalonBand } from "@/components/salon-band";
import { LatestPosts } from "@/components/latest-posts";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { JoVVo } from "@/components/jovvo-section";
import { Services } from "@/components/services";
import { WorkShowcase } from "@/components/work-showcase";
import { Testimonials } from "@/components/testimonials";
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
    },
  },
};

export default function HomeEN() {
  return (
    <>
      <Nav t={enNav} />
      <main>
        <Hero t={enHero} />
        <JoVVo t={enSections.jovvo} />
        <Services t={enSections.services} />
        <SalonBand locale="en" />
        <Testimonials t={enSections.testimonials} />
        <WorkShowcase t={enSections.work} />
        <IdeaCTA t={enSections.idea} />
        <LatestPosts locale="en" />
        <Contact t={enSections.contact} locale="en" />
      </main>
      <Footer t={enSections.footer} />
    </>
  );
}
