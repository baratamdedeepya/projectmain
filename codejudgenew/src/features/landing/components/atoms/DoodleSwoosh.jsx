import React from 'react';

export const DoodleSwoosh = ({ side = 'left', className = '' }) => {
  if (side === 'left') {
    return (
      <svg
        className={`w-7 h-7 sm:w-8 sm:h-8 text-indigo-500 inline-block pointer-events-none select-none ${className}`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 30C25 24 16 19 8 18"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M26 14C20 10 13 8 6 9"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className={`w-7 h-7 sm:w-8 sm:h-8 text-amber-500 inline-block pointer-events-none select-none ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 30C15 24 24 19 32 18"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M14 14C20 10 27 8 34 9"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
