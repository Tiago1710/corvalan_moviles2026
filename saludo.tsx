import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Saludo() {
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text>Hola desde otra pantalla</Text>
    <Link href="/">
        Ir a inicio
      </Link>
      <Link href="/perfil">
        Ir a perfil
      </Link>
    </View>
  );
}