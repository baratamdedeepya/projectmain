import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroActions } from '../molecules/HeroActions';
import { CommunityProof } from '../molecules/CommunityProof';
import { DoodleSwoosh } from '../atoms/DoodleSwoosh';
import { HandwrittenNote } from '../atoms/HandwrittenNote';
import { SparkleStar } from '../atoms/SparkleStar';

export const HeroHeadline = ({ onStartSolving, onExploreContests, isReady = true }) => {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (isReady) {
      setAnimKey((k) => k + 1);
    }
  }, [isReady]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate={isReady ? 'visible' : 'hidden'}
      className="relative pt-6 sm:pt-10 pb-2 px-4 max-w-5xl mx-auto select-none flex flex-col items-center text-center"
    >
      {/* Left Annotation */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -40, y: 15 },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8, delay: 0.45, ease: 'easeOut' },
          },
        }}
        className="hidden md:block absolute -left-8 lg:-left-20 top-1/2 -translate-y-4 z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HandwrittenNote
            lines={['Clean UI', 'Focused on', 'What Matters']}
            arrowDirection="left"
            color="text-[#5551FF] dark:text-[#818cf8]"
            rotate="-rotate-8"
          />
        </motion.div>
      </motion.div>

      {/* Right Annotation */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 40, y: 15 },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8, delay: 0.55, ease: 'easeOut' },
          },
        }}
        className="hidden md:block absolute -right-6 lg:-right-16 top-1/3 -translate-y-4 z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          <HandwrittenNote
            lines={['Solve', 'Compete', 'Learn', 'Grow']}
            arrowDirection="right"
            color="text-[#6366F1] dark:text-[#a78bfa]"
            rotate="rotate-6"
          />
        </motion.div>
      </motion.div>

      {/* Headline Wrapper with True Apple-Style Calligraphy Stroke Handwriting Animation */}
      <div
        key={`${isReady ? 'ready' : 'waiting'}-${animKey}`}
        onClick={() => setAnimKey((k) => k + 1)}
        title="Click to replay handwriting animation"
        className="w-full flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-14 cursor-pointer group"
      >
        {/* Line 1: Code. Compete. (Handwritten SVG Stroke Draw) */}
        <motion.div
          variants={itemVariants}
          className="w-full flex items-center justify-center gap-2 sm:gap-4 overflow-visible"
        >
          {/* Left doodle swoosh */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 350, damping: 20 }}
          >
            <DoodleSwoosh side="left" className="translate-y-1 sm:translate-y-0 text-indigo-500 dark:text-indigo-400" />
          </motion.div>

          {/* SVG Handwriting Stroke for "Code. Compete." */}
          <div className="w-full max-w-[320px] sm:max-w-[560px] md:max-w-[700px] lg:max-w-[820px] overflow-visible">
            <svg
              viewBox="0 0 780 120"
              className="w-full h-auto overflow-visible select-none drop-shadow-xs"
            >
              <defs>
                <linearGradient id="codeCompeteStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="50%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>

              {/* The calligraphy text written stroke-by-stroke */}
              <motion.text
                x="50%"
                y="85"
                textAnchor="middle"
                className="font-pacifico select-none text-slate-900 dark:text-white"
                style={{
                  fontSize: '82px',
                  fontFamily: "'Pacifico', cursive",
                  letterSpacing: '0.01em',
                }}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1800"
                initial={{
                  strokeDashoffset: 1800,
                  fillOpacity: 0,
                }}
                animate={{
                  strokeDashoffset: 0,
                  fillOpacity: 1,
                }}
                transition={{
                  strokeDashoffset: {
                    duration: 1.8,
                    ease: [0.35, 0.1, 0.25, 1],
                    delay: 0.15,
                  },
                  fillOpacity: {
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: 1.3,
                  },
                }}
              >
                Code. Compete.
              </motion.text>
            </svg>
          </div>

          {/* Right doodle swoosh */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 350, damping: 20 }}
          >
            <DoodleSwoosh side="right" className="translate-y-1 sm:translate-y-0 text-amber-500 dark:text-amber-400" />
          </motion.div>
        </motion.div>

        {/* Line 2: Level Up. (Handwritten SVG Stroke Draw with dual-gradient ink) */}
        <motion.div
          variants={itemVariants}
          className="w-full relative flex flex-col items-center justify-center mt-0 sm:mt-1 overflow-visible"
        >
          <div className="flex items-center justify-center gap-1 sm:gap-2.5 w-full max-w-[300px] sm:max-w-[480px] md:max-w-[580px] lg:max-w-[680px] overflow-visible">
            {/* Left Sparkle Star */}
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.6, type: 'spring', stiffness: 400, damping: 18 }}
            >
              <SparkleStar color="purple" size="lg" className="-translate-y-1 mr-1 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.div>

            {/* SVG Handwriting Stroke for "Level Up." */}
            <div className="w-full overflow-visible">
              <svg
                viewBox="0 0 520 120"
                className="w-full h-auto overflow-visible select-none drop-shadow-xs"
              >
                {/* Word: Level (Written in indigo stroke) */}
                <motion.text
                  x="160"
                  y="85"
                  textAnchor="middle"
                  style={{
                    fontSize: '84px',
                    fontFamily: "'Pacifico', cursive",
                  }}
                  fill="#5551ff"
                  stroke="#5551ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="1200"
                  initial={{
                    strokeDashoffset: 1200,
                    fillOpacity: 0,
                  }}
                  animate={{
                    strokeDashoffset: 0,
                    fillOpacity: 1,
                  }}
                  transition={{
                    strokeDashoffset: {
                      duration: 1.1,
                      ease: [0.35, 0.1, 0.25, 1],
                      delay: 1.2,
                    },
                    fillOpacity: {
                      duration: 0.45,
                      ease: 'easeOut',
                      delay: 1.9,
                    },
                  }}
                >
                  Level
                </motion.text>

                {/* Word: Up. (Written in orange stroke) */}
                <motion.text
                  x="380"
                  y="85"
                  textAnchor="middle"
                  style={{
                    fontSize: '84px',
                    fontFamily: "'Pacifico', cursive",
                  }}
                  fill="#ff7849"
                  stroke="#ff7849"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="900"
                  initial={{
                    strokeDashoffset: 900,
                    fillOpacity: 0,
                  }}
                  animate={{
                    strokeDashoffset: 0,
                    fillOpacity: 1,
                  }}
                  transition={{
                    strokeDashoffset: {
                      duration: 0.85,
                      ease: [0.35, 0.1, 0.25, 1],
                      delay: 1.7,
                    },
                    fillOpacity: {
                      duration: 0.4,
                      ease: 'easeOut',
                      delay: 2.2,
                    },
                  }}
                >
                  Up.
                </motion.text>
              </svg>
            </div>

            {/* Right Sparkle Star */}
            <motion.div
              initial={{ scale: 0, rotate: 30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2.1, type: 'spring', stiffness: 400, damping: 18 }}
            >
              <SparkleStar color="orange" size="lg" className="-translate-y-1 ml-1 sm:ml-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.div>
          </div>

          {/* Hand-drawn Curved Purple Underline Swoosh - Apple Pencil Draw-in Animation */}
          <svg
            className="w-56 sm:w-72 md:w-[420px] lg:w-[480px] h-5 sm:h-6 md:h-7 text-indigo-500/90 dark:text-indigo-400/90 -mt-2 sm:-mt-3 pointer-events-none overflow-visible"
            viewBox="0 0 280 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M 10 12 C 55 5, 135 3, 205 7 C 240 9, 265 13, 272 11 C 260 14, 220 16, 175 15 C 120 14, 60 16, 20 17"
              stroke="currentColor"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 2.1 }}
            />
          </svg>
        </motion.div>
      </div>

      <motion.p
        variants={itemVariants}
        className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed transition-colors"
      >
        Practice real problems, participate in contests, track your progress and build
        the problem-solving skills that open real opportunities.
      </motion.p>

      <motion.div variants={itemVariants} className="mt-3">
        <HeroActions
          onStartSolving={onStartSolving}
          onExploreContests={onExploreContests}
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-2">
        <CommunityProof count="50,000+" />
      </motion.div>
    </motion.section>
  );
};
