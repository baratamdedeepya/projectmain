import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { KbdBadge } from '../atoms/KbdBadge';

export const SearchBar = ({
  placeholder = 'Search problems, tags...',
  className = '',
  onSearch,
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <motion.div
      animate={{ width: isFocused ? '280px' : '240px' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`relative flex items-center transition-all group ${className}`}
    >
      <Search className={`absolute left-3 w-4 h-4 transition-colors pointer-events-none ${isFocused ? 'text-indigo-600' : 'text-slate-400'}`} />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full pl-9 pr-14 py-2 text-xs text-slate-800 placeholder-slate-400 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-2xs"
      />
      <div className="absolute right-2.5 flex items-center pointer-events-none">
        <KbdBadge />
      </div>
    </motion.div>
  );
};
