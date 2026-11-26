import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Index() {
    const [email,setEmail] = useState<string>('');
    const [validar,setValidar] = useState<boolean>();

return(
    <View  style= { {flex: 1, justifyContent: 'center', alignItems: 'center'} }>

    <Text>E-mail</Text>
    <TextInput
    value={email}
    onChangeText={setEmail}
    
    />




    </View>



);


}
