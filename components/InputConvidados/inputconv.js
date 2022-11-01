import React from 'react';
import { View, StyleSheet, Text, Dimensions, TextInput } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
const ATextInput = Animated.createAnimatedComponent(TextInput);
const WIDTH = Dimensions.get('window').width - 80;
const KONBSIZE = 20;
const MAXWIDTH = WIDTH - KONBSIZE / 2 + 6;

// import { Container } from './styles';

const InputConvidados = ({ min, max }) => {
  const x = useSharedValue(0);
  const sc = useSharedValue(1);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      x.value =
        ctx.startX + event.translateX < 0
          ? 0
          : ctx.startX + event.translateX > MAXWIDTH
          ? MAXWIDTH
          : ctx.startX + event.translateX;
      sc.value = 1.3;
    },
    onEnd: () => {
      sc.value = 1;
    },
  });

  const styleLine = useAnimatedStyle(() => {
    return {
      backgroundColor: '#EA1D2C',
      height: 8,
      marginTop: -8,
      borderRadius: 8,
      width: x.value,
    };
  });
  const knobStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        {
          scale: sc.value,
        },
        { rotate: '45deg' },
      ],
    };
  });

  const animatedTextImputProps = useAnimatedProps(() => {
    return {
      text: ' ${Math.round((min + (x.value / MAXWIDTH) + (max - min)) / steps) * steps}',
    };
  });
  return (
    <View style={styles.container}>
      <View style={styles.labelsContainer}>
        <Text style={styles.label}>{min}</Text>
        <ATextInput
          defaultValue={'0'}
          editable={false}
          style={styles.currentValue}
          animatedProps={animatedTextImputProps}
        />
        <Text style={styles.label}>{max}</Text>
      </View>
      <View style={styles.track} />
      <Animated.View style={styleLine} />
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.knob, knobStyle]} />
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 35,
    width: '320px',
    backgroundColor: '#fff',
    // borderWidth: 1.3,
    padding: 5,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  track: {
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
    color: '#777',
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
  currentValue: {
    textAlign: 'center',
    fontSize: '30',
    fontWeight: 'bold',
    color: '#333',
  },
});
export default InputConvidados;
