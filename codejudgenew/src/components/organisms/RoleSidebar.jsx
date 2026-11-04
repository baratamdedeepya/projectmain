
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  Shield,
  Code2,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

import { useAuth } from '../../context/AuthContext';

export const RoleSidebar = () => {
  const { user } = useAuth();
  const role = user?.role || 'student';

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const configs = {
    admin: {
      title: 'Admin Panel',
      color: 'text-purple-600',
      badge: 'bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300',
      icon: Shield,
      links: [
        { label: 'Admin Dashboard', href: '/admin', icon: LayoutDashboard },
        { label: 'Manage Users', href: '/admin/users', icon: Users },
      ],
    },

    student: {
      title: 'Code Judge',
      color: 'text-indigo-600',
      badge: 'bg-indigo-100 text-indigo-700',
      icon: GraduationCap,
      links: [
        { label: 'Dashboard', href: '/student', icon: LayoutDashboard },
        { label: 'Problems', href: '/student/problems', icon: BookOpen },
        { label: 'Contests', href: '/student/contests', icon: Users },
        { label: 'Submissions', href: '/student/submissions', icon: BookOpen },
        { label: 'Profile', href: '/student/profile', icon: GraduationCap },
      ],
    },

    mentor: {
      title: 'Mentor Console',
      color: 'text-amber-600',
      badge: 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300',
      icon: Sparkles,
      links: [
        { label: 'Mentor Dashboard', href: '/mentor', icon: LayoutDashboard },
        { label: 'My Students', href: '/mentor/students', icon: Users },
      ],
    },
  };

  const current = configs[role] || configs.student;

  return (
    <>
      {/* Mobile Menu Button */}
      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed top-2 left-2 z-[60] flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg md:hidden"
        >
          <Menu size={22} />
        </button>
      )}

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky
          left-0 top-0 z-50
          flex h-screen shrink-0 flex-col
          bg-white dark:bg-[#0b0e14]
          border-r border-slate-200 dark:border-slate-800
          transition-all duration-300 ease-in-out
          ${collapsed ? 'md:w-20' : 'md:w-64'}
          w-64
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >

        {/* Logo Section */}
        <div className="flex items-center gap-3 px-4 py-5 min-h-[85px]">

          {/* Logo Icon */}
          <div className="shrink-0 rounded-xl bg-indigo-600 p-2.5 text-white shadow-lg">
            <Code2 size={23} />
          </div>

          {/* Logo Text */}
          <div
            className={`
              min-w-0 flex-1 whitespace-nowrap
              transition-all duration-300 ease-in-out
              ${collapsed
                ? 'md:w-0 md:flex-none md:opacity-0 md:overflow-hidden'
                : 'opacity-100'
              }
            `}
          >
            <h1 className="text-lg md:text-xl font-extrabold tracking-tight">
              Code Judge
            </h1>

            <p className="text-xs text-indigo-400 whitespace-nowrap">
              Practice. Improve. Achieve.
            </p>
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="shrink-0 ml-auto text-slate-500 hover:text-indigo-600 md:hidden"
          >
            <X size={20} />
          </button>

        </div>

        {/* Workspace */}
        <p
          className={`
            mb-3 px-5 text-[10px] font-bold uppercase
            tracking-[2px] text-indigo-300
            whitespace-nowrap overflow-hidden
            transition-all duration-300
            ${collapsed
              ? 'h-0 opacity-0 mb-0'
              : 'h-4 opacity-100'
            }
          `}
        >
          Workspace
        </p>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-3">

          {current.links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.href}
                to={link.href}
                end={
                  link.href === '/student' ||
                  link.href === '/admin' ||
                  link.href === '/mentor'
                }
                title={collapsed ? link.label : ''}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm md:text-[13px] font-semibold transition-all duration-300 ease-in-out ${
                    isActive
                      ? 'translate-x-0.5 bg-indigo-600 text-white shadow-md'
                      : 'text-slate-500 hover:translate-x-0.5 hover:text-indigo-600'
                  }`
                }
              >

                <Icon className="h-5 w-5 shrink-0" />

                {/* Navigation Label */}
                <div
                  className={`
                    flex items-center justify-between
                    overflow-hidden whitespace-nowrap
                    transition-all duration-300 ease-in-out
                    ${collapsed
                      ? 'w-0 opacity-0'
                      : 'flex-1 opacity-100'
                    }
                  `}
                >
                  <span>{link.label}</span>

                  <ArrowRight
                    size={14}
                    className="ml-auto shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </div>

              </NavLink>
            );
          })}

        </nav>

        {/* Desktop Collapse Arrow */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            hidden md:flex
            absolute top-2 -right-3
            z-[60]
            h-7 w-7
            items-center justify-center
            rounded-full
            bg-indigo-600 text-white
            shadow-lg
            border-2 border-white
            dark:border-[#0b0e14]
            hover:bg-indigo-700
            transition-all duration-300
          "
        >
          {collapsed
            ? <ChevronRight size={17} />
            : <ChevronLeft size={17} />
          }
        </button>

      </aside>
    </>
  );
};
