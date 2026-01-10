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
            className="font-black text-sm uppercase tracking-widest"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            h-14 px-4
            bg-white
            border-4 border-black
            font-bold text-lg
            placeholder:text-black/40
            focus-visible:bg-neo-secondary
            focus-visible:shadow-neo-sm
            focus-visible:outline-none
            focus-visible:ring-0
            transition-all duration-100
            ${error ? "border-neo-accent bg-red-50" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-neo-accent font-bold text-sm uppercase tracking-wide">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
