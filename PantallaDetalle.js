import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PantallaDetalle({ route, navigation }) {
  const { datos } = route.params;
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Text>Nombre: {datos.nombre}</Text>
      <Text>Edad: {datos.edad}</Text>
      <Button title="Volver a Inicio" onPress={() => navigation.navigate('Inicio')} />
    </View>
  );
}