import React from "react";
import {View, Text, Button, FlatList,  Alert, StyleSheet} 
from "react-native";

export default function Inicio({navigation, productos,eliminarProducto}) 
{

  const confirmarEliminar = (id) => {
    Alert.alert(
      "Eliminar",
      "¿Desea eliminar el producto?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Eliminar",
          onPress: () => eliminarProducto(id)
        }
      ]
    );
  };

  return (
    <View style={styles.container}>

      <Button
        title="Agregar Producto"
        onPress={() => navigation.navigate("Agregar")}
      />

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text>Nombre: {item.nombre}</Text>

            <Text>Descripción: {item.descripcion}</Text>

            <Text>Precio: ${item.precio}</Text>

            <View style={styles.botones}>

              <Button
                title="Editar"
                onPress={() =>
                  navigation.navigate("Editar", {
                    producto: item
                  })
                }
              />

              <Button
                title="Eliminar"
                color="red"
                onPress={() => confirmarEliminar(item.id)}
              />

            </View>

          </View>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20
  },

  card:{
    borderWidth:1,
    borderRadius:10,
    padding:15,
    marginTop:15
  },

  botones:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10
  }

});