import React from 'react';
import { Outlet } from 'react-router-dom';
import { RoleSidebar } from '../components/organisms/RoleSidebar';

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100">
      {/* Role-Specific Sidebar */}
      <RoleSidebar />

      {/* Main Content Area */}
      {/* md:pt-6 mobile view lo padding top */}
      <main className="flex-1 p-6 pt-16 md:pt-6">
        <Outlet />
      </main>
    </div>
  );
};
