import type { ReactNode } from "react";
import { useTranslations } from "next-intl";

import { CustomCursor } from "../cinematic/CustomCursor";
import { MotionProvider } from "../motion/MotionProvider";
import { CookieConsent } from "./CookieConsent";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function PageShell({ children }: { children: ReactNode }) {
  const t = useTranslations("a11y");

  return (
    <div className="relative min-h-dvh overflow-clip bg-[#030303] text-white">
      <a
        href="#main-content"
        className="focus-ring fixed top-3 left-3 z-[100] -translate-y-20 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition focus:translate-y-0"
      >
        {t("skip")}
      </a>
      <MotionProvider>
        <CustomCursor />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
      </MotionProvider>
    </div>
  );
}
