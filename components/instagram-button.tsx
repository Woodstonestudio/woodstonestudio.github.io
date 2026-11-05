/**
 * Sabit Instagram butonu — her sayfada sağ alt köşede.
 * WoodstoneStudio Instagram profilini (DM için) yeni sekmede açar.
 */
export const INSTAGRAM_URL = "https://www.instagram.com/woodstonestudio35";

export function InstagramButton({ label = "Instagram'dan yazın" }: { label?: string }) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] ring-1 ring-black/10 transition-transform duration-300 ease-soft hover:scale-105 active:scale-95"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>
  );
}
