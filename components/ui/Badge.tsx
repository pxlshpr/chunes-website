"use client";

import { type ReactNode, type HTMLAttributes } from "react";

type BadgeVariant = "default" | "accent" | "secondary" | "muted" | "black";
type BadgeSize = "sm" | "md" | "lg";
type BadgeShape = "square" | "pill";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  shape?: BadgeShape;
  rotation?: number;
  animated?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-white text-black border-black",
  accent: "bg-neo-accent text-black border-black",
  secondary: "bg-neo-secondary text-black border-black",
  muted: "bg-neo-muted text-black border-black",
  black: "bg-black text-white border-black",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
};

const shapeStyles: Record<BadgeShape, string> = {
  square: "rounded-none",
  pill: "rounded-full",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  shape = "square",
  rotation = 0,
  animated = false,
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-black uppercase tracking-widest
        border-4 shadow-neo-sm
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${shapeStyles[shape]}
        ${animated ? "animate-wiggle" : ""}
        ${className}
      `}
      style={rotation !== 0 ? { transform: `rotate(${rotation}deg)` } : undefined}
      {...props}
    >
      {children}
    </span>
  );
}
