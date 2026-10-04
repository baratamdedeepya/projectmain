import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 850;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const dotsData = [
      { base: [-11.0, 5.8, 0.5], color: '#6366f1', speed: 1.1, phase: 0.0, amp: 0.45 },
      { base: [-13.5, 0.2, 1.2], color: '#ec4899', speed: 0.9, phase: 1.8, amp: 0.5 },
      { base: [11.5, 6.2, 0.2], color: '#f97316', speed: 1.2, phase: 3.1, amp: 0.4 },
      { base: [13.2, 0.0, 1.0], color: '#38bdf8', speed: 0.85, phase: 4.5, amp: 0.55 },
      { base: [2.0, 7.5, -0.5], color: '#a855f7', speed: 1.0, phase: 2.2, amp: 0.4 },
    ];

    const dotCount = dotsData.length;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(dotCount * 3);
    const colors = new Float32Array(dotCount * 3);

    dotsData.forEach((dot, i) => {
      positions[i * 3] = dot.base[0];
      positions[i * 3 + 1] = dot.base[1];
      positions[i * 3 + 2] = dot.base[2];

      const c = new THREE.Color(dot.color);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    });

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 60);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.25, 'rgba(255, 255, 255, 0.85)');
    grad.addColorStop(0.55, 'rgba(255, 255, 255, 0.35)');
    grad.addColorStop(0.85, 'rgba(255, 255, 255, 0.08)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(64, 64, 60, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.PointsMaterial({
      size: 1.35,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const dotsMesh = new THREE.Points(geometry, material);
    scene.add(dotsMesh);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX * 0.8 - targetX) * 0.05;
      targetY += (mouseY * 0.8 - targetY) * 0.05;

      const posAttr = geometry.attributes.position;
      for (let i = 0; i < dotCount; i++) {
        const dot = dotsData[i];
        const floatY = Math.sin(elapsedTime * dot.speed + dot.phase) * dot.amp;
        const floatX = Math.cos(elapsedTime * dot.speed * 0.7 + dot.phase) * (dot.amp * 0.4);

        posAttr.setXYZ(
          i,
          dot.base[0] + floatX + targetX * 0.5,
          dot.base[1] + floatY + targetY * 0.4,
          dot.base[2]
        );
      }
      posAttr.needsUpdate = true;

      dotsMesh.rotation.z = Math.sin(elapsedTime * 0.1) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 right-0 h-[850px] sm:h-[950px] pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    />
  );
};
