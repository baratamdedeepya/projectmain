import React from 'react';
import { motion } from 'framer-motion';

export const NavItem = ({
  label,
  href = '#',
  active = false,
  icon: Icon,
  badge,
  onClick,
  variant = 'header',
}) => {
  if (variant === 'sidebar') {
    return (
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-all text-left ${
          active
            ? 'bg-indigo-50/90 text-indigo-700 font-semibold'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
        }`}
      >
        <div className="flex items-center gap-2.5">
          {Icon && (
            <Icon
              className={`w-4 h-4 ${
                active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'
              }`}
            />
          )}
          <span>{label}</span>
        </div>
        {badge && (
          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-indigo-100 text-indigo-700 font-semibold">
            {badge}
          </span>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`relative px-3 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none rounded-lg group ${
        active ? 'text-indigo-600 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
      }`}
    >
      <span className="relative z-10">{label}</span>

      {active && (
        <motion.div
          layoutId="header-active-line"
          className="absolute bottom-0 left-2 right-2 h-0.5 bg-indigo-600 rounded-full"
          transition={{ type: 'spring', stiffness: 450, damping: 32 }}
        />
      )}
    </button>
  );
};
