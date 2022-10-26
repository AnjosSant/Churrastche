import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
const WIDTH = Dimensions.get('window').width - 80;
const KONBSIZE = 20;
const MAXWIDTH = WIDTH - KONBSIZE / 2 + 6;

// import { Container } from './styles';

const InputConvidados = ({min, max}) => {
  const x = useSharedValue(0);

  const styleLine = useAnimatedStyle (() => {
    return{
      backgroundColor: '#EA1D2C',
      height: 8,
      marginTop: -8,
      borderRadius: 8,
      width: x.value,
    }
  })
  return (
  <View style={styles.container}>
    <View style={styles.labelsContainer}>
    <Text style={styles.label}>{min}</Text>
    <Text style={styles.label}>{max}</Text>
    </View>
    <View style={styles.track}/>
    <Animated.View style={styleLine} />
    

    </View>   
  );
};

const styles = StyleSheet.create({
container: {
    marginHorizontal:40,
},
track:{
    height: 8,
    backgroundColor: '#777',
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