import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const LandingPreloader = ({ onLoaded }) => {
  const { isDark } = useTheme();
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const dpr = window.devicePixelRatio || 1;
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };
    const handleMouseMove = (e) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const barCount = 28;
    const bars = [];
    for (let i = 0; i < barCount; i++) {
      const scrambledH = 15 + Math.sin(i * 1.8 + 2.5) * 25 + Math.random() * 20;
      const targetH = 20 + Math.sin((i / (barCount - 1)) * Math.PI) * 45;
      bars.push({
        currentH: scrambledH,
        targetH,
        initialH: scrambledH,
        vy: 0,
        sorted: false,
      });
    }

    let currentProgress = 0;
    let startTime = performance.now();
    const duration = 2400;
    const settleDuration = 500;
    const totalDuration = duration + settleDuration;

    const render = (now) => {
      const elapsed = now - startTime;

      const gridAlpha = Math.min(1, elapsed / 500) * (isDark ? 0.035 : 0.05);
      const titleAlpha = Math.min(1, Math.max(0, (elapsed - 250) / 650));
      const titleYOffset = (1 - titleAlpha) * 8;
      const waveAlpha = Math.min(1, Math.max(0, (elapsed - 550) / 700));
      const curveAlpha = Math.min(1, Math.max(0, (elapsed - 900) / 700));
      const statusAlpha = Math.min(1, Math.max(0, (elapsed - 700) / 600));

      const progressStart = 500;
      const progressEnd = duration;
      const progressT = Math.max(0, Math.min(1, (elapsed - progressStart) / (progressEnd - progressStart)));
      const easeT = progressT < 0.5 ? 2 * progressT * progressT : 1 - Math.pow(-2 * progressT + 2, 2) / 2;
      currentProgress = easeT * 100;
      setProgress(Math.floor(currentProgress));

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      ctx.fillStyle = isDark ? '#07090e' : '#fafbff';
      ctx.fillRect(0, 0, width, height);

      if (gridAlpha > 0) {
        const gridSize = 56;
        ctx.strokeStyle = isDark
          ? `rgba(255, 255, 255, ${gridAlpha})`
          : `rgba(99, 102, 241, ${gridAlpha * 1.5})`;
        ctx.lineWidth = 1;
        const startX = (width % gridSize) / 2;
        const startY = (height % gridSize) / 2;

        for (let x = startX; x < width; x += gridSize) {
          for (let y = startY; y < height; y += gridSize) {
            const crossSize = 3;
            ctx.beginPath();
            ctx.moveTo(x - crossSize, y);
            ctx.lineTo(x + crossSize, y);
            ctx.moveTo(x, y - crossSize);
            ctx.lineTo(x + crossSize, y);
            ctx.stroke();
          }
        }
      }

      const centerX = width / 2;
      const centerY = height / 2 - 20;
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        280
      );
      if (isDark) {
        glowGrad.addColorStop(0, `rgba(99, 102, 241, ${0.12 * Math.min(1, elapsed / 800)})`);
        glowGrad.addColorStop(0.5, `rgba(79, 70, 229, ${0.04 * Math.min(1, elapsed / 800)})`);
        glowGrad.addColorStop(1, 'rgba(7, 9, 14, 0)');
      } else {
        glowGrad.addColorStop(0, `rgba(99, 102, 241, ${0.09 * Math.min(1, elapsed / 800)})`);
        glowGrad.addColorStop(0.5, `rgba(168, 85, 247, ${0.04 * Math.min(1, elapsed / 800)})`);
        glowGrad.addColorStop(1, 'rgba(250, 251, 255, 0)');
      }
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 280, 0, Math.PI * 2);
      ctx.fill();

      if (titleAlpha > 0) {
        ctx.save();
        ctx.globalAlpha = titleAlpha;

        ctx.font = '800 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        const codeWidth = ctx.measureText('Code').width;
        const judgeWidth = ctx.measureText('Judge').width;
        const totalTitleWidth = codeWidth + judgeWidth;
        const titleStartX = centerX - totalTitleWidth / 2;
        const titleY = centerY - 65 + titleYOffset;

        ctx.textBaseline = 'middle';

        const bracketSpacing = 28;
        const bracketOffset = totalTitleWidth / 2 + bracketSpacing + Math.sin(now * 0.003) * 3;
        ctx.font = '300 34px "SF Mono", "JetBrains Mono", Menlo, monospace';
        ctx.fillStyle = isDark ? 'rgba(129, 140, 248, 0.75)' : 'rgba(79, 70, 229, 0.75)';
        ctx.textAlign = 'center';
        ctx.fillText('{', centerX - bracketOffset, titleY);

        ctx.font = '800 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
        ctx.fillText('Code', titleStartX, titleY);

        ctx.fillStyle = isDark ? '#818cf8' : '#4f46e5';
        ctx.fillText('Judge', titleStartX + codeWidth, titleY);

        const dotX = titleStartX + totalTitleWidth + 7;
        const dotY = titleY + 6;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#818cf8' : '#4f46e5';
        ctx.shadowColor = isDark ? '#818cf8' : '#4f46e5';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.font = '300 34px "SF Mono", "JetBrains Mono", Menlo, monospace';
        ctx.fillStyle = isDark ? 'rgba(129, 140, 248, 0.75)' : 'rgba(79, 70, 229, 0.75)';
        ctx.textAlign = 'center';
        ctx.fillText('}', centerX + bracketOffset, titleY);

        ctx.restore();
      }

      const totalBarWidth = 240;
      const barSpacing = totalBarWidth / (barCount - 1);
      const barStartX = centerX - totalBarWidth / 2;
      const barBaseY = centerY + 30;

      const points = [];
      if (waveAlpha > 0) {
        ctx.save();
        ctx.globalAlpha = waveAlpha;

        for (let i = 0; i < barCount; i++) {
          const bar = bars[i];
          const triggerThreshold = i / barCount;
          const barProgress = Math.max(0, Math.min(1, (easeT - triggerThreshold * 0.35) / 0.65));
          const currentH = (bar.initialH + (bar.targetH - bar.initialH) * barProgress) * waveAlpha;

          const bx = barStartX + i * barSpacing;
          const by = barBaseY - currentH;
          points.push({ x: bx, y: by });

          const isSorted = barProgress >= 0.95;
          const barGrad = ctx.createLinearGradient(bx, barBaseY, bx, by);
          if (isDark) {
            if (isSorted) {
              barGrad.addColorStop(0, 'rgba(99, 102, 241, 0.2)');
              barGrad.addColorStop(1, 'rgba(129, 140, 248, 0.85)');
            } else {
              barGrad.addColorStop(0, 'rgba(148, 163, 184, 0.15)');
              barGrad.addColorStop(1, 'rgba(148, 163, 184, 0.45)');
            }
          } else {
            if (isSorted) {
              barGrad.addColorStop(0, 'rgba(79, 70, 229, 0.2)');
              barGrad.addColorStop(1, 'rgba(99, 102, 241, 0.9)');
            } else {
              barGrad.addColorStop(0, 'rgba(148, 163, 184, 0.25)');
              barGrad.addColorStop(1, 'rgba(100, 116, 139, 0.55)');
            }
          }

          ctx.fillStyle = barGrad;
          ctx.beginPath();
          const barW = 4;
          ctx.roundRect(bx - barW / 2, by, barW, currentH, [2, 2, 0, 0]);
          ctx.fill();

          if (isSorted && i % 3 === 0) {
            ctx.beginPath();
            ctx.arc(bx, by - 4, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? '#a5b4fc' : '#4f46e5';
            ctx.shadowColor = isDark ? '#6366f1' : '#4f46e5';
            ctx.shadowBlur = 6;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
        ctx.restore();
      }

      if (curveAlpha > 0 && points.length > 1) {
        ctx.save();
        ctx.globalAlpha = curveAlpha;

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 0; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);

        const curveGrad = ctx.createLinearGradient(
          points[0].x,
          centerY,
          points[points.length - 1].x,
          centerY
        );
        if (isDark) {
          curveGrad.addColorStop(0, '#6366f1');
          curveGrad.addColorStop(0.5, '#a855f7');
          curveGrad.addColorStop(1, '#f59e0b');
        } else {
          curveGrad.addColorStop(0, '#4f46e5');
          curveGrad.addColorStop(0.5, '#7c3aed');
          curveGrad.addColorStop(1, '#ea580c');
        }

        ctx.strokeStyle = curveGrad;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = isDark ? 'rgba(99, 102, 241, 0.5)' : 'rgba(79, 70, 229, 0.35)';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.restore();
      }

      if (statusAlpha > 0) {
        ctx.save();
        ctx.globalAlpha = statusAlpha;

        const statusBoxY = centerY + 85;
        const statusBoxW = 260;

        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.08)';
        ctx.beginPath();
        ctx.roundRect(centerX - statusBoxW / 2, statusBoxY, statusBoxW, 2, 1);
        ctx.fill();

        const fillW = (statusBoxW * currentProgress) / 100;
        const progressGrad = ctx.createLinearGradient(
          centerX - statusBoxW / 2,
          statusBoxY,
          centerX - statusBoxW / 2 + fillW,
          statusBoxY
        );
        progressGrad.addColorStop(0, '#4f46e5');
        progressGrad.addColorStop(1, isDark ? '#818cf8' : '#6366f1');

        ctx.fillStyle = progressGrad;
        ctx.shadowColor = isDark ? '#6366f1' : '#4f46e5';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.roundRect(centerX - statusBoxW / 2, statusBoxY, fillW, 2, 1);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.font = '500 11px "SF Mono", Menlo, Monaco, monospace';
        ctx.textBaseline = 'top';

        ctx.textAlign = 'left';
        if (currentProgress >= 100) {
          ctx.fillStyle = isDark ? '#10b981' : '#059669';
        } else {
          ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
        }

        const labelText =
          currentProgress < 40
            ? 'INITIALIZING RUNTIME'
            : currentProgress < 85
            ? 'SORTING TESTCASES'
            : currentProgress < 100
            ? 'VERIFYING ARENA'
            : 'ENVIRONMENT READY';
        ctx.fillText(labelText, centerX - statusBoxW / 2, statusBoxY + 12);

        ctx.textAlign = 'right';
        ctx.fillStyle = isDark ? '#cbd5e1' : '#1e293b';
        ctx.fillText(`${Math.round(currentProgress)}%`, centerX + statusBoxW / 2, statusBoxY + 12);

        ctx.restore();
      }

      if (elapsed >= totalDuration) {
        setIsDone(true);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDark]);

  return (
    <AnimatePresence onExitComplete={onLoaded}>
      {!isDone && (
        <motion.div
          key="theme-canvas-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
          }}
          className={`fixed inset-0 z-[100] select-none flex items-center justify-center cursor-default transition-colors duration-300 ${
            isDark ? 'bg-[#07090e]' : 'bg-[#fafbff]'
          }`}
        >
          <canvas ref={canvasRef} className="w-full h-full block" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
