import type { Metadata } from "next";
import { AboutPage, aboutMetadata } from "@/components/about-page";
import { aboutTR } from "@/lib/about";

export const metadata: Metadata = aboutMetadata(aboutTR);

export default function Page() {
  return <AboutPage c={aboutTR} />;
}
