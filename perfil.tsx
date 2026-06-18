import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Perfil() {
  return (
    <View style= { { alignItems: 'center', marginTop: 20} }>
        <Text>
            Nombre: Tiago Corvalan
        </Text>
        <Text>
            Edad: 18 años
        </Text>
        <Text>
            Curso: 7mo 2da Programación
        </Text>
        <Link href="/">
            Ir a Inicio
        </Link>
        <Link href="/saludo">
            Ir a Saludo
        </Link>
  </View>
  );
}