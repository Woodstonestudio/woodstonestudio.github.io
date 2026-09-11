import type { Metadata } from "next";
import { ProductPage, productMetadata } from "@/components/product-page";
import { Instrument } from "@/components/contractory/instrument";
import { AlphaOSConsole } from "@/components/alphaos/console";
import { alphaosContent } from "@/lib/alphaos-i18n";

export const metadata: Metadata = productMetadata(alphaosContent.sq, "alphaos", "sq");

export default function Page() {
  return (
    <ProductPage
      c={alphaosContent.sq}
      locale="sq"
      slug="alphaos"
      externalUrl="https://alphaos.site"
      accentClass="text-contractory-soft"
      console={<Instrument><AlphaOSConsole /></Instrument>}
    />
  );
}
