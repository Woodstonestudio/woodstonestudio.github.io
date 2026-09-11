import type { Metadata } from "next";
import { ProductPage, productMetadata } from "@/components/product-page";
import { Instrument } from "@/components/contractory/instrument";
import { ContractoryConsole } from "@/components/contractory/console";
import { contractoryContent } from "@/lib/contractory-i18n";

export const metadata: Metadata = productMetadata(contractoryContent.en, "contractory", "en");

export default function Page() {
  return (
    <ProductPage
      c={contractoryContent.en}
      locale="en"
      slug="contractory"
      externalUrl="https://contractory.xyz"
      accentClass="text-contractory-soft"
      console={<Instrument><ContractoryConsole /></Instrument>}
    />
  );
}
