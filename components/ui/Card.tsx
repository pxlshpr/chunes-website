"use client";

import { type ReactNode, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "accent" | "secondary" | "muted";
  hoverable?: boolean;
  rotation?: number;
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "accent" | "secondary" | "muted";
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const cardVariants = {
  default: "bg-white",
  accent: "bg-neo-accent",
  secondary: "bg-neo-secondary",
  muted: "bg-neo-muted",
};

const headerVariants = {
  default: "bg-neo-background",
  accent: "bg-neo-accent",
  secondary: "bg-neo-secondary",
  muted: "bg-neo-muted",
};

export function Card({
  children,
  variant = "default",
  hoverable = false,
  rotation = 0,
  className = "",
  ...props
}: CardProps) {
  const rotationClass =
    rotation > 0 ? `rotate-${rotation}` : rotation < 0 ? `-rotate-${Math.abs(rotation)}` : "";

  return (
    <div
      className={`
        ${cardVariants[variant]}
        border-4 border-black
        shadow-neo-md
        ${hoverable ? "card-lift cursor-pointer" : ""}
        ${rotationClass}
        ${className}
      `}
      style={rotation !== 0 ? { transform: `rotate(${rotation}deg)` } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  variant = "default",
  className = "",
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={`
        ${headerVariants[variant]}
        border-b-4 border-black
        px-6 py-4
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }: CardContentProps) {
  return (
    <div className={`px-6 py-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
