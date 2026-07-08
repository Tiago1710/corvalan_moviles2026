import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";

import { AuthContext } from "./AuthContext";
import HomeScreen from "./HomeScreen";

export default function LoginScreen() {

  const { usuario, login, loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarFormulario = () => {

    if (!email || !password) {
      window.alert("Todos los campos son obligatorios");
      return false;
    }

    const formatoEmail = /\S+@\S+\.\S+/;

    if (!formatoEmail.test(email)) {
      window.alert("El formato del correo no es válido");
      return false;
    }

    if (password.length < 4) {
      window.alert("La contraseña debe tener al menos 4 caracteres");
      return false;
    }

    return true;
  };

  const handleLogin = () => {

    if (!validarFormulario()) return;

    login(email);

    window.alert("Inicio de sesión correcto");
  };

  if (loading) {
    return null;
  }

  if (usuario) {
    return <HomeScreen />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >

      <Text
        style={{
          fontSize: 28,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Iniciar sesión
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          marginBottom: 20,
        }}
      />

      <Button
        title="Ingresar"
        onPress={handleLogin}
      />

    </View>
  );
}