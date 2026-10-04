import React from 'react';

export const Avatar = ({
  src,
  alt = 'User avatar',
  size = 'md',
  className = '',
  ringColor = 'ring-white',
}) => {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ring-2 ${ringColor} ${sizeMap[size]} ${className}`}
      loading="lazy"
    />
  );
};
