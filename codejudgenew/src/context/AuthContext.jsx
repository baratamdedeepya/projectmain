import React, { createContext, useContext, useState } from 'react';

export const ROLES = {
  ADMIN: 'admin',
  STUDENT: 'student',
  MENTOR: 'mentor',
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // roles: 'admin' | 'student' | 'mentor'
  const [user, setUser] = useState({ role: 'student', name: 'User' });

  const login = (role = 'student') => {
    setUser({ role, name: role.charAt(0).toUpperCase() + role.slice(1) });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        ROLES,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
