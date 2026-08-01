import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  size = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Badge variant="primary">{eyebrow}</Badge>
      )}
      <h2
        className={cn(
          size === "lg" ? "display-lg" : "display-md",
          "max-w-[720px]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-xl-body",
            align === "center" && "max-w-[560px]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
