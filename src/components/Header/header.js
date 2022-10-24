import React from 'react';
import { View, Text , StyleSheet, StatusBar, Image } from 'react-native';
import Logoapp from '../../img/LOGO2.png'


const StatusBarHeight = StatusBar.currentHeight ?  StatusBar.currentHeight + 22  : 64

export default function Header({name}) {
 return (
   <View style={styles.container}>
      <View style={styles.content} >
        <Image style={styles.imagem_logo} source={Logoapp} alt='header'/>
        <Text style={styles.nome_pagina}>{name}</Text>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#EA1D2C',
    paddingTop: StatusBarHeight,
    flexDirection: 'row',
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 15,
  },
  content:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imagem_logo:{
    width: 100,
    height: 100,
  },
  nome_pagina:{
    color: '#fff',
    fontWeight: 700,
    fontSize: 32,
  },
})