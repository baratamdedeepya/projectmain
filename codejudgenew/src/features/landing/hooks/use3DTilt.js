import { useState, useCallback, useRef } from 'react';

export const use3DTilt = (maxTilt = 7) => {
  const [tilt, setTilt] = useState({ rotateX: 3.5, rotateY: -1.5, isHovered: false });
  const frameRef = useRef(null);

  const onMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      setTilt({ rotateX: Number(rotateX.toFixed(2)), rotateY: Number(rotateY.toFixed(2)), isHovered: true });
    });
  }, [maxTilt]);

  const onMouseLeave = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    
    setTilt({ rotateX: 4, rotateY: 0, isHovered: false });
  }, []);

  return {
    tilt,
    tiltProps: {
      onMouseMove,
      onMouseLeave,
    },
  };
};
