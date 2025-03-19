import { createContext, useState, useEffect } from "react";
import { fetchWithAuth } from "./api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Auto-check login status when page loads
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetchWithAuth("https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/profile/", {
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

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
