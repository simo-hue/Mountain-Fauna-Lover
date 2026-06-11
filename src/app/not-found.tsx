import Link from "next/link";

import { BrandMark } from "@/components/ui/BrandMark";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-[#030303] px-6 text-center text-white">
      <div>
        <BrandMark className="mx-auto mb-6 size-20 text-white/60" />
        <p className="eyebrow">404 · Observation lost</p>
        <h1 className="mt-4 text-4xl font-light">
          This trail disappears here.
        </h1>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex rounded-full border border-white/20 px-5 py-3 text-xs tracking-[0.18em] uppercase"
        >
          Return to base
        </Link>
      </div>
    </main>
  );
}
