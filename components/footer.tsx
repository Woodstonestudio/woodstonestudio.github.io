import Image from "next/image";

/**
 * Footer — tam marka imzasının göründüğü tek yer.
 */
import { trSections, type SectionsDict } from "@/lib/i18n";

export function Footer({ t = trSections.footer }: { t?: SectionsDict["footer"] }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/logo-transparent.png"
              alt="Woodstone Studio"
              width={48}
              height={48}
              className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            />
            <div>
              <div className="text-[15px] font-medium tracking-tight text-bone">
                Woodstone Studio
              </div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-warm">
                {t.tagline}
              </div>
            </div>
          </div>

          <nav aria-label={t.ariaLabel} className="flex gap-8">
            {t.links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-warm transition-colors hover:text-bone">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-warm">
            © {year} Woodstone Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
