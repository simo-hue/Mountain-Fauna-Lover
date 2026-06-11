import { cn } from "@/lib/utils";

export function FogLayer({
  className,
  strength = "medium",
}: {
  className?: string;
  strength?: "soft" | "medium" | "strong";
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "fog-bank absolute -inset-x-[30%] top-[18%] h-[34%] rounded-[100%] bg-white blur-[90px]",
          strength === "soft" && "opacity-[0.035]",
          strength === "medium" && "opacity-[0.065]",
          strength === "strong" && "opacity-[0.1]",
        )}
      />
      <div
        className={cn(
          "fog-bank-reverse absolute -inset-x-[25%] bottom-[6%] h-[26%] rounded-[100%] bg-white blur-[110px]",
          strength === "soft" && "opacity-[0.025]",
          strength === "medium" && "opacity-[0.05]",
          strength === "strong" && "opacity-[0.08]",
        )}
      />
    </div>
  );
}
