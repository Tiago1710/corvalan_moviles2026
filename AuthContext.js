import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarSesion();
  }, []);

  const cargarSesion = async () => {
    const dato = await AsyncStorage.getItem("usuario");

    if (dato) {
      setUsuario(dato);
    }

    setLoading(false);
  };

  const login = async (email) => {
    await AsyncStorage.setItem("usuario", email);
    setUsuario(email);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("usuario");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        login,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}