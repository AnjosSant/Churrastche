import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'; 
import InputConvidados from '../../components/InputConvidados/inputconv';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Header from '../../components/Header/header';

export default function Convidados(){
    
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });

    return(

        
        <SafeAreaView style={styles.container}>
            <Header name="Convidados" />
            <View style={styles.content}>
            <Text style={styles.nome_pagina}>Horas de churrasco:</Text>
            <InputConvidados min={3} max={6} />
            <Text style={styles.nome_pagina}>Quantidade de mulheres:</Text>
            <InputConvidados min={0} max={50} />
            <Text style={styles.nome_pagina}>Quantidade de homens:</Text>
            <InputConvidados min={0} max={50} />
            <Text style={styles.nome_pagina}>Quantidade de crianças:</Text>
            <InputConvidados min={0} max={50} />
            <Text style={styles.nome_pagina}>Locação do local para o evento:</Text>
            <InputConvidados min={0} max={1000} />
            
            </View>
        </SafeAreaView>

      
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    },
    content: {       
        flex: 1, 
        margintop:100,
    },
    nome_pagina: {
        marginHorizontal:35,   
        fontFamily: "Poppins_400Regular",
        fontWeight: 'bold',
    },
})