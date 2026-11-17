import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Produto from '../components/produto';

export default function Index() {
  const [quantidade, setQuantidade] = useState(1);

  const nome = 'Camiseta';
  const preco = 50;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Pedido de Produto</Text>

      <Produto
        produto={nome}
        preco={preco}
        quantidade={quantidade}
      />

      <Button
        title="Aumentar"
        onPress={() => setQuantidade(quantidade + 1)}
      />

      <Button
        title="Diminuir"
        onPress={() => {
          if (quantidade > 1) {
            setQuantidade(quantidade - 1);
          }
        }}
      />

    </View>
  );
}