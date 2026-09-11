import type { Metadata } from "next";
import { AboutPage, aboutMetadata } from "@/components/about-page";
import { aboutSQ } from "@/lib/about";

export const metadata: Metadata = aboutMetadata(aboutSQ);

export default function Page() {
  return <AboutPage c={aboutSQ} />;
}
