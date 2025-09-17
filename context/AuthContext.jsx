// app/providers/AuthProvider.jsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // null = aún no se resolvió (loading), true/false = estado final
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // Leer persistencia al montar (solo client)
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("isAuthenticated");
      if (stored === "true") setIsAuthenticated(true);
      else setIsAuthenticated(false);
    } catch (e) {
      setIsAuthenticated(false);
    }
  }, []);

  // Mantener sessionStorage sincronizado
  useEffect(() => {
    if (isAuthenticated !== null) {
      try {
        sessionStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
      } catch (e) {}
    }
  }, [isAuthenticated]);

  // Mientras isAuthenticated === null, podemos devolver un loader vacío para evitar flashes
  // Si preferís mostrar layout completo aunque no esté resuelto, podés devolver children igualmente.
  if (isAuthenticated === null) {
    return <>{/* opcional: <FullPageLoader/> */}</>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
