"use client";

import { useLocale } from "next-intl";
import { Languages } from "lucide-react";

import { usePathname, useRouter } from "@/i18n/navigation";

export function LocaleSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale = locale === "en" ? "it" : "en";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-2 text-[0.68rem] font-medium tracking-[0.22em] text-white/72 uppercase transition hover:border-white/35 hover:text-white"
      aria-label={`Switch language to ${nextLocale.toUpperCase()}`}
    >
      <Languages aria-hidden="true" className="size-3.5" />
      {!compact && <span>{locale}</span>}
    </button>
  );
}
