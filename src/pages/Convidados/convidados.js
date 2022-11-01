import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'; 
import InputConvidados from '../../../components/InputConvidados/inputconv';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Header from '../../../components/Header/header'

export default function Convidados(){
    
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });

    return(

        
        <SafeAreaView style={styles.container}>
            <Header name="Convidados" />
            <Text>B.O do rizzadinha</Text>
        </SafeAreaView>

      
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    },

})