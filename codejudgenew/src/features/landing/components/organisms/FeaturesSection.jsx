import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FolderCode,
  Trophy,
  FileCheck2,
  GraduationCap,
  BarChart3,
  Users2,
  BookOpen,
  Code2,
  Award,
  ArrowRight,
} from 'lucide-react';

const SpotlightCard = ({ feature, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = feature.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="relative p-6 sm:p-8 rounded-3xl bg-white/75 dark:bg-[#0c101b]/75 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-xl hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.14), transparent 80%)`,
          }}
        />
      )}

      <div className="flex items-center justify-between mb-5">
        <div className={`p-3.5 rounded-2xl ${feature.iconBg} shrink-0 transition-transform group-hover:scale-110 duration-200`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
        </div>
        <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
          {feature.tag}
        </span>
      </div>

      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {feature.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-normal">
        {feature.description}
      </p>

      <div className="mt-6 pt-3.5 border-t border-slate-100 dark:border-slate-800/70 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span>Explore feature</span>
        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
      </div>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  const features = [
    {
      icon: FolderCode,
      title: 'Curated Problem Library',
      description: 'Solve from a wide range of problems across data structures, algorithms and real-world company questions.',
      tag: '1,500+ Problems',
      iconBg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40',
    },
    {
      icon: Trophy,
      title: 'Live & Rated Contests',
      description: 'Participate in regular rated contests, solve under pressure, and climb the international leaderboard.',
      tag: 'Weekly Ranked',
      iconBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40',
    },
    {
      icon: FileCheck2,
      title: 'Detailed Submissions',
      description: 'Get deep test case telemetry, sub-millisecond runtime analysis, memory benchmarks and feedback.',
      tag: 'Real-time telemetry',
      iconBg: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-200/60 dark:border-purple-800/40',
    },
    {
      icon: GraduationCap,
      title: 'Learning Paths',
      description: 'Structured topic-wise tracks with intuitive visual guides to help you improve step by step.',
      tag: 'Beginner to Master',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40',
    },
    {
      icon: BarChart3,
      title: 'Global Leaderboard',
      description: 'Compete with developers worldwide, track percentiles, streaks, and unlock tier badges.',
      tag: 'ELO System',
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40',
    },
    {
      icon: Users2,
      title: 'Community & Discuss',
      description: 'Discuss optimal approaches, ask doubts, review editorial writeups and grow together with peers.',
      tag: 'Active Community',
      iconBg: 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border border-violet-200/60 dark:border-violet-800/40',
    },
  ];

  return (
    <section className="relative mt-32 sm:mt-44 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
      
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40 mb-3">
            FEATURES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Everything You Need to Become a Better Coder
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            A complete environment to practice, compete and grow — built for students, professionals and competitive programmers.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center relative w-72 h-56">
          <div className="relative w-48 h-48 flex items-center justify-center">
            
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/25 via-purple-500/25 to-sky-400/20 rounded-full blur-2xl pointer-events-none" />

            <motion.div
              animate={{
                y: [-6, 6, -6],
                rotateY: [0, 10, 0],
                rotateX: [12, 16, 12],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 shadow-2xl shadow-indigo-600/40 border border-indigo-400/50 flex items-center justify-center transform rotate-12"
            >
              <Code2 className="w-14 h-14 text-white stroke-[2.2]" />
            </motion.div>

            <motion.div
              animate={{ y: [6, -8, 6], x: [-3, 4, -3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-1 -right-2 p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200/80 dark:border-slate-800 text-amber-500"
            >
              <Trophy className="w-5 h-5" />
            </motion.div>

            <motion.div
              animate={{ y: [-6, 8, -6], x: [4, -4, 4] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-2 -left-2 p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200/80 dark:border-slate-800 text-emerald-500"
            >
              <BookOpen className="w-5 h-5" />
            </motion.div>

            <motion.div
              animate={{ y: [5, -7, 5] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 left-6 p-2 rounded-xl bg-white dark:bg-slate-900 shadow-lg border border-slate-200/80 dark:border-slate-800 text-indigo-500"
            >
              <Award className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <SpotlightCard key={feature.title} feature={feature} index={idx} />
        ))}
      </div>
    </section>
  );
};
