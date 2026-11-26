import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Index() {
    const [nome,setNome] = useState<string> ('');

return(
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Nome do Aluno</Text>
    <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={setNome}
    
    />
    <Text>
       Bem-Vindo(a)!!,{nome}
    </Text>



</View>
);
}
