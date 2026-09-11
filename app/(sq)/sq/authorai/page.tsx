import type { Metadata } from "next";
import { ProductPage, productMetadata } from "@/components/product-page";
import { Instrument } from "@/components/contractory/instrument";
import { AuthorAIConsole } from "@/components/authorai/console";
import { authoraiContent } from "@/lib/authorai-i18n";

export const metadata: Metadata = productMetadata(authoraiContent.sq, "authorai", "sq");

export default function Page() {
  return (
    <ProductPage
      c={authoraiContent.sq}
      locale="sq"
      slug="authorai"
      externalUrl="/sq#contact"
      accentClass="text-contractory-soft"
      console={<Instrument><AuthorAIConsole /></Instrument>}
    />
  );
}
