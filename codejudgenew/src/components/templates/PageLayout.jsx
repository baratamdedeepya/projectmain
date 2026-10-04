import React, { useState } from 'react';
import { HeaderNavbar } from '../organisms/HeaderNavbar';
import { Footer } from '../organisms/Footer';
import { AuthModal } from '../organisms/AuthModal';

export const PageLayout = ({ children, onSearch }) => {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'signup' });

  const handleOpenAuth = (mode = 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleCloseAuth = () => {
    setAuthModal({ isOpen: false, mode: 'signup' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcff] dark:bg-[#07090e] text-slate-900 dark:text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-600 transition-colors duration-200">
      <HeaderNavbar onOpenAuth={handleOpenAuth} onSearch={onSearch} />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={handleCloseAuth}
        onSwitchMode={(mode) => setAuthModal({ isOpen: true, mode })}
      />
    </div>
  );
};
