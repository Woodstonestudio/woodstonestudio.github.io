import type { MetadataRoute } from "next";

// Statik export: build sırasında /manifest.webmanifest üretilir
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WoodstoneStudio",
    short_name: "WoodstoneStudio",
    description: "Web siteleri, mobil uygulamalar ve SEO geliştiren dijital ürün stüdyosu",
    start_url: "/",
    display: "standalone",
    background_color: "#E9E5DD",
    theme_color: "#E9E5DD",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
