import { ArrowUpRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      data-cursor="magnetic"
      className={cn(
        "focus-ring group inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/[0.035] px-5 py-3 text-[0.65rem] font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-md transition hover:border-white/40 hover:bg-white/8",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
