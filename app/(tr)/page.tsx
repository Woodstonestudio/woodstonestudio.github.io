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
import { FAQ } from "@/components/faq";
import { QuickAnswers } from "@/components/quick-answers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      tr: "https://woodstonestudio.com/",
      en: "https://woodstonestudio.com/en",
      "x-default": "https://woodstonestudio.com/",
    },
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <QuickAnswers locale="tr" />
        <JoVVo />
        <Services />
        <SalonBand locale="tr" />
        <Testimonials />
        <WorkShowcase />
        <IdeaCTA />
        <LatestPosts locale="tr" />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
