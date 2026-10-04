import React from 'react';

export const CurvedArrow = ({ direction = 'left', className = '' }) => {
  if (direction === 'left') {
    
    return (
      <svg
        className={`w-14 h-14 sm:w-16 sm:h-16 text-indigo-500/90 pointer-events-none select-none ${className}`}
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 10 C 25 18, 48 30, 44 54"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        
        <path
          d="M36 46 L 45 55 L 49 42"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg
      className={`w-14 h-14 sm:w-16 sm:h-16 text-indigo-600/90 pointer-events-none select-none ${className}`}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55 8 C 42 22, 20 34, 18 54"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      
      <path
        d="M26 44 L 17 55 L 14 41"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
