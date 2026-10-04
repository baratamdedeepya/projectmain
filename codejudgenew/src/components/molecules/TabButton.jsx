import React from 'react';

export const TabButton = ({
  label,
  active = false,
  onClick,
  badge,
  variant = 'light',
}) => {
  if (variant === 'dark') {
    return (
      <button
        onClick={onClick}
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
          active
            ? 'bg-[#1e2538] text-white shadow-xs'
            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
        }`}
      >
        <span>{label}</span>
        {badge && (
          <span className="ml-1.5 text-[10px] text-slate-400">({badge})</span>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`relative pb-2.5 text-xs font-medium transition-colors ${
        active
          ? 'text-indigo-600 font-semibold'
          : 'text-slate-500 hover:text-slate-800'
      }`}
    >
      <span>{label}</span>
      {badge && (
        <span className="ml-1 text-[11px] text-slate-400">({badge})</span>
      )}
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
      )}
    </button>
  );
};
