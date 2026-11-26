import { View, Text } from "react-native";

type ProdutoProps = {
  produto: String;
  quantidade: number;
  preco: number;
  precopromo: boolean;
};

export default function Produto(props: ProdutoProps) {
  return (
    <View>
      <Text>Produto: {props.produto}</Text>
      <Text>Quantidade: {props.quantidade}</Text>
      <Text>Valor total: R$ {(props.preco * props.quantidade).toFixed(2)}</Text>
      
      {
        props.precopromo && <Text>Promoção de Black Friday</Text>
      }

    </View>
  );
}
