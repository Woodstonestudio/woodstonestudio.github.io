import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { trNav, enNav, trSections, enSections } from "@/lib/i18n";
import type { Locale } from "@/components/service-page";

const NAV = { tr: trNav, en: enNav } as const;
const FOOTER = { tr: trSections.footer, en: enSections.footer } as const;
const SECTIONS = { tr: trSections, en: enSections } as const;
const HOME = { tr: "/", en: "/en" } as const;
const SITE = "https://woodstonestudio.com";
const BACK = { tr: "Ana sayfa", en: "Home", sq: "Faqja kryesore" } as const;

export function FaqPage({ locale }: { locale: Locale }) {
  return (
    <>
      <Nav t={NAV[locale]} />
      <main className="pt-20 lg:pt-28">
        <FAQ t={SECTIONS[locale].faq} />
        <div className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
          <Link href={HOME[locale]} className="text-sm text-gray-warm transition-colors hover:text-bone">
            ← {BACK[locale]}
          </Link>
        </div>
      </main>
      <Footer t={FOOTER[locale]} />
    </>
  );
}

export function faqMetadata(locale: Locale) {
  const titles = {
    tr: "Sık Sorulan Sorular — WoodstoneStudio",
    en: "Frequently Asked Questions — WoodstoneStudio",
    sq: "Pyetje të Bëra Shpesh — WoodstoneStudio",
  } as const;
  const descs = {
    tr: "WoodstoneStudio hizmetleri hakkında sık sorulan sorular: web tasarım, mobil uygulama, SaaS, yapay zekâ, sosyal medya ve daha fazlası.",
    en: "Frequently asked questions about WoodstoneStudio services: web design, mobile apps, SaaS, AI, social media and more.",
    sq: "Pyetje të bëra shpesh mbi shërbimet e WoodstoneStudio: dizajn web, aplikacione mobile, SaaS, AI, media sociale dhe më shumë.",
  } as const;
  const path = { tr: "/sss", en: "/en/faq" } as const;
  return {
    title: titles[locale],
    description: descs[locale],
    alternates: {
      canonical: path[locale],
      languages: {
        tr: `${SITE}/sss`,
        en: `${SITE}/en/faq`,
      },
    },
    openGraph: { title: titles[locale], description: descs[locale], url: `${SITE}${path[locale]}`, type: "website" },
  };
}
