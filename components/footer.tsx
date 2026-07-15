import Image from "next/image";

/**
 * Footer — the one place the full brand signature appears.
 * Quiet, hairline-topped, editorial.
 */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          {/* Full brand signature */}
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
                Independent Product Studio
              </div>
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Footer" className="flex gap-8">
            <a
              href="/#products"
              className="text-sm text-gray-warm transition-colors hover:text-bone"
            >
              Products
            </a>
            <a
              href="/#services"
              className="text-sm text-gray-warm transition-colors hover:text-bone"
            >
              Services
            </a>
            <a
              href="/#studio"
              className="text-sm text-gray-warm transition-colors hover:text-bone"
            >
              Studio
            </a>
            <a
              href="/#contact"
              className="text-sm text-gray-warm transition-colors hover:text-bone"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-warm">
            © {year} Woodstone Studio
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-warm">
            Designed &amp; built by Woodstone Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
