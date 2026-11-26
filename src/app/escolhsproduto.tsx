import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
    const [mostrarDetalhes,setMostrarDetalhes] = useState(false);
   
 
    
  


    return(

        <View style= { {flex: 1, justifyContent: 'center', alignItems: 'center'} }>
            <Button
            title={mostrarDetalhes? 'ocultyar detalhes': 'mostrar detalhes'}
            onPress={()=> setMostrarDetalhes(anterior=> !anterior)}
            
            />
            {mostrarDetalhes &&(<Text>Batatinha pronta ein</Text>)}



        </View>

    );

}