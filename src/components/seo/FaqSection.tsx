import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";

import type { AppLocale } from "@/i18n/routing";
import type { FaqItem } from "@/lib/schema";

/**
 * Additive FAQ block built only from facts already stated elsewhere on the site.
 * Native <details>/<summary> means zero client JS, full keyboard accessibility
 * and crawlable answer text. The FAQPage JSON-LD is emitted from the page graph
 * using the same message keys.
 */
export async function FaqSection({
  locale,
  namespace,
}: {
  locale: AppLocale;
  namespace: string;
}) {
  const t = await getTranslations({ locale, namespace });
  const items = t.raw("items") as FaqItem[];

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section className="border-t border-white/8 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">{t("eyebrow")}</p>
        <h2 className="mt-4 text-3xl leading-[1.05] font-light tracking-[-0.04em] sm:text-5xl">
          {t("title")}
        </h2>

        <div className="mt-12 border-t border-white/10">
          {items.map((item, index) => (
            <details
              key={index}
              className="group border-b border-white/10"
              name="faq"
            >
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-light text-white/85 transition hover:text-white sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-4 shrink-0 text-white/40 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="max-w-2xl pb-7 text-sm leading-7 text-white/52">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
