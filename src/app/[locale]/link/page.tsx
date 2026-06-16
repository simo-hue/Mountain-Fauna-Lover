import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.links" });
  
  return {
    title: `Linktree — ${t("title")}`,
    description: t("description"),
  };
}

export default async function LinkPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("linkPage");

  const links = [
    { label: t("instagram"), url: "https://www.instagram.com/mountainfaunalover/", external: true },
    { label: t("tiktok"), url: "https://www.tiktok.com/@mountainfaunalover", external: true },
    { label: t("youtube"), url: "https://www.youtube.com/@mountainfaunalover", external: true },
    { label: t("website"), url: "/", external: false },
    { label: t("collab"), url: "/collaboration", external: false },
  ];

  return (
    <main className="min-h-[100dvh] flex flex-col items-center py-16 px-6 relative overflow-hidden bg-black selection:bg-white/10">
      <div className="absolute inset-0 scope-grid z-0 opacity-60" />
      <div className="absolute inset-0 noise z-0" />
      
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="relative w-28 h-28 flex items-center justify-center shadow-2xl">
            <Image
              src="/logo/mountain-fauna-logo-v2.png"
              alt="Mountain Fauna Lover Logo"
              width={150}
              height={150}
              className="w-full h-full object-contain drop-shadow-lg"
              priority
            />
          </div>
          <h1 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70">
            {t("subtitle")}
          </h1>
        </div>

        <div className="w-full flex flex-col gap-3">
          {links.map((link, i) => {
            const className = "w-full flex items-center justify-center py-4 px-6 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md text-white/90 font-medium text-[15px] transition-all hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] active:scale-[0.98] focus-ring touch-manipulation shadow-sm";
            
            if (link.external) {
              return (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={className}>
                  {link.label}
                </a>
              );
            }
            
            return (
              <Link key={i} href={link.url as any} className={className}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
