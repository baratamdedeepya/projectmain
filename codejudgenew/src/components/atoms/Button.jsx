import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  disabled = false,
  loading = false,
  ...props
}) => {
  
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none outline-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2 font-medium',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5 font-semibold',
    icon: 'p-2 rounded-lg',
  };

  const variantStyles = {
    primary: 'bg-[#5551FF] hover:bg-[#4338CA] text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30',
    dark: 'bg-[#0f172a] hover:bg-[#1e293b] text-white shadow-md shadow-slate-900/10 hover:shadow-slate-900/20',
    outline: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 shadow-2xs',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-700',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70',
    submit: 'bg-[#5b52f9] hover:bg-[#4c42e8] text-white shadow-xs text-xs font-semibold px-4 py-1.5 rounded-md gap-1.5',
    editorRun: 'bg-[#222836] hover:bg-[#2b3345] text-slate-200 text-xs font-medium px-3.5 py-1.5 rounded-md border border-slate-700/60 gap-1.5 transition-colors',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02, y: disabled || loading ? 0 : -1 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
        </>
      )}
    </motion.button>
  );
};
