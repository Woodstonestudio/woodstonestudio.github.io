import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ContractorySection } from "@/components/contractory-section";
import { AlphaOSSection } from "@/components/alphaos-section";
import { AuthorAISection } from "@/components/authorai-section";
import { Studio } from "@/components/studio";
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
        <ContractorySection />
        <AlphaOSSection />
        <AuthorAISection />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
