"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Çerezsiz ziyaret sayacı. Her sayfa açılışında Growth paneline küçük bir sinyal yollar:
 * sayfa yolu, (yalnızca ilk sayfada) geldiği site ve dil. Sayfadan ayrılırken ya da sekme
 * arka plana geçerken o sayfada aktif geçen süreyi (saniye) de yollar.
 * Çerez yok, kişisel veri yok, IP saklanmaz. "Do Not Track" açıksa hiç çalışmaz.
 */
const ENDPOINT = "https://woodstonestudio-growth.vercel.app/api/hit";
const MAX_SLICE = 30 * 60; // tek parçada en fazla 30 dk say (unutulan açık sekme şişirmesin)

function beacon(data: Record<string, unknown>) {
  const body = JSON.stringify(data);
  const sent = navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "text/plain" }));
  if (!sent) void fetch(ENDPOINT, { method: "POST", body, keepalive: true, mode: "no-cors" }).catch(() => undefined);
}

export function VisitTracker() {
  const path = usePathname();
  useEffect(() => {
    let cleanup = () => {};
    try {
      if (location.hostname === "localhost" || navigator.doNotTrack === "1") return;
      let first = false;
      try {
        first = !sessionStorage.getItem("wss-s");
        sessionStorage.setItem("wss-s", "1");
      } catch {
        first = true;
      }
      const q = new URLSearchParams(location.search);
      beacon({
        p: path,
        r: first ? document.referrer : "",
        u: q.get("utm_source") ?? "",
        e: first,
        l: document.documentElement.lang,
      });

      // Aktif süre: sekme görünürken geçen zaman, parça parça yollanır (sunucu toplar)
      let start = document.visibilityState === "visible" ? Date.now() : 0;
      const flush = () => {
        if (!start) return;
        const d = Math.min(MAX_SLICE, Math.round((Date.now() - start) / 1000));
        start = 0;
        if (d >= 1) beacon({ p: path, d });
      };
      const onVis = () => {
        if (document.visibilityState === "hidden") flush();
        else start = Date.now();
      };
      document.addEventListener("visibilitychange", onVis);
      window.addEventListener("pagehide", flush);
      cleanup = () => {
        document.removeEventListener("visibilitychange", onVis);
        window.removeEventListener("pagehide", flush);
        flush(); // site içinde başka sayfaya geçiş
      };
    } catch {
      /* sayaç hiçbir zaman siteyi bozmasın */
    }
    return () => cleanup();
  }, [path]);
  return null;
}
