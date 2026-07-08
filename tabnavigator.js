import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import pantallainicio from "inicio";
import pantallaperfil from "perfil";
import pantallaconfig from "configuracion";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#1E88E5",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#1E88E5",
        tabBarInactiveTintColor: "gray",

        tabBarIcon: ({ color, size }) => {
          let icono;

          if (route.name === "Inicio") {
            icono = "home";
          } else if (route.name === "Perfil") {
            icono = "person";
          } else if (route.name === "Configuración") {
            icono = "settings";
          }

          return <Ionicons name={icono} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={pantallainicio} />
      <Tab.Screen name="Perfil" component={pantallaperfil} />
      <Tab.Screen name="Configuración" component={pantallaconfig} />
    </Tab.Navigator>
  );
}