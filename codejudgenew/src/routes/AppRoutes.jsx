import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { LandingHeroTemplate } from '../features/landing/components/templates/LandingHeroTemplate';
import { Dashboard } from '../pages/Dashboard';
import { SignupPage } from '../pages/Auth/SignupPage';
import { LoginPage } from '../pages/Auth/LoginPage';
import { DashboardPage } from '../features/student/pages/DashboardPage';
import { ProblemsPage } from '../features/student/pages/ProblemsPage';
import { ContestsPage } from '../features/student/pages/ContestsPage';
import { SubmissionsPage } from '../features/student/pages/SubmissionsPage';
import { ProfilePage } from '../features/student/pages/ProfilePage';


export const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

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
            <Route path="/student" element={<DashboardPage />} />
            <Route path="/student/problems" element={<ProblemsPage />} />
            <Route path="/student/contests" element={<ContestsPage />}  />
            <Route path="/student/submissions" element={<SubmissionsPage />}  />
            <Route path="/student/profile" element={<ProfilePage />} />
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
