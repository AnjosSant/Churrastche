import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Icon from "react-native-vector-icons/FontAwesome";

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
        <Header name="Mapa"/>
        <Text style={styles.nome_endereco}>Endereço do Evento</Text>   
        <View style = {styles.container}>
            <TextInput style={styles.input} placeholder="Digite seu CEP" keyboardType="numeric" />
        </View>
        <View style={styles.icon_position}>
            <Icon name="search" size={30} style={styles.icon}/>
        </View>
        <View style={styles.text_content}>
            <Text style={styles.text}>Lojas da swift mais próximas do seu evento:</Text>
        </View>
    </View>

    );
}
const styles = StyleSheet.create({
    nome_endereco:
    {
        fontSize: 18,
        fontWeight: 'regular',
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
        fontWeight: 'regular',
    },
    text_content:{
        display: "flex",
        textAlign: "center",

    },
    input:{
        fontFamily: "Poppins_400Regular",
        width: "90%",
        paddingLeft: 50,
        marginLeft: 10,
        marginRight: 10,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#fff",
        shadowOffset: {
            width:0, height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:5,
        marginTop: 15  ,
    },
    icon:{
        zIndex:999999,   
    },
    icon_position:{
        marginLeft: 30,
        position: "relative",
        bottom: 42
    },
})