import { createContext, useState, useEffect } from "react";

export const appContext = createContext();

const Approvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [loading, setIsloading] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsloading(false);
  }, []);

  const login = (accessToken, user) => {
    setToken(accessToken);
    setUser(user);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
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
