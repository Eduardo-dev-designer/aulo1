import { border } from "@expo/ui/jetpack-compose/modifiers";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ExemploTextInput(){
    const [textoCampo,setTextoCampo]= useState<string>('');
    const [numeroCampo,setNumeroCampo] =useState<number>(0);
    function armazenarNumero(texto:string){
        if(Number.isNaN(texto)){
            setNumeroCampo(0)
        }else{
            setNumeroCampo(Number.parseFloat(texto))

        }

    }

        const [digitos,setDigitados] = useState('');

        const preenchido = digitos.padStart(3,'0');
        const texto = `${preenchido.slice(0,-2)}`;

        function alterarPreco(valorDigitado:string){
            const somenteDigitos = valorDigitado.replace(/\D/g,'');
            setDigitados(somenteDigitos.replace(/^0+/,'')); 
        }

        const numeroOpcao1= Number.parseFloat(texto.replace(',','.'));
        const numeroOpcao2= Number.parseFloat(digitos)/ 100;


    return(

        <View>
            <TextInput 
                onChangeText={(texto)=>{setTextoCampo(texto)}}
                value={textoCampo}
                style={style.campoTexto}
                multiline
            
            />
            <Text>campo com placeholder</Text>
            <TextInput 
                placeholder="digitr seu nome"
                placeholderTextColor={'red'}
                style={style.campoTexto}
            
            />
            <Text>Campo numerico</Text>
                <TextInput
                    keyboardType="twitter"
                    style={style.campoTexto}
                    onChangeText={(texto)=> armazenarNumero(texto) 
                    } 
                    value={numeroCampo.toString()}               
                
                
                />


        </View>

    )


}


const style = StyleSheet.create({
    campoTexto: {
        borderWidth:2,
        borderColor: 'green',
        borderRadius: 5


    }



})