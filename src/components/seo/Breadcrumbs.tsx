import { Link } from "@/i18n/navigation";
import type { BreadcrumbTrailItem } from "@/lib/schema";

/**
 * Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted from
 * the page graph using the same `trail`, so markup and schema never drift.
 */
export function Breadcrumbs({ trail }: { trail: BreadcrumbTrailItem[] }) {
  if (trail.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.58rem] tracking-[0.14em] text-white/35 uppercase">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;

          return (
            <li key={item.path || "home"} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-white/55">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path || "/"}
                    className="focus-ring rounded-sm transition hover:text-white/70"
                  >
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="text-white/20">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
