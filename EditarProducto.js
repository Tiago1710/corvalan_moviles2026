import React, { useState } from "react";
import {View, TextInput, Button} 
from "react-native";

export default function EditarProducto({
  route,
  navigation,
  editarProducto
}) {

  const { producto } = route.params;

  const [nombre, setNombre] = useState(producto.nombre);
  const [descripcion, setDescripcion] = useState(producto.descripcion);
  const [precio, setPrecio] = useState(producto.precio);

  const guardar = () => {

    editarProducto({
      id: producto.id,
      nombre,
      descripcion,
      precio
    });

    navigation.goBack();

  };

  return (

    <View style={{padding:20}}>

      <TextInput
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <TextInput
        value={precio}
        keyboardType="numeric"
        onChangeText={setPrecio}
      />

      <Button
        title="Guardar Cambios"
        onPress={guardar}
      />

    </View>

  );
}