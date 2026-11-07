import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { enNav, enSections } from "@/lib/i18n";
import { BASE, CARE_MONTHLY, WEEKS, LANG_EXTRA, type ProjectKey } from "@/lib/pricing";
import { INSTAGRAM_URL } from "@/components/instagram-button";

/**
 * Arnavutça fiyat sayfası: "Sa kushton një faqe interneti në Shqipëri?"
 * Bu adres (eski /sq bölümünden) kapandıktan sonra da Google'ın yapay zekâ özetlerinde
 * gösterilmeye devam etti; yönlendirme yerine gerçek sayfa olarak geri açıldı (Kasım 2026).
 * Rakamlar lib/pricing.ts (EN/EUR) tek kaynağından gelir.
 */

const SITE = "https://woodstonestudio.com";
const PATH = "/sq/dizajn-web";
const PUBLISHED = "2026-11-07";
/** Fiyatların son değiştiği tarih (lib/i18n.ts PRICES_AS_OF ile aynı) */
const PRICES_AS_OF = "2026-09-25";
const PRICES_AS_OF_LABEL = "shtator 2026";

const eur = (n: number) => `${n.toLocaleString("de-DE")} €`;
const range = (k: ProjectKey) => `${BASE.en[k].min.toLocaleString("de-DE")}–${eur(BASE.en[k].max)}`;
const weeks = (k: ProjectKey) => `${WEEKS[k].min}–${WEEKS[k].max} javë`;

const ROWS: { k: ProjectKey; name: string; note: string; from?: boolean }[] = [
  { k: "landing", name: "Faqe prezantuese", note: "1–5 faqe, për një biznes, produkt ose shërbim" },
  { k: "corporate", name: "Faqe biznesi", note: "shërbimet, rreth nesh, galeri, kontakt, blog" },
  { k: "ecommerce", name: "Dyqan online", note: "produkte, shporta, pagesa online" },
  { k: "booking", name: "Sistem rezervimi online", note: "për sallone, klinika, palestra, restorante" },
  { k: "mobile", name: "Aplikacion mobil (iOS dhe Android)", note: "publikuar në App Store dhe Google Play", from: true },
];

const ANSWER = `Që nga ${PRICES_AS_OF_LABEL}, te WoodstoneStudio një faqe prezantuese kushton ${range("landing")}, një faqe biznesi ${range("corporate")}, një dyqan online ${range("ecommerce")} dhe një sistem rezervimi online ${range("booking")}. Aplikacionet mobile fillojnë nga ${eur(BASE.en.mobile.min)}. Pagesa bëhet 50% në fillim dhe 50% kur faqja del online; çmimi përfundimtar jepet me ofertë me shkrim pasi të bisedojmë për projektin.`;

const FAQ: { q: string; a: string }[] = [
  {
    q: "Sa kushton një faqe interneti e thjeshtë në Shqipëri?",
    a: `Te WoodstoneStudio, një faqe prezantuese me 1–5 faqe kushton ${range("landing")} dhe del online për ${weeks("landing")}.`,
  },
  {
    q: "Sa kushton një dyqan online?",
    a: `${range("ecommerce")}, në varësi të numrit të produkteve dhe mënyrave të pagesës. Afati është ${weeks("ecommerce")}.`,
  },
  {
    q: "A ka kosto mujore ose vjetore?",
    a: `Dizajni dhe zhvillimi paguhen një herë. Çdo vit paguhen vetëm domeni dhe hostimi. Mirëmbajtja është opsionale: ${CARE_MONTHLY.en.min}–${eur(CARE_MONTHLY.en.max)} në muaj.`,
  },
  {
    q: "Sa kushton një gjuhë shtesë?",
    a: `Çdo gjuhë shtesë (për shembull anglisht ose italisht për turistët) shton rreth ${Math.round(LANG_EXTRA * 100)}% në çmimin bazë.`,
  },
  {
    q: "A punoni me biznese në Tiranë, Durrës, Vlorë dhe Sarandë?",
    a: "Po. Punojmë nga distanca me biznese në të gjithë Shqipërinë dhe jashtë saj. Bisedojmë në anglisht ose turqisht; faqja juaj mund të jetë në shqip dhe në gjuhë të tjera.",
  },
  {
    q: "Si mund t'ju kontaktoj?",
    a: "Na shkruani në info@woodstonestudio.com ose në Instagram (@woodstonestudio35).",
  },
];

