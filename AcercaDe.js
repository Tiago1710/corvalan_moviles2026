import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PantallaAcercaDe({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 10 }}>Pantalla de Acerca De</Text>
      <Button title="Volver al inicio" onPress={() => navigation.goBack()} />
    </View>
  );
}