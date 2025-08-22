import { createContext, useState, useEffect } from "react";

export const appContext = createContext();

const Approvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get from localStorage
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Error parsing user:", err);
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  const login = (accessToken, userData) => {
    setToken(accessToken);
    setUser(userData);

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  return (
    <appContext.Provider value={{ login, logout, user, token, loading }}>
      {children}
    </appContext.Provider>
  );
};

export default Approvider;
