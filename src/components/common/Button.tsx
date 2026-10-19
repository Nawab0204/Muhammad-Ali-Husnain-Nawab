/**
 * Standardized polymorphic Button component following anti-slop guidelines.
 * Single line labels (whitespace-nowrap shrink-0), WCAG AA focus rings, and clear loading state.
 */

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#006BFF] hover:bg-[#087CFF] text-white shadow-sm shadow-blue-500/20 active:translate-y-0.5 border border-transparent',
    secondary:
      'bg-[#F3F7FC] hover:bg-[#EAF1FA] text-[#006BFF] border border-[#006BFF]/20 active:translate-y-0.5',
    outline:
      'bg-white hover:bg-slate-50 text-[#0A1020] border border-[#E6EBF2] hover:border-[#006BFF]/40 active:translate-y-0.5',
    ghost:
      'bg-transparent hover:bg-slate-100/80 text-[#5D687A] hover:text-[#0A1020]',
    danger:
      'bg-red-600 hover:bg-red-700 text-white shadow-sm shadow-red-500/20 active:translate-y-0.5',
  }[variant];

  return (
    <button
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center font-semibold whitespace-nowrap shrink-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006BFF] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
