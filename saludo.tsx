import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Saludo() {
  return (
    <View style= { { alignItems: 'center', marginTop: 20} }>
        <Text>
            Hola desde otra pantalla
        </Text>
        <Link href="/">
            Ir a Inicio
        </Link>
        <Link href="/perfil">
            Ir a Perfil
        </Link>
  </View>
  );
}