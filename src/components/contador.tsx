import { View, Text } from 'react-native';

type ContadorProps= {

    titulo: String,
    quantidade:number

}

export default function Contador(props: ContadorProps) {
  return (
    <View>
      <Text>{props.titulo}</Text>
      <Text>{props.quantidade}</Text>
    </View>
  );
}