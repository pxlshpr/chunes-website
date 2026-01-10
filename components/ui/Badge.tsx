"use client";

import { type ReactNode, type HTMLAttributes } from "react";

type BadgeVariant = "default" | "accent" | "success" | "warning" | "muted";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  pill?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-white text-clay-foreground shadow-clayCard",
  accent: "gradient-primary text-white shadow-clayButton",
  success: "bg-clay-success text-white",
  warning: "bg-clay-warning text-white",
  muted: "bg-clay-muted/10 text-clay-muted",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-1.5 text-sm",
  lg: "px-5 py-2 text-base",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  pill = true,
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-bold
        ${pill ? "rounded-full" : "rounded-[12px]"}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      style={{ fontFamily: "var(--font-heading)" }}
      {...props}
    >
      {children}
    </span>
  );
}
