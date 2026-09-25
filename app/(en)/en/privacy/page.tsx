import type { Metadata } from "next";
import { PrivacyPage, privacyMetadata } from "@/components/privacy-page";

export const metadata: Metadata = privacyMetadata("en");

export default function Page() {
  return <PrivacyPage locale="en" />;
}
