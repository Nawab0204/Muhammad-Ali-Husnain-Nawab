/**
 * Standardized Input & Form field components.
 * Accessible with label, error message, and clean focus outline.
 */

import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  required,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5 text-left">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-semibold text-[#0A1020]">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        id={inputId}
        required={required}
        className={`w-full px-4 py-2.5 bg-white border text-sm text-[#0A1020] rounded-xl placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#006BFF] focus:border-transparent ${
          error ? 'border-red-400 focus:ring-red-400' : 'border-[#E6EBF2] hover:border-slate-300'
        } ${className}`}
        {...props}
      />

      {error ? (
        <p className="text-xs text-red-500 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-[#5D687A]">{helperText}</p>
      ) : null}
    </div>
  );
};

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  required,
  rows = 4,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5 text-left">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-semibold text-[#0A1020]">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <textarea
        id={inputId}
        rows={rows}
        required={required}
        className={`w-full px-4 py-2.5 bg-white border text-sm text-[#0A1020] rounded-xl placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#006BFF] focus:border-transparent ${
          error ? 'border-red-400 focus:ring-red-400' : 'border-[#E6EBF2] hover:border-slate-300'
        } ${className}`}
        {...props}
      />

      {error ? (
        <p className="text-xs text-red-500 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-[#5D687A]">{helperText}</p>
      ) : null}
    </div>
  );
};
