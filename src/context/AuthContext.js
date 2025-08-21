import React, { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [userRole, setUserRole] = useState(null); // 'ALUNO' | 'PROFESSOR' | null

  const value = useMemo(
    () => ({
      userRole,
      signInAsStudent: () => setUserRole('ALUNO'),
      signInAsTeacher: () => setUserRole('PROFESSOR'),
      signOut: () => setUserRole(null),
    }),
    [userRole]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}


