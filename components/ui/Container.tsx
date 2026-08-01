import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  width?: "narrow" | "content" | "wide" | "full";
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  width = "wide",
  className,
  as: Tag = "div",
}: ContainerProps) {
  const widthClass = {
    narrow: "container-narrow",
    content: "container-content",
    wide: "container-wide",
    full: "container-full",
  }[width];

  return (
    <Tag className={cn(widthClass, className)}>
      {children}
    </Tag>
  );
}
