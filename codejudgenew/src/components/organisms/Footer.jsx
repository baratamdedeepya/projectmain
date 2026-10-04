import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#07090e]/90 backdrop-blur-md pt-16 pb-12 transition-colors">
      
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden p-8 sm:p-14 text-center bg-gradient-to-b from-indigo-50/70 via-purple-50/40 to-white dark:from-[#0d1222] dark:via-[#090d18] dark:to-[#07090e] border border-indigo-200/60 dark:border-indigo-500/20 shadow-xl">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="hidden md:block absolute bottom-6 left-8 w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-400/30 to-purple-400/40 dark:from-indigo-600/30 dark:to-purple-500/30 transform rotate-45 border border-indigo-300/40 dark:border-indigo-500/30 blur-xs pointer-events-none animate-pulse" />

          <div className="hidden md:block absolute bottom-8 right-10 w-20 h-20 rounded-3xl bg-gradient-to-bl from-purple-400/30 to-pink-400/30 dark:from-purple-600/30 dark:to-pink-500/30 transform -rotate-12 border border-purple-300/40 dark:border-purple-500/30 blur-xs pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white">
              Ready to Start Coding?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3 font-normal leading-relaxed">
              Join CodeJudge today and take your problem solving skills to the next level.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white shadow-lg shadow-indigo-600/25 hover:opacity-95 transition-all cursor-pointer"
              >
                <span>Create Free Account</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                <span>Explore Problems</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-100 dark:border-slate-800">
          
          <div className="col-span-2">
            <div className="flex items-center gap-1">
              <span className="font-display font-extrabold text-xl text-slate-900 dark:text-white tracking-tight">
                Code<span className="text-indigo-600 dark:text-indigo-400 font-black">Judge</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 max-w-sm leading-relaxed">
              The modern competitive programming and algorithmic interview platform. Master data structures, solve live contests, and track your global standing.
            </p>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>All Systems Operational (99.99% Uptime)</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Problems
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#problems" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Top 150 Interview</a></li>
              <li><a href="#problems" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Blind 75 Curated</a></li>
              <li><a href="#problems" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Dynamic Programming</a></li>
              <li><a href="#problems" className="hover:text-indigo-600 dark:hover:text-white transition-colors">System Design Primer</a></li>
              <li><a href="#problems" className="hover:text-indigo-600 dark:hover:text-white transition-colors">SQL & Databases</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Contests
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#contests" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Weekly Ranked</a></li>
              <li><a href="#contests" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Biweekly Battles</a></li>
              <li><a href="#leaderboard" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Global Leaderboard</a></li>
              <li><a href="#contests" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Virtual Practice</a></li>
              <li><a href="#contests" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Rating Badges</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#discuss" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#discord" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Discord Server</a></li>
              <li><a href="#privacy" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Security & Trust</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>© 2026 CodeJudge Inc. Built for competitive engineers.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-800 dark:hover:text-white transition-colors" title="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-800 dark:hover:text-white transition-colors" title="Twitter / X">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
