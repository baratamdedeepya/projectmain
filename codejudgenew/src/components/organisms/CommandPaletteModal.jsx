import React, { useState, useEffect } from 'react';
import { Search, X, Flame, Terminal, ChevronRight, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CommandPaletteModal = ({ isOpen, onClose, onSelectProblem }) => {
  const [query, setQuery] = useState('');

  const sampleProblems = [
    { id: 1, title: 'Two Sum', diff: 'Easy', category: 'Arrays & Hashing', tag: 'Hot' },
    { id: 2, title: 'Add Two Numbers', diff: 'Medium', category: 'Linked Lists', tag: 'Classic' },
    { id: 3, title: 'Longest Substring Without Repeating Characters', diff: 'Medium', category: 'Sliding Window', tag: 'Trending' },
    { id: 4, title: 'Median of Two Sorted Arrays', diff: 'Hard', category: 'Binary Search', tag: 'Challenging' },
    { id: 20, title: 'Valid Parentheses', diff: 'Easy', category: 'Stack', tag: 'Interview Top 50' },
    { id: 42, title: 'Trapping Rain Water', diff: 'Hard', category: 'Two Pointers', tag: 'Hard' },
    { id: 121, title: 'Best Time to Buy and Sell Stock', diff: 'Easy', category: 'DP', tag: 'Must Do' },
  ];

  const filtered = sampleProblems.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.diff.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-900/40 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        >
          
          <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
            <Search className="w-5 h-5 text-indigo-600" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search problems by name, topic, or difficulty... (Try 'Two Sum')"
              className="flex-1 bg-transparent text-slate-800 placeholder-slate-400 text-sm focus:outline-none font-medium"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="px-2 py-1 text-[11px] font-semibold text-slate-400 bg-slate-100 border border-slate-200 rounded-md">
              ESC
            </kbd>
          </div>

          <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-slate-50">
            <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Problems ({filtered.length})
            </div>

            {filtered.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs">
                No problems found matching &quot;{query}&quot;
              </div>
            ) : (
              filtered.map((problem) => (
                <div
                  key={problem.id}
                  onClick={() => {
                    onSelectProblem?.(problem);
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 text-xs text-slate-400 font-mono">
                      #{problem.id}
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {problem.title}
                      </p>
                      <span className="text-[11px] text-slate-400">
                        {problem.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        problem.diff === 'Easy'
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-200/50'
                          : problem.diff === 'Medium'
                          ? 'bg-amber-50 text-amber-600 border border-amber-200/50'
                          : 'bg-rose-50 text-rose-600 border border-rose-200/50'
                      }`}
                    >
                      {problem.diff}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-4">
              <span><kbd className="font-semibold text-slate-700 bg-white px-1.5 py-0.5 rounded border border-slate-200">↑↓</kbd> to navigate</span>
              <span><kbd className="font-semibold text-slate-700 bg-white px-1.5 py-0.5 rounded border border-slate-200">↵</kbd> to select</span>
            </div>
            <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
              <Terminal className="w-3.5 h-3.5" /> CodeJudge Spotlight
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
