import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import Header from '../../components/Header/header';

export default function Home(){
    return(
    <View>
        <Header name="nome"/>
        <View style = {styles.container}>
            <View>
                <Text style={styles.text}>Pagina home</Text>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent: "center",
        alignItems:'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})