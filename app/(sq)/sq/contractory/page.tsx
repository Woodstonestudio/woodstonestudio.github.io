import type { Metadata } from "next";
import { ProductPage, productMetadata } from "@/components/product-page";
import { Instrument } from "@/components/contractory/instrument";
import { ContractoryConsole } from "@/components/contractory/console";
import { contractoryContent } from "@/lib/contractory-i18n";

export const metadata: Metadata = productMetadata(contractoryContent.sq, "contractory", "sq");

export default function Page() {
  return (
    <ProductPage
      c={contractoryContent.sq}
      locale="sq"
      slug="contractory"
      externalUrl="https://contractory.xyz"
      accentClass="text-contractory-soft"
      console={<Instrument><ContractoryConsole /></Instrument>}
    />
  );
}
