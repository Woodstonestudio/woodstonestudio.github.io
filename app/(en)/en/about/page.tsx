import type { Metadata } from "next";
import { AboutPage, aboutMetadata } from "@/components/about-page";
import { aboutEN } from "@/lib/about";

export const metadata: Metadata = aboutMetadata(aboutEN);

export default function Page() {
  return <AboutPage c={aboutEN} />;
}
