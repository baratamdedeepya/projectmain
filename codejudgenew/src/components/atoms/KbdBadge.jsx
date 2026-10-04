import React from 'react';

export const KbdBadge = ({ children = '⌘ K', className = '' }) => {
  return (
    <kbd className={`inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded shadow-xs select-none ${className}`}>
      {children}
    </kbd>
  );
};
