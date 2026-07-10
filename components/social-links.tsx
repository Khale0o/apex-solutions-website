import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { socialLinks } from "@/lib/brand";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  showLabels?: boolean;
};

const items = [
  { href: socialLinks.instagram, label: "Instagram", icon: Instagram },
  { href: socialLinks.facebook, label: "Facebook", icon: Facebook },
];

export function SocialLinks({ className, iconClassName, showLabels = false }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`APEX Solutions on ${item.label}`}
            className={cn(
              "focus-ring sheen inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 text-sm text-white/72 transition duration-300 hover:-translate-y-0.5 hover:border-apex-cyan/55 hover:bg-white/10 hover:text-white",
              iconClassName,
            )}
          >
            <Icon aria-hidden="true" className="size-4" />
            {showLabels && <span>{item.label}</span>}
          </Link>
        );
      })}
    </div>
  );
}
