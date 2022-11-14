import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header/header';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  return (
    <ScrollView>
      <View style={lista.container}>
        <Header name="Resultado" />
        <View style={lista.cardHeader}><Text style={lista.text}>Lista de compra</Text></View>
        <View style={lista.CardBody}></View>
        <View style={lista.CardFooter}><Text style={lista.text}>Total</Text></View>

        <View style={resumo.cardHeader}><Text style={resumo.text}>Lista de despesas</Text></View>
        <View style={resumo.CardBody}></View>
        <View style={resumo.CardFooter}><Text style={resumo.text}>Custo por pagante</Text></View>
      </View>
    </ScrollView>
  );
}
const lista = StyleSheet.create({
  container: {
    height:1200,
  },
  text: {
    color: "#ffffff"
  },
  cardHeader: {
    width: '80%',
    height: 60,
    backgroundColor: '#D03838',
    borderWidth: 1.3,
    padding: 8,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
  },
  CardBody: {
    width: '80%',
    height: 300,
    borderWidth: 1.3,
    padding: 8,
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  CardFooter: {
    width: '80%',
    height: 55,
    borderWidth: 1.3,
    padding: 8,
    backgroundColor: '#D03838',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
  },
});

const resumo = StyleSheet.create({
  cardHeader: {
    width: '80%',
    height: 60,
    backgroundColor: '#ECECEC',
    borderWidth: 1.3,
    padding: 8,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
  },

  CardBody: {
    width: '80%',
    height: 200,
    borderWidth: 1.3,
    padding: 8,
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  CardFooter: {
    width: '80%',
    height: 55,
    borderWidth: 1.3,
    padding: 8,
    backgroundColor: '#ECECEC',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    justifyContent: 'center',
  },
   text: {
    color: "#000000"
  },
});
