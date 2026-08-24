import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

type SocialIconProps = { className?: string };

const FacebookIcon = ({ className }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);

const XIcon = ({ className }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
  </svg>
);

const LinkedinIcon = ({ className }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const GithubIcon = ({ className }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.42 9.42 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const YoutubeIcon = ({ className }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
  </svg>
);

const socials = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { label: "GitHub", href: "#", Icon: GithubIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
];

const latestPosts = [
  { label: "GitHub Acquisition", href: "https://bit.ly/3FldaBd" },
  { label: "Monetization Strategies", href: "https://bit.ly/3VLficA" },
];

const recentNews = [
  { label: "Business News", href: "https://hbr.org/" },
  { label: "Platforms News", href: "https://platformthinkinglabs.com/" },
  { label: "How Stuff Works", href: "https://www.howstuffworks.com/" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Our Contact
            </h5>
            <address className="not-italic">
              <p className="font-semibold text-white">{SITE.name}</p>
              {SITE.address.map((line) => (
                <p key={line} className="text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </address>
            <p className="mt-4 space-y-1.5 text-sm">
              <span className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-brand-400" />
                {SITE.phone}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-brand-400" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-brand-300"
                >
                  {SITE.email}
                </a>
              </span>
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.children ? link.children[0].href : link.href}
                    className="transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Latest Posts
            </h5>
            <ul className="space-y-2 text-sm">
              {latestPosts.map((post) => (
                <li key={post.label}>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-300"
                  >
                    {post.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Recent News
            </h5>
            <ul className="space-y-2 text-sm">
              {recentNews.map((news) => (
                <li key={news.label}>
                  <a
                    href={news.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-300"
                  >
                    {news.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} PolarisAI Labs. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  title={label}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-brand-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
