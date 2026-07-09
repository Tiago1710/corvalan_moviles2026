import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "inicio";
import AgregarProducto from "AgregarProducto";
import EditarProducto from "EditarProducto";

const Stack = createNativeStackNavigator();

export default function App() {

  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  const editarProducto = (productoActualizado) => {
    setProductos(
      productos.map(p =>
        p.id === productoActualizado.id ? productoActualizado : p
      )
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Inicio">
          {(props) => (
            <Inicio
              {...props}
              productos={productos}
              eliminarProducto={eliminarProducto}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Agregar">
          {(props) => (
            <AgregarProducto
              {...props}
              agregarProducto={agregarProducto}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Editar">
          {(props) => (
            <EditarProducto
              {...props}
              editarProducto={editarProducto}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}