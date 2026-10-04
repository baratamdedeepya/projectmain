import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  dot = false,
  dotColor = 'bg-emerald-500',
  ...props
}) => {
  
  const baseStyles = 'inline-flex items-center gap-1.5 font-medium rounded-lg transition-all duration-200 select-none';
  
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-md',
    md: 'text-xs px-3 py-1 rounded-lg',
    lg: 'text-sm px-3.5 py-1.5 rounded-lg',
  };

  const variantStyles = {
    default: 'bg-slate-100 text-slate-700 border border-slate-200/80',
    primary: 'bg-indigo-50 text-indigo-600 border border-indigo-200/80',
    success: 'bg-emerald-50 text-emerald-600 border border-emerald-200/80',
    warning: 'bg-amber-50 text-amber-600 border border-amber-200/80',
    easy: 'bg-emerald-50 text-emerald-600 font-semibold',
    medium: 'bg-amber-50 text-amber-600 font-semibold',
    hard: 'bg-rose-50 text-rose-600 font-semibold',
    dark: 'bg-slate-800 text-slate-200 border border-slate-700',
    hero: 'bg-white/90 backdrop-blur-md text-slate-700 border border-slate-200/90 shadow-xs hover:border-indigo-300 hover:shadow-sm',
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
        </span>
      )}
      {children}
    </span>
  );
};
