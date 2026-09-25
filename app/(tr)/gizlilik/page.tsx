import type { Metadata } from "next";
import { PrivacyPage, privacyMetadata } from "@/components/privacy-page";

export const metadata: Metadata = privacyMetadata("tr");

export default function Page() {
  return <PrivacyPage locale="tr" />;
}
