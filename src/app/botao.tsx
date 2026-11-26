import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Produto from '../components/produto';

export default function Index() {
  const [quantidade, setQuantidade] = useState(1);

  const nome = 'Playstation 7';
  const preco = 5999.98;
  const precopromo = true;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Pedido de Produto</Text>

      <Produto
        produto={nome}
        preco={preco}
        quantidade={quantidade}
        precopromo={precopromo}
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