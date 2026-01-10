"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "gradient-primary text-white shadow-clayButton hover:shadow-clayButtonHover",
  secondary:
    "bg-white text-clay-foreground shadow-clayButton hover:shadow-clayButtonHover",
  outline:
    "border-2 border-clay-accent/20 bg-transparent text-clay-accent hover:border-clay-accent hover:bg-clay-accent/5",
  ghost:
    "text-clay-foreground hover:bg-clay-accent/10 hover:text-clay-accent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-11 px-5 text-sm",
  md: "h-14 px-7 text-base",
  lg: "h-16 px-9 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`
          inline-flex items-center justify-center gap-2
          font-bold tracking-wide
          rounded-[20px]
          btn-squish
          focus-visible:ring-4 focus-visible:ring-clay-accent/30 focus-visible:ring-offset-2 focus-visible:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        style={{ fontFamily: "var(--font-heading)" }}
        {...props}
      >
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
