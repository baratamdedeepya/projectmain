import React from 'react';
import { motion } from 'framer-motion';
import { landingProblemData } from '../../data/landingProblemData';

export const CommunityProof = ({ count = '50,000+' }) => {
  const avatars = landingProblemData.avatars;

  return (
    <div className="flex items-center justify-center gap-3 pt-4 select-none">
      
      <div className="flex -space-x-2 items-center py-1">
        {avatars.map((url, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.22, zIndex: 30 }}
            className="relative shrink-0"
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <img
              src={url}
              alt={`Developer ${i + 1}`}
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full object-cover ring-2 ring-white dark:ring-[#07090e] shadow-sm select-none"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
      <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
        Join a growing community of{' '}
        <span className="font-semibold text-slate-900 dark:text-white">{count} developers</span>
      </p>
    </div>
  );
};
