import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  showText?: boolean;
};

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
  showText = true,
}: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="relative grid size-10 shrink-0 place-items-center rounded-full shadow-glow">
        <Image
          src="/brand/apex-logo.png"
          alt="APEX Solutions logo"
          width={80}
          height={80}
          priority={priority}
          className={cn("h-full w-full rounded-full object-contain", imageClassName)}
        />
      </span>
      {showText && (
        <span className="font-heading text-lg font-bold tracking-normal text-white">
          APEX Solutions
        </span>
      )}
    </div>
  );
}
