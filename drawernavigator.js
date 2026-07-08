import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "tabnavigator";
import AboutScreen from "aboutscreen";
import pantallasalida from "salida";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1E88E5",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={TabNavigator}
      />

      <Drawer.Screen
        name="Acerca de"
        component={AboutScreen}
      />

      <Drawer.Screen
        name="Salir"
        component={ExitScreen}
      />
    </Drawer.Navigator>
  );
}