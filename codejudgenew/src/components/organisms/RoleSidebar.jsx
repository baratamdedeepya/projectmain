import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, GraduationCap, Shield, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const RoleSidebar = () => {
  const { user } = useAuth();
  const role = user?.role || 'student';

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
      title: 'Student Portal',
      color: 'text-emerald-600',
      badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300',
      icon: GraduationCap,
      links: [
        { label: 'Student Dashboard', href: '/student', icon: LayoutDashboard },
        { label: 'My Courses', href: '/student/courses', icon: BookOpen },
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
  const RoleIcon = current.icon;

  return (
    <aside className="w-64 bg-white dark:bg-[#0b0e14] border-r border-slate-200 dark:border-slate-800 flex flex-col h-screen sticky top-0">
      <div className="p-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <RoleIcon className={`w-5 h-5 ${current.color}`} />
          <span className="font-bold text-base text-slate-900 dark:text-white">
            {current.title}
          </span>
        </div>
        <span className={`inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${current.badge}`}>
          {role}
        </span>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {current.links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{link.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
