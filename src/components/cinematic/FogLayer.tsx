import { cn } from "@/lib/utils";

// Soft radial-gradient "fog" — visually equivalent to a blurred white blob at
// these very low opacities, but without a blur() filter. Avoids the large GPU
// blur texture and per-frame re-rasterisation that sat under the cursor on every
// page header. The drift is a pure transform, so this layer is composited, not
// repainted.
const FOG_GRADIENT =
  "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.32) 46%, transparent 72%)";

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
          "fog-bank absolute -inset-x-[30%] top-[18%] h-[34%]",
          strength === "soft" && "opacity-[0.035]",
          strength === "medium" && "opacity-[0.065]",
          strength === "strong" && "opacity-[0.1]",
        )}
        style={{ backgroundImage: FOG_GRADIENT }}
      />
      <div
        className={cn(
          "fog-bank-reverse absolute -inset-x-[25%] bottom-[6%] h-[26%]",
          strength === "soft" && "opacity-[0.025]",
          strength === "medium" && "opacity-[0.05]",
          strength === "strong" && "opacity-[0.08]",
        )}
        style={{ backgroundImage: FOG_GRADIENT }}
      />
    </div>
  );
}
