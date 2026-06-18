import { Text, View, StyleSheet  } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style= { { alignItems: 'center' , marginTop: 20} }>
      <Text>Mi nombre es Tiago Corválan</Text>
      <Link href="/saludo">
        Ir a saludo.
      </Link>
      <Link href="/perfil">
        Ir a perfil
      </Link>
    </View>
  );
}