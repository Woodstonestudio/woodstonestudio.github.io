import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CookieSettingsButton } from "@/components/cookie-consent";
import { trNav, enNav, trSections, enSections } from "@/lib/i18n";
import { privacy, PRIVACY_PATH } from "@/lib/privacy";
import type { Locale } from "@/components/service-page";

const NAV = { tr: trNav, en: enNav } as const;
const FOOTER = { tr: trSections.footer, en: enSections.footer } as const;
const SITE = "https://woodstonestudio.com";

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = privacy[locale];
  return (
    <>
      <Nav t={NAV[locale]} />
      <main>
        <section className="relative mx-auto max-w-3xl px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{t.eyebrow}</p>
          <h1 className="mt-7 text-[40px] font-light leading-[1.08] tracking-tightest text-bone sm:text-[52px]">{t.h1}</h1>
          <p className="mt-5 font-mono text-[11px] tracking-[0.12em] text-gray-warm">{t.updated}</p>
          <p className="mt-8 text-[16.5px] leading-[1.85] text-gray-warm">{t.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-line p-6">
            <p className="flex-1 text-[14.5px] leading-[1.7] text-gray-warm">{t.settingsNote}</p>
            <CookieSettingsButton label={t.settingsLabel} variant="button" />
          </div>

          {t.sections.map((s) => (
            <div key={s.h} className="mt-14">
              <h2 className="text-[24px] font-light leading-snug tracking-tight text-bone sm:text-[27px]">{s.h}</h2>
              {s.p?.map((para, i) => (
                <p key={i} className="mt-4 text-[15.5px] leading-[1.85] text-gray-warm">{para}</p>
              ))}
              {s.ul && (
                <ul className="mt-4 space-y-2.5 border-l border-line pl-5">
                  {s.ul.map((li) => (
                    <li key={li} className="text-[15px] leading-[1.8] text-gray-warm">{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </main>
      <Footer t={FOOTER[locale]} />
    </>
  );
}

export function privacyMetadata(locale: Locale) {
  const t = privacy[locale];
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: PRIVACY_PATH[locale],
      languages: { tr: `${SITE}${PRIVACY_PATH.tr}`, en: `${SITE}${PRIVACY_PATH.en}` },
    },
  };
}
