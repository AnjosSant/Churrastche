import { View, Text, StyleSheet, Image} from 'react-native';
import Logoapp from '../../img/LOGO2.png';

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.content} >
        <Image style={styles.imagem_logo} source={Logoapp} alt='header'/>
        <View style={styles.texto}>
          <Text style={styles.nome_pagina}>{name}</Text>
        </View>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EA1D2C',
    flexDirection: 'row',
    paddingStart: 2,
    paddingEnd: 20,
    paddingBottom: 15,
    height: 140,
    width: '100%',
  },
   content:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
    imagem_logo:{
    width: 100,
    height: 100,
  },
    nome_pagina:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
    texto:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    right: 10,
  }
})
