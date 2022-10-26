import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

import Header from '../../components/Header/header';

export default function Mapa(){

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return(
    <View style={styles.content}>
        <Header name="MAPA"/>
        <Text style={styles.nome_endereco}>Endereço do Evento</Text>   
        <View style = {styles.container}>
        <TextInput style={styles.input} placeholder="useless placeholder" keyboardType="numeric" />
            {/* <Text style={styles.text}>Pagina mapa</Text> */}
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    nome_endereco:
    {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 25  ,
        marginLeft: 20
    },
    container:
    {
        flex:1,
        justifyContent: "center",
        alignItems:'center',
    },
    text:{
        fontFamily: "Poppins_400Regular",
        fontSize: 25,
        fontWeight: 'bold',
    },
    input:{
        fontFamily: "Poppins_400Regular",
        width: "90%",
        paddingLeft: 15,
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        borderRadius: 5,
        backgroundColor: "#fff",
        shadowOffset: {
            width:0, height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:5,
    }
})