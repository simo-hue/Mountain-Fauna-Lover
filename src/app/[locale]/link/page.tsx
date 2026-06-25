import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Globe, ArrowUpRight } from "lucide-react";

const InstagramIcon = ({ className, strokeWidth }: { className?: string, strokeWidth?: number }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className, strokeWidth }: { className?: string, strokeWidth?: number }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 7.1C2.6 6.3 3.3 5.6 4.1 5.5 6.8 5 12 5 12 5s5.2 0 7.9.5c.8.1 1.5.8 1.6 1.6.4 2.3.4 4.9.4 4.9s0 2.6-.4 4.9c-.1.8-.8 1.5-1.6 1.6-2.7.5-7.9.5-7.9.5s-5.2 0-7.9-.5c-.8-.1-1.5-.8-1.6-1.6C2 14.5 2 11.9 2 11.9s0-2.6.5-4.8z" />
    <polygon points="9.75 15.02 15.5 11.97 9.75 8.92 9.75 15.02" />
  </svg>
);

const TiktokIcon = ({ className, strokeWidth }: { className?: string, strokeWidth?: number }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.links" });

  // Standalone bio page that duplicates /links — keep it out of the index and
  // point its canonical at the indexable /links route.
  return {
    title: `${t("title")}`,
    description: t("description"),
    robots: { index: false, follow: true },
    alternates: { canonical: `${siteConfig.siteUrl}/${locale}/links` },
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
    { label: t("instagram"), url: "https://www.instagram.com/mountainfaunalover/", external: true, Icon: InstagramIcon },
    { label: t("tiktok"), url: "https://www.tiktok.com/@mountainfaunalover", external: true, Icon: TiktokIcon },
    { label: t("youtube"), url: "https://www.youtube.com/@mountainfaunalover", external: true, Icon: YoutubeIcon },
    { label: t("website"), url: "/", external: false, Icon: Globe },
  ] as const;

  return (
    <main className="fixed inset-0 h-[100dvh] w-[100vw] flex flex-col items-center justify-center px-6 overflow-hidden bg-[#030303] selection:bg-[#bee9ff]/20">
      {/* Background Effects */}
      <div className="absolute inset-0 scope-grid z-0 opacity-40 pointer-events-none" />
      <div className="absolute inset-0 noise z-0 pointer-events-none" />

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-[#bee9ff] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-white rounded-full mix-blend-screen filter blur-[100px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center my-auto">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Logo Glow */}
            <div className="absolute inset-4 bg-white rounded-full filter blur-2xl opacity-[0.06]" />
            <Image
              src="/logo/mountain-fauna-logo-v2.webp"
              alt="Mountain Fauna Lover Logo"
              width={400}
              height={400}
              className="w-full h-full object-contain drop-shadow-2xl relative z-10 scale-[1.35]"
              priority
            />
          </div>

          <div className="flex flex-col items-center gap-1.5 -mt-2">
            <h1 className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white/90">
              {t("subtitle")}
            </h1>
            <p className="text-[0.6rem] tracking-[0.15em] uppercase text-white/40">
              Trentino - Alto Adige
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, i) => {
            const Icon = link.Icon;
            const className = "group relative w-full flex items-center justify-between p-4 px-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.15] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(190,233,255,0.05)] active:scale-[0.98] overflow-hidden focus-ring touch-manipulation";

            const content = (
              <>
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.04] border border-white/5 group-hover:bg-white/[0.08] group-hover:border-white/10 transition-colors">
                    <Icon className="w-[14px] h-[14px] text-white/50 group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>
                  <span className="text-white/80 font-medium tracking-wide text-[14px] group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors relative z-10" strokeWidth={1.5} />
              </>
            );

            if (link.external) {
              return (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={className}>
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={i}
                href={link.url}
                prefetch={false}
                className={className}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
