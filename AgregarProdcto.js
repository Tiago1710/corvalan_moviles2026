import React, { useState } from "react";
import {
  View,
  TextInput,
  Button
} from "react-native";

export default function AgregarProducto({
  navigation,
  agregarProducto
}) {

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  const guardar = () => {

    agregarProducto({
      id: Date.now().toString(),
      nombre,
      descripcion,
      precio
    });

    navigation.goBack();

  };

  return (

    <View style={{padding:20}}>

      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <TextInput
        placeholder="Precio"
        keyboardType="numeric"
        value={precio}
        onChangeText={setPrecio}
      />

      <Button
        title="Guardar"
        onPress={guardar}
      />

    </View>

  );
}