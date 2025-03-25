/*
 Written by: Valter Backström 
*/

import { createContext, useState, useEffect } from "react";
import { fetchWithAuth } from "./api";

// Store the authentication status in a context
export const AuthContext = createContext();

// Provider component to wrap the entire app with the authentication context, AuthProvider in main.jsx 
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Auto-check login status when page loads
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetchWithAuth("https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/profile/", {
          method: "GET",
          credentials: "include",
        });
        setIsAuthenticated(response.ok);
      } catch {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);
  
  // Provide the authentication status to the entire app
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
