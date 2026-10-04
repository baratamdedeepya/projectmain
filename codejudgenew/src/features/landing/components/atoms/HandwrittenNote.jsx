import React from 'react';
import { CurvedArrow } from './CurvedArrow';

export const HandwrittenNote = ({
  lines = [],
  arrowDirection = 'left',
  className = '',
  color = 'text-indigo-600',
  rotate = '-rotate-6',
}) => {
  return (
    <div className={`relative flex flex-col items-center select-none ${rotate} ${className}`}>
      <div className={`font-hand text-xl sm:text-2xl font-bold leading-tight tracking-wide ${color}`}>
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <div className="mt-1">
        <CurvedArrow direction={arrowDirection} />
      </div>
    </div>
  );
};
