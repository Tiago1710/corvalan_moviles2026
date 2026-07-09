import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

export default function FormProducto() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState(null);

  const seleccionarImagen = async () => {
    const permiso =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permiso.granted) {
      Alert.alert("Permiso denegado");
      return;
    }

    const resultado =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  const guardarProducto = () => {
    if (
      nombre === "" ||
      descripcion === "" ||
      precio === "" ||
      categoria === ""
    ) {
      Alert.alert("Error", "Complete todos los campos");
      return;
    }

    if (isNaN(precio) || Number(precio) <= 0) {
      Alert.alert("Error", "Ingrese un precio válido");
      return;
    }

    Alert.alert(
      "Producto creado",
      `Nombre: ${nombre}
Descripción: ${descripcion}
Precio: $${precio}
Categoría: ${categoria}`
    );

    setNombre("");
    setDescripcion("");
    setPrecio("");
    setCategoria("");
    setImagen(null);
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Crear Producto
      </Text>

      <Text>Nombre</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text>Descripción</Text>

      <TextInput
        style={[styles.input, { height: 90 }]}
        multiline
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <Text>Precio</Text>

      <TextInput
        style={styles.input}
        placeholder="Precio"
        keyboardType="numeric"
        value={precio}
        onChangeText={setPrecio}
      />

      <Text>Categoría</Text>

      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={categoria}
        onChangeText={setCategoria}
      />

      <Button
        title="Seleccionar Imagen"
        onPress={seleccionarImagen}
      />

      {imagen && (
        <Image
          source={{ uri: imagen }}
          style={styles.imagen}
        />
      )}

      <View style={{ marginTop: 20 }}>
        <Button
          title="Guardar Producto"
          onPress={guardarProducto}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },

  imagen: {
    width: 220,
    height: 220,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 10,
  },
});