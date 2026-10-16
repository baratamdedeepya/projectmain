import React from 'react';
import { Outlet } from 'react-router-dom';
import { RoleSidebar } from '../components/organisms/RoleSidebar';

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100">
      {/* Role-Specific Sidebar */}
      <RoleSidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};
