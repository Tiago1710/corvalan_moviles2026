import { ScrollView } from 'react-native';
import Card from '././components/card';

export default function Home() {
  return (
    <ScrollView style={{ padding: 20 }}>

      <Card titulo="React Native">
        Aprende a crear aplicaciones móviles multiplataforma.
      </Card>

      <Card titulo="Expo Router">
        Facilita la navegación entre pantallas en Expo.
      </Card>

      <Card titulo="Componentes">
        Los componentes permiten reutilizar código fácilmente.
      </Card>

    </ScrollView>
  );
}