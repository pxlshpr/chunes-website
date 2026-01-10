"use client";

import { type ReactNode, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "glass" | "solid";
  hoverable?: boolean;
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  gradient?: boolean;
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const cardVariants = {
  default: "bg-white/70 backdrop-blur-xl",
  glass: "glass",
  solid: "bg-white",
};

export function Card({
  children,
  variant = "default",
  hoverable = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-[32px]
        text-clay-foreground
        shadow-clayCard
        ${cardVariants[variant]}
        ${hoverable ? "card-lift cursor-pointer hover:shadow-clayCardHover" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  gradient = false,
  className = "",
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={`
        px-8 py-6
        ${gradient ? "gradient-primary text-white" : "border-b border-clay-accent/10"}
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
    <div className={`px-8 py-8 ${className}`} {...props}>
      {children}
    </div>
  );
}
