import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Perfil() {
  return (
    <View style= { { alignItems: 'center' , marginTop: 20} }>
        <Text>Nombre: Tiago Corvalán</Text>
        <Text>Edad: 18 años</Text>
        <Text>Curso: 7mo 2da Programación</Text>
        <Link href="/saludo">
            Ir a saludo
        </Link>
        <Link href="/perfil">
            Ir a perfil
        </Link>
    </View>
  );
}