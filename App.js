import React from "react";
import { AuthProvider } from "./AuthContext";
import LoginScreen from "./LoginScreen";

export default function App() {
  return (
    <AuthProvider>
      <LoginScreen />
    </AuthProvider>
  );
}