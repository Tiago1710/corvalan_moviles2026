import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PantallaInicio({ navigation }) {
  const usuario = { nombre: 'Tiago', edad: 18 };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Pantalla de Inicio</Text>
      <Button title="Ver detalles del usuario" onPress={() => navigation.navigate('Detalle', { datos: usuario })} />
      <Button title="Ir a Acerca De" onPress={() => navigation.navigate('AcercaDe')} />
    </View>
  );
}
