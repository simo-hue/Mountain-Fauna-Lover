import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-full", className)}>
      <Image
        src="/logo/mountain-fauna-logo.png"
        alt="Mountain Fauna Logo"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
