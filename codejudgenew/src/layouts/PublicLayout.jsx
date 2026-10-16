import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderNavbar } from '../components/organisms/HeaderNavbar';
import { Footer } from '../components/organisms/Footer';

export const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafbff] dark:bg-[#07090e] text-slate-900 dark:text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-600 transition-colors duration-200">
      {/* Public Top Navbar - No sidebar */}
      <HeaderNavbar />

      {/* Main Outlet content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Public Footer */}
      <Footer />
    </div>
  );
};
