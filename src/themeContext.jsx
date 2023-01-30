import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [isAuthenticated, setAuthenticated] = useState(false);

  const userCheck = async () => {
    if (localStorage.getItem("token")) {
      setAuthenticated(true);
      navigate("/");
    } else {
      navigate("/signUp" || "/login");
    }
  };
  
  useEffect(() => {
      userCheck()
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
