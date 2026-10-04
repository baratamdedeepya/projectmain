import React from 'react';

export const SparkleStar = ({ color = 'purple', size = 'md', className = '' }) => {
  const colorMap = {
    purple: 'text-indigo-400',
    orange: 'text-orange-400',
    gold: 'text-amber-400',
  };

  const sizeMap = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4 sm:w-5 sm:h-5',
    lg: 'w-6 h-6',
  };

  return (
    <svg
      className={`${sizeMap[size]} ${colorMap[color] || color} inline-block animate-pulse pointer-events-none select-none ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
};
