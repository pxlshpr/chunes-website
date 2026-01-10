"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="font-bold text-sm text-clay-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            h-16 px-6 py-4
            bg-[#EFEBF5]
            border-0
            rounded-2xl
            font-medium text-lg text-clay-foreground
            shadow-clayPressed
            placeholder:text-clay-muted
            focus:bg-white
            focus:ring-4 focus:ring-clay-accent/20
            focus:outline-none
            transition-all duration-200
            ${error ? "ring-2 ring-red-400" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-red-500 font-medium text-sm">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
