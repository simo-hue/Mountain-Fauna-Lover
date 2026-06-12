import {
  Aperture,
  Bike,
  Camera,
  MountainSnow,
  Telescope,
  WandSparkles,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/layout/PageHero";
import { gearItems } from "@/config/gear";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

const icons = [Telescope, Camera, Aperture, MountainSnow, Bike, WandSparkles];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.gear" });

  return createPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/gear",
  });
}

export default async function GearPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <PageHero
        code="KIT / FIELD"
        eyebrow={t("gear.page.eyebrow")}
        title={t("gear.page.title")}
        description={t("gear.page.description")}
      />
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">


          <div className="grid gap-5 md:grid-cols-2">
            {gearItems.map((item, index) => {
              const Icon = icons[index];
              return (
                <article
                  key={item.id}
                  data-cursor={
                    item.category === "ebikeOffroad" ? "bike" : "technical"
                  }
                  className="group relative min-h-80 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#080808] p-7 transition duration-500 hover:border-white/22 sm:p-9"
                >
                  <div className="scope-grid absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-30" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full border border-white/14 bg-white/[0.025]">
                        <Icon className="size-5 text-white/50" />
                      </span>
                      <span className="font-mono text-[0.55rem] tracking-[0.14em] text-white/24">
                        KIT / {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-auto pt-16">
                      <p className="eyebrow">
                        {t(`gear.categories.${item.category}`)}
                      </p>
                      <h2 className="mt-3 text-3xl font-light tracking-tight">
                        {t(`gear.${item.nameKey}`)}
                      </h2>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/43">
                        {t(`gear.${item.descriptionKey}`)}
                      </p>
                      <p className="mt-6 text-[0.55rem] tracking-[0.15em] text-white/25 uppercase">
                        {t("gear.page.notSponsored")}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
