"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";
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
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary navigation"
        className="glass mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between rounded-full px-5"
      >
        <Link href="#top" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid size-9 place-items-center rounded-full bg-apex-blue shadow-glow">
            <span className="font-heading text-base font-bold">A</span>
          </span>
          <span className="font-heading text-lg font-bold tracking-normal">APEX Solutions</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-full text-sm text-white/72 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <MagneticButton href="#contact" className="min-h-10 px-5 py-2">
            Start a project
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="focus-ring grid size-10 place-items-center rounded-full border border-white/15 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "glass mx-auto mt-3 w-[calc(100%-24px)] max-w-6xl rounded-lg p-4 transition md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="grid gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md px-3 py-3 text-sm text-white/78"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="focus-ring mt-2 rounded-md bg-apex-blue px-3 py-3 text-center text-sm font-semibold"
          >
            Start a project
          </Link>
        </div>
      </div>
    </header>
  );
}
