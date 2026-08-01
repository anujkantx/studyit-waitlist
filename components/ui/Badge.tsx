import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "accent" | "success" | "muted" | "building" | "next" | "planned";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "muted", children, className }: BadgeProps) {
  const variantClass = {
    primary: "badge-primary",
    accent: "badge-accent",
    success: "badge-success",
    muted: "badge-muted",
    building: "badge-building",
    next: "badge-next",
    planned: "badge-planned",
  }[variant];

  return (
    <span className={cn("badge", variantClass, className)}>
      {children}
    </span>
  );
}

// Status badge with dot indicator
interface StatusBadgeProps {
  status: "building" | "next" | "planned" | "done";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const configs = {
    building: {
      variant: "building" as const,
      label: "Building",
      dotColor: "#fde047",
    },
    next: {
      variant: "next" as const,
      label: "Next",
      dotColor: "#818cf8",
    },
    planned: {
      variant: "planned" as const,
      label: "Planned",
      dotColor: "#71717a",
    },
    done: {
      variant: "success" as const,
      label: "Done",
      dotColor: "#4ade80",
    },
  };

  const config = configs[status];

  return (
    <Badge variant={config.variant} className={className}>
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: config.dotColor,
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      {config.label}
    </Badge>
  );
}
