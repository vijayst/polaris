import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export type HeroModule = {
  Icon: LucideIcon;
  title: string;
  sub: string;
};

export type HeroLink = {
  label: string;
  href: string;
  primary?: boolean;
  external?: boolean;
};

export default function PageHero({
  icon: Icon,
  title,
  badges = [],
  subtitle,
  description,
  modules = [],
  links = [],
}: {
  icon?: LucideIcon;
  title: string;
  badges?: string[];
  subtitle?: string;
  description?: string;
  modules?: HeroModule[];
  links?: HeroLink[];
}) {
  return (
    <section className="hero-glow relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-blue to-brand-purple">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {(Icon || badges.length > 0) && (
            <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
              {Icon && (
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-sm">
                  <Icon className="h-7 w-7" />
                </span>
              )}
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-balance text-3xl font-bold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-white/95 sm:text-lg">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
              {description}
            </p>
          )}
        </div>

        {modules.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map(({ Icon: ModuleIcon, title: moduleTitle, sub }) => (
              <div
                key={moduleTitle}
                className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <ModuleIcon className="h-5 w-5 text-white" />
                <p className="mt-2.5 text-sm font-semibold text-white">
                  {moduleTitle}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/75">
                  {sub}
                </p>
              </div>
            ))}
          </div>
        )}

        {links.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {links.map((link) =>
              link.primary ? (
                <Link
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-900 shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="rounded-full border border-white/40 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
