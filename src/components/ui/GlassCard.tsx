import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[1.5rem] border border-white/10 bg-white/[0.035] backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
}
