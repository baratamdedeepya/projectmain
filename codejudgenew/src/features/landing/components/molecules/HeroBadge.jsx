import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../../../../components/atoms/Badge';

export const HeroBadge = ({ text = 'A modern coding platform' }) => {
  return (
    <div className="flex items-center justify-center">
      
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Badge
          variant="hero"
          size="md"
          dot={true}
          dotColor="bg-emerald-500"
          className="px-3.5 py-1.5 text-xs sm:text-[13px] font-medium tracking-normal text-slate-700 hover:border-slate-300 transition-all cursor-default shadow-xs rounded-xl"
        >
          <span>{text}</span>
        </Badge>
      </motion.div>
    </div>
  );
};
