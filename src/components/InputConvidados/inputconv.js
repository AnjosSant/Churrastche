import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
const WIDTH = Dimensions.get('window').width - 80;
const KONBSIZE = 20;
const MAXWIDTH = WIDTH - KONBSIZE / 2 + 6;

// import { Container } from './styles';

const InputConvidados = ({min, max}) => {
  const x = useSharedValue(0);
  const sc = useSharedValue(1);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
    },
    onActive: () =>{

    },
    onEnd: () => {

    },
  })

  const styleLine = useAnimatedStyle (() => {
    return{
      backgroundColor: '#EA1D2C',
      height: 8,
      marginTop: -8,
      borderRadius: 8,
      width: x.value,
    }
  })
  const knobStyle = useAnimatedStyle (() => {
    return{
      transform: [
        {
          translateX: x.value,
        },
        {
          scale: sc.value,
        },
        { rotate: '45deg' },
      ],
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
    <PanGestureHandler onGestureEvent={gestureHandler}>
    <Animated.View style={[styles.knob,knobStyle]} />
    </PanGestureHandler>
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
},
knob: {
  height: KONBSIZE,
  width: KONBSIZE,
  borderTopRightRadius: KONBSIZE / 2,
  borderBottomRightRadius: KONBSIZE / 2,
  borderBottomLeftRadius: KONBSIZE / 2,
  backgroundColor: '#EA1D2C',
  marginTop: -(KONBSIZE / 2 - 12),
  marginLeft: -8,
},
})
export default InputConvidados;