import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Header from '../../../components/Header/header';

export default function Convidados() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  const [horas, sethoras] = useState(0);
  const [qntm, setqntm] = useState(0);
  const [qnth, setqnth] = useState(0);
  const [qntc, setqntc] = useState(0);
  const [local, setlocal] = useState(0);

  return (
    <ScrollView>
      <Header name="Convidados" />
      <View style={styles.content}>
        <Text style={styles.nome_pagina}>Horas de churrasco:</Text>
        <View style={styles.container}>
          <View style={styles.labelsContainer}>
            <Text style={styles.label}>2</Text>
            <Text style={styles.currentValue}>{Math.floor(horas)}</Text>
            <Text style={styles.label}>8</Text>
          </View>
          <Slider
            style={{ width: "100%" , height: 20, marginBottom: 15 }}
            minimumValue={2}
            maximumValue={8}
            onValueChange={(value) => sethoras(value)}
            thumbTintColor="#EA1D2C"
            minimumTrackTintColor="#EA1D2C"
            maximumTrackTintColor="#777"
          />
        </View>

        <Text style={styles.nome_pagina}>Quantidade de mulheres:</Text>
        <View style={styles.container}>
          <View style={styles.labelsContainer}>
            <Text style={styles.label}>0</Text>
            <Text style={styles.currentValue}>{Math.floor(qntm)}</Text>
            <Text style={styles.label}>50</Text>
          </View>
          <Slider
            style={{ width: "100%", height: 20, marginBottom: 15 }}
            minimumValue={0}
            maximumValue={50}
            onValueChange={(value) => setqntm(value)}
            thumbTintColor="#EA1D2C"
            minimumTrackTintColor="#EA1D2C"
            maximumTrackTintColor="#777"
          />
        </View>

        <Text style={styles.nome_pagina}>Quantidade de homens:</Text>

        <View style={styles.container}>
          <View style={styles.labelsContainer}>
            <Text style={styles.label}>0</Text>
            <Text style={styles.currentValue}>{Math.floor(qnth)}</Text>
            <Text style={styles.label}>50</Text>
          </View>
          <Slider
            style={{ width: "100%", height: 20, marginBottom: 15 }}
            minimumValue={0}
            maximumValue={50}
            onValueChange={(value) => setqnth(value)}
            thumbTintColor="#EA1D2C"
            minimumTrackTintColor="#EA1D2C"
            maximumTrackTintColor="#777"
          />
        </View>

        <Text style={styles.nome_pagina}>Quantidade de crianças:</Text>

        <View style={styles.container}>
          <View style={styles.labelsContainer}>
            <Text style={styles.label}>0</Text>
            <Text style={styles.currentValue}>{Math.floor(qntc)}</Text>
            <Text style={styles.label}>50</Text>
          </View>
          <Slider
            style={{ width: "100%", height: 20, marginBottom: 15 }}
            minimumValue={0}
            maximumValue={50}
            onValueChange={(value) => setqntc(value)}
            thumbTintColor="#EA1D2C"
            minimumTrackTintColor="#EA1D2C"
            maximumTrackTintColor="#777"
          />
        </View>

        <Text style={styles.nome_pagina}>Locação do local para o evento:</Text>

        <View style={styles.container}>
          <View style={styles.labelsContainer}>
            <Text style={styles.label}>0</Text>
            <Text style={styles.currentValue}>R$ {Math.floor(local)},00</Text>
            <Text style={styles.label}>5000</Text>
          </View>
          <Slider
            style={{ width: "100%", height: 20, marginBottom: 15 }}
            minimumValue={0}
            maximumValue={5000}
            onValueChange={(value) => setlocal(value)}
            thumbTintColor="#EA1D2C"
            minimumTrackTintColor="#EA1D2C"
            maximumTrackTintColor="#777"
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    margintop: 100,
  },
  nome_pagina: {
    marginHorizontal: 35,
    fontFamily: 'Poppins_400Regular',
    fontWeight: 'bold',
  },
  container: {
    marginHorizontal: 35,
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
  labelsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  currentValue: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
});