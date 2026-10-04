import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroActions = ({ onStartSolving, onExploreContests }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
      <motion.button
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStartSolving}
        className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 shadow-md shadow-slate-900/10 dark:shadow-indigo-500/10 transition-all cursor-pointer group"
      >
        <span>Start Solving</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={onExploreContests}
        className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 text-slate-800 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-2xs"
      >
        <span>Explore Contests</span>
      </motion.button>
    </div>
  );
};
