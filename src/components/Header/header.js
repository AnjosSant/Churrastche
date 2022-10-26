import { View, Text , StyleSheet, StatusBar, Image } from 'react-native';
import Logoapp from '../../img/LOGO2.png'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';


const StatusBarHeight = StatusBar.currentHeight ?  StatusBar.currentHeight + 22  : 64

export default function Header({name}) {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

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
    height: 90,
    width: "100%"
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
    marginBottom: 45,
  },
  nome_pagina:{
    color: '#fff',
    fontWeight: 400,
    fontSize: 20,
    marginBottom: 35,
    marginRight: 10,
    fontFamily: "Poppins_400Regular",
  },
})