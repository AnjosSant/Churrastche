import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

export default function Home(){
    return(

    <View style = {styles.container}>
        <View style = {styles.header}>
        <Text style={styles.textHeader}>Despesas</Text>
        </View>
        <View style={styles.body}>
        <Text style={styles.textBody}>Despesas com Carnes                       R$: 00,00</Text>   
        <Text style={styles.textBody}>Despesas com Bebidas                     R$: 00,00</Text>   
        <Text style={styles.textBody}>Despesas com Outros                       R$: 00,00</Text>   
        </View>
        <View style={styles.footer}>
        <Text style={styles.textFooter}>Total: R$:00,00</Text>           
        </View>
        <View style={styles.rateio}>
        <Text style={styles.textRateio}>Custo por pagante:                       R$: 00,00</Text>  
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
    header:
    {
        width:'80%',
        height: '7%',
        justifyContent:"center",
        backgroundColor: '#D03838',
        borderWidth:1.3,
        padding: 5,
        
    },
    textHeader:
    {
        color: '#ffffff',
        fontWeight: 500,
    },
    body:
    {
        width:'80%',
        height:'25%',
        borderWidth:1.3,
        padding: 8,
        backgroundColor: "#ffffff",
    },
    textBody:
    {
        color: '#000000',
        fontWeight: 400,
        justifyContent: 'center',
    },
    footer:
    {
        width:'80%',
        height:'7%',
        borderWidth:1.3,
        padding: 8,
        backgroundColor: "#D03838",
    },
    textFooter:
    {
        color:'#ffffff',
        fontWeight: 500,
        justifyContent: 'center',
    },
    rateio:{
        width:'80%',
        height:'7%',
        marginTop:30,
        backgroundColor: "#D03838",  
        borderWidth:1.3,
        padding: 8      
    },
    textRateio:
    {
        color: '#ffffff',
        fontWeight: 500,
        justifyContent: 'center',
    },
})