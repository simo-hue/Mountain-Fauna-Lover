import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-white", className)}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.25" />
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="currentColor"
        strokeOpacity=".28"
        strokeWidth=".75"
      />
      <path
        d="M19 66 37 44l11 12 13-20 21 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M44 49c-2-7-7-9-11-11m12 9c-1-8 2-13 5-17m6 20c3-8 8-10 13-12m-14 9c1-8-1-13-3-17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M43 47c2-4 12-4 14 0 2 5 0 13-7 16-7-3-9-11-7-16Z"
        fill="currentColor"
        fillOpacity=".16"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M50 4v10M50 86v10M4 50h10M86 50h10" stroke="currentColor" />
      <circle cx="50" cy="50" r="2" fill="currentColor" />
    </svg>
  );
}
