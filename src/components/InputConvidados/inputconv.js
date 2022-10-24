import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width - 80;
const KONBSIZE = 20;
const MAXWIDTH = WIDTH - KONBSIZE / 2 + 6;

// import { Container } from './styles';

const InputConvidados = ({min, max, steps}) => {
  return (
  <View style={styles.container}>
    <View style={styles.labelsContainer}>
    <Text style={styles.label}>{min}</Text>
    <Text style={styles.label}>{max}</Text>
    </View>
    <View style={styles.track}/>
    
    </View>   
  );
};

const styles = StyleSheet.create({
container: {
    marginHorizontal:40,
},
track:{
    height: 8,
    backgroundColor: '#EA1D2C',
    borderRadius: 8,
},
labelsContainer: { 
    width: WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
},
label: {
    color: '#777'
}
})
export default InputConvidados;