"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Çerezsiz ziyaret sayacı. Her sayfa açılışında Growth paneline küçük bir sinyal yollar:
 * sayfa yolu, (yalnızca ilk sayfada) geldiği site ve dil. Çerez yok, kişisel veri yok,
 * IP saklanmaz. "Do Not Track" açıksa hiç çalışmaz.
 */
const ENDPOINT = "https://woodstonestudio-growth.vercel.app/api/hit";

export function VisitTracker() {
  const path = usePathname();
  useEffect(() => {
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
      const body = JSON.stringify({
        p: path,
        r: first ? document.referrer : "",
        u: q.get("utm_source") ?? "",
        e: first,
        l: document.documentElement.lang,
      });
      const sent = navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "text/plain" }));
      if (!sent) void fetch(ENDPOINT, { method: "POST", body, keepalive: true, mode: "no-cors" }).catch(() => undefined);
    } catch {
      /* sayaç hiçbir zaman siteyi bozmasın */
    }
  }, [path]);
  return null;
}
