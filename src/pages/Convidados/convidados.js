import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'; 
import InputConvidados from '../../components/InputConvidados/inputconv';

export default function Convidados(){
    return(

        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
            <InputConvidados min={0} max={50} />

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

})