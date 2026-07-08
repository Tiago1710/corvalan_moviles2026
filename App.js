import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaInicio from './PantallaInicio';
import PantallaDetalle from './PantallaDetalle';
import PantallaAcercaDe from './AcercaDe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={PantallaInicio} />
        <Stack.Screen name="Detalle" component={PantallaDetalle}  options={{ title: 'Información del Usuario' }} />
        <Stack.Screen name="AcercaDe" component={PantallaAcercaDe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}