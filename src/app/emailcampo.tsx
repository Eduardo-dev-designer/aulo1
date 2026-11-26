import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
    const [email,setEmail] = useState<string>('');
    const [validar,setValidar] = useState<boolean>();
    const [erro,setErro]= useState<boolean>();
    const [validou,setValidou] = useState<boolean>();

    function validars(){
        if(email.trim()=== '')
            setErro(true)
    }
    if(!email.includes('@'))
        setErro (true)
    return

    setErro(false);
    setValidou(true);

 {
    erro && <Text>Prencha um e-mail váldo</Text>

 }

 {
    validou && <Text> e-mail váldo</Text>

 }
return(
    <View  style= { {flex: 1, justifyContent: 'center', alignItems: 'center'} }>

    <Text>E-mail</Text>
    <TextInput
    value={email}
    onChangeText={setEmail}

    
    />
    <Button title= "validar"
            onPress={validars}/>




    </View>



);


}
const styles = StyleSheet.create({
    erro: {
        borderWidth:2,
        borderColor: 'green'

    }

    

})
