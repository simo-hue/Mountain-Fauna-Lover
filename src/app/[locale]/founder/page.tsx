import Image from "next/image";
import { ArrowUpRight, Binoculars, Code2, MountainSnow } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqSection } from "@/components/seo/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { socials } from "@/config/socials";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";
import { buildPageSeo } from "@/lib/page-seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.founder" });

  return createPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/founder",
  });
}

export default async function FounderPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("founder");
  const { graph, trail } = await buildPageSeo({
    locale,
    path: "/founder",
    metaNamespace: "metadata.founder",
    labelKey: "nav.founder",
    faqNamespace: "faq.founder",
    isProfile: true,
  });
  const pillars = [
    { icon: Binoculars, key: "observation" },
    { icon: MountainSnow, key: "mountain" },
    { icon: Code2, key: "technology" },
  ] as const;

  return (
    <>
      <JsonLd data={graph} />
      <PageHero
        code="FIELD / MS"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        breadcrumb={<Breadcrumbs trail={trail} />}
      />

      <section className="px-5 py-24 sm:px-8 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/12 bg-[#080808]">
              <Image
                src="/images/founder/founder.jpeg"
                alt={t("portraitAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
              <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between border-t border-white/16 pt-4">
                <div>
                  <p className="text-lg font-light">Mattioli Simone</p>
                  <p className="mt-1 text-[0.58rem] tracking-[0.17em] text-white/38 uppercase">
                    Trentino-Alto Adige
                  </p>
                </div>
                <span className="font-mono text-[0.55rem] text-white/32">
                  46.40° N
                </span>
              </div>
            </div>
          </div>

          <div className="lg:pt-10 lg:pl-12">
            <p className="eyebrow">{t("story.eyebrow")}</p>
            <h2 className="mt-5 text-4xl leading-[1.02] font-light tracking-[-0.045em] sm:text-6xl">
              {t("story.title")}
            </h2>
            <div className="mt-10 space-y-7 text-base leading-8 text-white/56">
              <p>{t("story.p1")}</p>
              <p>{t("story.p2")}</p>
              <p>{t("story.p3")}</p>
              <p className="border-ice/35 border-l pl-6 text-white/72">
                {t("story.developer")}
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-3">
              {pillars.map(({ icon: Icon, key }, index) => (
                <div key={key} className="bg-[#070707] p-6">
                  <Icon className="size-5 text-white/45" />
                  <p className="mt-8 text-sm font-medium">
                    {t(`pillars.${key}.title`)}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/38">
                    {t(`pillars.${key}.description`)}
                  </p>
                  <span className="mt-7 block font-mono text-[0.52rem] text-white/20">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[0.64rem] font-semibold tracking-[0.16em] text-black uppercase transition hover:bg-white/82"
              >
                {t("linkedin")}
                <ArrowUpRight className="size-3.5" />
              </a>
              <ArrowLink href="/collaboration">{t("collaboration")}</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <FaqSection locale={locale} namespace="faq.founder" />
    </>
  );
}
