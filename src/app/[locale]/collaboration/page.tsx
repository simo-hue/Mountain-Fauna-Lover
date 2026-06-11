import {
  Bike,
  Camera,
  Compass,
  MountainSnow,
  PackageSearch,
  Trees,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CollaborationForm } from "@/components/forms/CollaborationForm";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/config/site";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";
import { collaborationTypes } from "@/lib/validations";

const icons = [MountainSnow, Compass, Trees, PackageSearch, Bike, Camera];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "metadata.collaboration",
  });

  return createPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/collaboration",
  });
}

export default async function CollaborationPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("collaboration");

  return (
    <>
      <PageHero
        code="OPEN / SELECTED"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="eyebrow">{t("typesEyebrow")}</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-light tracking-[-0.045em] sm:text-6xl">
              {t("typesTitle")}
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {collaborationTypes.map((type, index) => {
              const Icon = icons[index];
              return (
                <article key={type} className="bg-[#080808] p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 text-white/45" />
                    <span className="font-mono text-[0.54rem] text-white/20">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-12 text-xl font-light">
                    {t(`types.${type}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {t(`types.${type}.description`)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#070707] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">{t("contact.eyebrow")}</p>
            <h2 className="mt-5 text-4xl leading-[1.02] font-light tracking-[-0.045em] sm:text-6xl">
              {t("contact.title")}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/46">
              {t("contact.description")}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="focus-ring mt-7 inline-block rounded-sm text-sm text-white underline decoration-white/30 underline-offset-8 transition hover:decoration-white"
            >
              {siteConfig.email}
            </a>
          </div>
          <CollaborationForm />
        </div>
      </section>
    </>
  );
}
