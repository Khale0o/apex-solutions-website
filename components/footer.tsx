import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { SocialLinks } from "@/components/social-links";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandLogo imageClassName="ring-1 ring-white/15" />
          <p className="mt-2 text-sm text-white/52">
            Premium product engineering for startup teams.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-full text-sm text-white/62 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
