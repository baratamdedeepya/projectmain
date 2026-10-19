import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowRight, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

export const HeaderNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Problems', href: '#problems' },
    { label: 'Contests', href: '#contests' },
    { label: 'Leaderboard', href: '#leaderboard' },
    { label: 'Discuss', href: '#discuss' },
    { label: 'Learn', href: '#learn' },
  ];

  const rolePath = user?.role ? `/${user.role}` : '/student';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fafbff]/85 dark:bg-[#07090e]/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/80 shadow-2xs'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-baseline gap-1 select-none cursor-pointer group"
          >
            <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
              Code<span className="text-indigo-600 dark:text-indigo-400 font-black">Judge</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-indigo-600 inline-block animate-pulse" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer select-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA / Dashboard */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 transition-transform duration-200" />
            )}
          </motion.button>

          <Link
            to={rolePath}
            className="flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 shadow-xs transition-all cursor-pointer group"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="capitalize">{user?.role ? `${user.role} Dashboard` : 'Dashboard'}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className=" px-4 py-2 text-sm font-semibold text-slate-700 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
          >
          Login
          
         </Link>

          <Link
            to="/signup"
             className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
         Get Started
         </Link>
         </div>

        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            to={rolePath}
            className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-900 capitalize"
          >
            Dashboard
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200/80 dark:border-slate-800 bg-[#fafbff]/98 dark:bg-[#07090e]/98 px-6 py-4 space-y-3"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-sm py-2 px-3 rounded-lg font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <Link
                to={rolePath}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2 text-xs font-semibold rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-900 capitalize"
              >
                Go to {user?.role || 'User'} Dashboard
              </Link>
              
         {/* Mobile Authentication Buttons */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 dark:border-slate-700 md:hidden">
           <Link
           to="/login"
           onClick={() => setMobileMenuOpen(false)}
           className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
           >
           Login
          </Link>

          <Link
         to="/signup"
         onClick={() => setMobileMenuOpen(false)}
         className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-indigo-500"
         >
         Sign Up
       </Link>
      </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
