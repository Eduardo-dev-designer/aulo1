import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Contador from '../components/contador';
import { useRouter } from 'expo-router';

export default function Index() {
  const [quantidade, setQuantidade] = useState(0);
  const router = useRouter();

  function Botao(){
    router.push('/botao');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Controle de Pessoas</Text>

      <Contador
        titulo="Pessoas na sala"
        quantidade={quantidade}
      />

      <Button
        title="Entrou"
        onPress={() => setQuantidade(quantidade + 1)}
      />

      <Button
        title="Saiu"
        onPress={() => {
          if (quantidade > 0) {
            setQuantidade(quantidade - 1);
          }
        }}
      />

        <Button onPress={Botao}
        title="tela2"
      />

    </View>
  );
}