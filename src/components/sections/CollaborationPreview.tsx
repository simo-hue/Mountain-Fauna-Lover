import { useTranslations } from "next-intl";

import { FogLayer } from "../cinematic/FogLayer";
import { ArrowLink } from "../ui/ArrowLink";
import { BrandMark } from "../ui/BrandMark";
import { SectionHeading } from "../ui/SectionHeading";

export function CollaborationPreview() {
  const t = useTranslations("home.collaboration");

  return (
    <section className="relative overflow-hidden px-5 py-32 sm:px-8 sm:py-44">
      <div className="absolute inset-0 bg-[url('/images/backgrounds/alpine-night.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-black/65" />
      <FogLayer strength="medium" />
      <BrandMark className="absolute right-4 bottom-4 size-16 opacity-30 sm:right-8 sm:bottom-8 sm:size-24" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          index="07"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <ArrowLink
          href="/collaboration"
          className="mt-9 bg-white text-black hover:bg-white/85 hover:text-black"
        >
          {t("cta")}
        </ArrowLink>
      </div>
    </section>
  );
}
