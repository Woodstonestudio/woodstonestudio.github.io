import localFont from "next/font/local";

/**
 * Geist Mono — yalnızca küçük etiketlerde (eyebrow, rozet) kullanılıyor.
 * Preload kapalı: ilk ekranda en büyük öğe (H1) için bant genişliği Sans'a kalır,
 * mono etiketler font gelene kadar sistem mono fontuyla görünür (display: swap).
 */
export const GeistMono = localFont({
  src: "./GeistMono-Variable.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
});
