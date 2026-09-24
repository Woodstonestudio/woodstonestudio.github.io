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
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      tr: "https://woodstonestudio.com/",
      en: "https://woodstonestudio.com/en",
    },
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <JoVVo />
        <Services />
        <Testimonials />
        <WorkShowcase />
        <IdeaCTA />
        <LatestPosts locale="tr" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
