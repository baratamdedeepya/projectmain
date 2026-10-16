import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { LandingHeroTemplate } from '../features/landing/components/templates/LandingHeroTemplate';
import { Dashboard } from '../pages/Dashboard';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route (Navbar & Footer, No Sidebar) */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingHeroTemplate />} />
      </Route>

      {/* Admin Protected Routes (Admin Sidebar) */}
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route element={<DashboardLayout />}>
          <Route path="/admin/*" element={<Dashboard />} />
        </Route>
      </Route>

      {/* Student Protected Routes (Student Sidebar) */}
      <Route element={<ProtectedRoute allowedRoles={['student']} />}>
        <Route element={<DashboardLayout />}>
          <Route path="/student/*" element={<Dashboard />} />
        </Route>
      </Route>

      {/* Mentor Protected Routes (Mentor Sidebar) */}
      <Route element={<ProtectedRoute allowedRoles={['mentor']} />}>
        <Route element={<DashboardLayout />}>
          <Route path="/mentor/*" element={<Dashboard />} />
        </Route>
      </Route>

      {/* Catch-all redirect to Home */}
      <Route path="*" element={<LandingHeroTemplate />} />
    </Routes>
  );
};
