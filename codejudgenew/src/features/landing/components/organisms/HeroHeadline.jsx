import React from 'react';
import { motion } from 'framer-motion';
import { HeroActions } from '../molecules/HeroActions';
import { CommunityProof } from '../molecules/CommunityProof';
import { DoodleSwoosh } from '../atoms/DoodleSwoosh';
import { HandwrittenNote } from '../atoms/HandwrittenNote';
import { SparkleStar } from '../atoms/SparkleStar';

export const HeroHeadline = ({ onStartSolving, onExploreContests }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative pt-4 sm:pt-8 pb-6 px-4 max-w-5xl mx-auto select-none flex flex-col items-center text-center"
    >
     
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
        className="hidden md:block absolute mt-20 -left-8 lg:-left-20 top-2/3 -translate-y-8 z-20 pointer-events-none"
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
        className="hidden md:block absolute -right-6 lg:-right-16 top-1/2 -translate-y-4 z-20 pointer-events-none"
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

      {/* Headline Wrapper - 100% Centered */}
      <div className="w-full flex flex-col items-center justify-center mt-12 ">
        <motion.div
          variants={itemVariants}
          className="w-full flex items-center justify-center gap-2.5 sm:gap-4"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <DoodleSwoosh side="left" className="translate-y-1 sm:translate-y-0 text-indigo-500 dark:text-indigo-400" />
          </motion.div>

          <h1 className="font-script font-bold text-5xl sm:text-7xl md:text-8xl tracking-normal text-slate-900 dark:text-white leading-tight select-none">
            Code. Compete.
          </h1>

          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          >
            <DoodleSwoosh side="right" className="translate-y-1 sm:translate-y-0 text-amber-500 dark:text-amber-400" />
          </motion.div>
        </motion.div>

        {/* Line 2: Level Up. in Dancing Script with Sparkles and Underline Swoosh */}
        <motion.div
          variants={itemVariants}
          className="w-full relative flex flex-col items-center justify-center -mt-1 sm:-mt-2"
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2.5">
            <SparkleStar color="purple" size="md" className="-translate-y-2 mr-1 sm:mr-2" />

            <span className="font-script font-bold text-5xl sm:text-7xl md:text-8xl tracking-normal text-[#5551ff] dark:text-[#818cf8] drop-shadow-xs">
              Level{' '}
            </span>
            <span className="font-script font-bold text-5xl sm:text-7xl md:text-8xl tracking-normal text-[#ff7849] dark:text-[#fb923c] drop-shadow-xs">
              Up.
            </span>

            <SparkleStar color="orange" size="md" className="-translate-y-2 ml-1 sm:ml-2" />
          </div>

          {/* Hand-drawn Curved Purple Underline Swoosh */}
          <svg
            className="w-52 sm:w-72 md:w-84 h-4 sm:h-5 text-indigo-500/85 dark:text-indigo-400/90 -mt-1 sm:-mt-2 pointer-events-none"
            viewBox="0 0 280 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 10 12 C 55 5, 135 3, 205 7 C 240 9, 265 13, 272 11 C 260 14, 220 16, 175 15 C 120 14, 60 16, 20 17"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              fill="none"
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

      <motion.div variants={itemVariants}>
        <HeroActions
          onStartSolving={onStartSolving}
          onExploreContests={onExploreContests}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <CommunityProof count="50,000+" />
      </motion.div>
    </motion.section>
  );
};
