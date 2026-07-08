import React, { useContext } from "react";
import {
  View,
  Text,
  Button
} from "react-native";

import { AuthContext } from "./AuthContext";

export default function HomeScreen() {

  const { usuario, logout } = useContext(AuthContext);

  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text
        style={{
          fontSize: 28,
          marginBottom: 20,
        }}
      >
        Bienvenido
      </Text>

      <Text
        style={{
          fontSize: 20,
          marginBottom: 30,
        }}
      >
        {usuario}
      </Text>

      <Button
        title="Cerrar sesión"
        onPress={logout}
      />

    </View>

  );
}