export const metadata: Metadata = {
  title: "Sa kushton një faqe interneti në Shqipëri? Çmimet 2026",
  description: `Çmimet e WoodstoneStudio për faqe interneti në Shqipëri: faqe prezantuese nga ${eur(BASE.en.landing.min)}, faqe biznesi nga ${eur(BASE.en.corporate.min)}, dyqan online nga ${eur(BASE.en.ecommerce.min)}. Afatet, kostot vjetore dhe çfarë përfshihet.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Sa kushton një faqe interneti në Shqipëri? Çmimet 2026",
    url: SITE + PATH,
    siteName: "WoodstoneStudio",
    locale: "sq_AL",
    type: "article",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "WoodstoneStudio — dizajn faqesh interneti" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}${PATH}#webpage`,
      url: SITE + PATH,
      name: "Sa kushton një faqe interneti në Shqipëri? Çmimet 2026",
      inLanguage: "sq",
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      abstract: ANSWER,
      author: { "@id": `${SITE}/#organization` },
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "Service",
      serviceType: "Dizajn dhe zhvillim faqesh interneti",
      provider: { "@id": `${SITE}/#organization` },
      areaServed: { "@type": "Country", name: "Albania" },
      offers: ROWS.map((r) => ({
        "@type": "Offer",
        name: r.name,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: BASE.en[r.k].min,
          ...(r.from ? {} : { maxPrice: BASE.en[r.k].max }),
          validFrom: PRICES_AS_OF,
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

const H2 = "mt-16 text-2xl font-light tracking-tight text-bone sm:text-3xl";
const P = "mt-5 text-[17px] leading-[1.75] text-gray-warm";
const LINK = "text-bone underline underline-offset-4";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav t={enNav} />
      <main>
        <article className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:pb-32 lg:pt-44">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">Dizajn faqesh interneti · Shqipëri</p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-warm">
            Nga:{" "}
            <a href="/en/about" rel="author" className="text-bone-dim underline-offset-4 hover:underline">WoodstoneStudio</a>
            {" · "}Publikuar: <time dateTime={PUBLISHED}>7 nëntor 2026</time>
            {" · "}Çmimet: <time dateTime={PRICES_AS_OF}>{PRICES_AS_OF_LABEL}</time>
          </p>

          <h1 className="mt-6 text-[34px] font-light leading-[1.12] tracking-tightest text-bone sm:text-[44px]">
            Sa kushton një faqe interneti në Shqipëri?
          </h1>
          <p className="mt-8 text-[19px] leading-[1.7] text-bone">{ANSWER}</p>

          <h2 className={H2}>Çmimet sipas llojit të projektit</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-[15px]">
              <thead>
                <tr className="border-b border-line font-mono text-[11px] uppercase tracking-[0.16em] text-bone-dim">
                  <th className="py-3 pr-4 font-normal">Projekti</th>
                  <th className="py-3 pr-4 font-normal">Çmimi</th>
                  <th className="py-3 font-normal">Afati</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.k} className="border-b border-line align-top">
                    <td className="py-4 pr-4">
                      <span className="text-bone">{r.name}</span>
                      <span className="mt-1 block text-[13px] text-gray-warm">{r.note}</span>
                    </td>
                    <td className="whitespace-nowrap py-4 pr-4 text-bone">
                      {r.from ? `nga ${eur(BASE.en[r.k].min)}` : range(r.k)}
                    </td>
                    <td className="whitespace-nowrap py-4 text-gray-warm">{weeks(r.k)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[14px] leading-[1.6] text-gray-warm">
            Çmime orientuese për një gjuhë. Çdo gjuhë shtesë shton rreth {Math.round(LANG_EXTRA * 100)}%. Llogaritni çmimin për
            projektin tuaj me <a className={LINK} href="/en/pricing-calculator">kalkulatorin e çmimeve</a> (në anglisht).
          </p>

          <h2 className={H2}>Çfarë përfshihet</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[17px] leading-[1.7] text-gray-warm">
            <li>Dizajn i përshtatur për biznesin tuaj, që funksionon mirë në celular</li>
            <li>Bazat për Google: tituj, përshkrime dhe të dhëna të strukturuara</li>
            <li>Formular kontakti dhe lidhje me Instagram dhe Google Maps</li>
            <li>Certifikatë SSL (https) falas</li>
            <li>Domeni dhe llogaritë janë në emrin tuaj, jo në emrin tonë</li>
          </ul>

          <h2 className={H2}>Kostot pas publikimit</h2>
          <p className={P}>
            Dizajni dhe zhvillimi paguhen një herë. Çdo vit paguhen vetëm domeni dhe hostimi. Mirëmbajtja (përditësime,
            kopje rezervë, ndryshime të vogla) është opsionale dhe kushton {CARE_MONTHLY.en.min}–{eur(CARE_MONTHLY.en.max)}{" "}
            në muaj.
          </p>

          <h2 className={H2}>Për hotele, guesthouse dhe vila</h2>
          <p className={P}>
            Booking.com dhe platformat e tjera marrin rreth 15–18% komision për çdo rezervim. Një faqe me rezervim të drejtpërdrejtë
            ju lejon që mysafiri që ju gjen një herë të rezervojë herën tjetër direkt te ju.{" "}
            <a className={LINK} href="/en/hotel-website-design">Më shumë për faqet e hoteleve</a> (në anglisht).
          </p>

          <h2 className={H2}>Si punojmë</h2>
          <p className={P}>
            Punojmë nga distanca me biznese në Tiranë, Durrës, Vlorë, Sarandë dhe në të gjithë Shqipërinë. Bisedojmë në anglisht
            ose turqisht; faqja juaj mund të jetë në shqip dhe në gjuhë të tjera. Gjatë punës e shihni faqen me një link
            paraprak nga telefoni juaj.
          </p>

          <h2 className={H2}>Pyetje të shpeshta</h2>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {FAQ.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="text-[17px] text-bone">{f.q}</dt>
                <dd className="mt-2 text-[16px] leading-[1.7] text-gray-warm">{f.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
            <p className="text-xl font-light text-bone">Doni një ofertë për faqen tuaj?</p>
            <p className="mt-3 text-[16px] leading-[1.7] text-gray-warm">
              Na shkruani në <a className={LINK} href="mailto:info@woodstonestudio.com">info@woodstonestudio.com</a> ose në{" "}
              <a className={LINK} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>. Mund ta kontrolloni
              edhe faqen tuaj ekzistuese falas me <a className={LINK} href="/en/site-audit">analizën e faqes</a> (në anglisht).
            </p>
          </div>
        </article>
      </main>
      <Footer t={enSections.footer} />
    </>
  );
}
