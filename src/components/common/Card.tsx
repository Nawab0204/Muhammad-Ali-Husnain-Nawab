/**
 * Standardized Card container component.
 * Single elevation, hairline borders, anti-slop padding math.
 */

import React, { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isInteractive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  isInteractive = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`bg-white border border-[#E6EBF2] rounded-2xl p-6 transition-all duration-200 ${
        isInteractive
          ? 'hover:border-[#006BFF] hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 cursor-pointer'
          : 'shadow-sm shadow-slate-900/5'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
