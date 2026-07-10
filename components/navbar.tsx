"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MagneticButton } from "@/components/magnetic-button";
import { SocialLinks } from "@/components/social-links";
import { whatsappUrl } from "@/lib/brand";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why APEX" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-apex-night/35 backdrop-blur-[2px] lg:hidden"
        />
      )}
      <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary navigation"
        className="glass mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between rounded-full px-4 shadow-[0_18px_80px_rgba(0,0,0,0.42)] sm:px-5"
      >
        <Link href="#top" className="focus-ring group rounded-full">
          <BrandLogo
            priority
            className="transition duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-full px-3 py-2 text-sm text-white/72 transition duration-300 hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialLinks />
          <MagneticButton
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-10 px-5 py-2"
          >
            Start a project
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="focus-ring grid size-10 place-items-center rounded-full border border-white/15 transition hover:border-apex-cyan hover:text-apex-cyan lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "glass mx-auto mt-3 w-[calc(100%-8px)] max-w-6xl rounded-2xl p-3 shadow-[0_26px_90px_rgba(0,0,0,0.45)] transition duration-300 lg:hidden",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="grid gap-1.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-white/78 transition hover:border-white/10 hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <SocialLinks
            showLabels
            className="mt-3 grid grid-cols-2 gap-2"
            iconClassName="justify-center rounded-xl"
          />
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="focus-ring sheen mt-3 rounded-xl bg-apex-blue px-4 py-3.5 text-center text-sm font-semibold shadow-blue-glow transition hover:-translate-y-0.5"
          >
            Start a project
          </Link>
        </div>
      </div>
      </header>
    </>
  );
}
