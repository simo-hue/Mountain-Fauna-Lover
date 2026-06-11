"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-5 flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {index && (
          <span className="font-mono text-[0.58rem] text-white/28">
            {index}
          </span>
        )}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="text-4xl leading-[0.98] font-light tracking-[-0.045em] text-balance text-white sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
