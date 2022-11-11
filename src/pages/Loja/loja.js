import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../../components/Header/header';

export default function Home() {

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);
  const [isEnabled6, setIsEnabled6] = useState(false);
  const [isEnabled7, setIsEnabled7] = useState(false);
  const [isEnabled8, setIsEnabled8] = useState(false);
  const [isEnabled9, setIsEnabled9] = useState(false);
  const [isEnabled10, setIsEnabled10] = useState(false);
  const [isEnabled11, setIsEnabled11] = useState(false);
  const [isEnabled12, setIsEnabled12] = useState(false);
  const [isEnabled13, setIsEnabled13] = useState(false);
  const [isEnabled14, setIsEnabled14] = useState(false);
  const [isEnabled15, setIsEnabled15] = useState(false);
  const [isEnabled16, setIsEnabled16] = useState(false);
  const [isEnabled17, setIsEnabled17] = useState(false);
  const [isEnabled18, setIsEnabled18] = useState(false);
  const [isEnabled19, setIsEnabled19] = useState(false);
  const [isEnabled20, setIsEnabled20] = useState(false);
  const [isEnabled21, setIsEnabled21] = useState(false);
  const [isEnabled22, setIsEnabled22] = useState(false);
  const [isEnabled23, setIsEnabled23] = useState(false);

  const picanha_Angus = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const cupim = () => {
    setIsEnabled2((previousState) => !previousState);
  };
  const maminha = () => {
    setIsEnabled3((previousState) => !previousState);
  };
  const picanha_suíns = () => {
    setIsEnabled4((previousState) => !previousState);
  };
  const pernil = () => {
    setIsEnabled5((previousState) => !previousState);
  };
  const linguiça = () => {
    setIsEnabled6((previousState) => !previousState);
  };
  const fósforos = () => {
    setIsEnabled7((previousState) => !previousState);
  };
  const sal_grosso = () => {
    setIsEnabled8((previousState) => !previousState);
  };
  const carvão = () => {
    setIsEnabled9((previousState) => !previousState);
  };
  const gelo = () => {
    setIsEnabled10((previousState) => !previousState);
  };
  const arroz = () => {
    setIsEnabled11((previousState) => !previousState);
  };
  const farofa = () => {
    setIsEnabled12((previousState) => !previousState);
  };
  const pão_francês = () => {
    setIsEnabled13((previousState) => !previousState);
  };
  const isca_de_peixe_vegetal = () => {
    setIsEnabled14((previousState) => !previousState);
  };
  const kibe_vegetal = () => {
    setIsEnabled15((previousState) => !previousState);
  };
  const hambúrguer_vegetal = () => {
    setIsEnabled16((previousState) => !previousState);
  };
  const skol_lata = () => {
    setIsEnabled17((previousState) => !previousState);
  };
  const heineken_lata = () => {
    setIsEnabled18((previousState) => !previousState);
  };
  const jack_Daniels = () => {
    setIsEnabled19((previousState) => !previousState);
  };
  const agua = () => {
    setIsEnabled20((previousState) => !previousState);
  };
  const guaraná = () => {
    setIsEnabled21((previousState) => !previousState);
  };
  const coca_cola = () => {
    setIsEnabled22((previousState) => !previousState);
  };
  const suco = () => {
    setIsEnabled23((previousState) => !previousState);
  };
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Header name="Shop" />
      <View style={style.principal}>
        <View style={style.container}>
          <Text> Corte bovino </Text>
        </View>
        <View style={style.textHeader1}>
          <Text> Picanha Angus - R$ 98,96 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled ? '#fff' : '#ea1d2c'}
            onValueChange={picanha_Angus}
            value={isEnabled}
          />
        </View>
        <View style={style.textHeader1}>
          <Text> Cupim - R$ 34,96 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled2 ? '#fff' : '#ea1d2c'}
            onValueChange={cupim}
            value={isEnabled2}
          />
        </View>
        <View style={style.textHeader1}>
          <Text> Maminha - R$ 49,96 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled3 ? '#fff' : '#ea1d2c'}
            onValueChange={maminha}
            value={isEnabled3}
          />
        </View>
        <View style={style.container}>
          <Text> Corte suíno </Text>
        </View>
        <View style={style.textHeader1}>
          <Text>Picanha suína - R$ 23,96 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled4 ? '#fff' : '#ea1d2c'}
            onValueChange={picanha_suíns}
            value={isEnabled4}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Pernil - R$ 26,00 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled5 ? '#fff' : '#ea1d2c'}
            onValueChange={pernil}
            value={isEnabled5}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Linguiça - R$ 15,96 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled6 ? '#fff' : '#ea1d2c'}
            onValueChange={linguiça}
            value={isEnabled6}
          />
        </View>

        <View style={style.container}>
          <Text> Essenciais </Text>
        </View>
        <View style={style.textHeader1}>
          <Text>Fósforos - R$ 2,50 / Un </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled7 ? '#fff' : '#ea1d2c'}
            onValueChange={fósforos}
            value={isEnabled7}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Sal grosso - R$ 4,50 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled8 ? '#fff' : '#ea1d2c'}
            onValueChange={sal_grosso}
            value={isEnabled8}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Carvão - R$ 20,00 / 5Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled9 ? '#fff' : '#ea1d2c'}
            onValueChange={carvão}
            value={isEnabled9}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Gelo - R$ 10,00 / Un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled10 ? '#fff' : '#ea1d2c'}
            onValueChange={gelo}
            value={isEnabled10}
          />
        </View>

        <View style={style.container}>
          <Text> Complementos </Text>
        </View>

        <View style={style.textHeader1}>
          <Text>Arroz - R$ 4,50 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled11 ? '#fff' : '#ea1d2c'}
            onValueChange={arroz}
            value={isEnabled11}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Farofa - R$ 6,50 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled12 ? '#fff' : '#ea1d2c'}
            onValueChange={farofa}
            value={isEnabled12}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Pão francês - R$ 0,80 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled13 ? '#fff' : '#ea1d2c'}
            onValueChange={pão_francês}
            value={isEnabled13}
          />
        </View>

        <View style={style.container}>
          <Text> Vegetariano </Text>
        </View>
        <View style={style.textHeader1}>
          <Text>Isca de peixe vegetal - R$ 43,00 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled14 ? '#fff' : '#ea1d2c'}
            onValueChange={isca_de_peixe_vegetal}
            value={isEnabled14}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Kibe vegetal R$ 38,00 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled15 ? '#fff' : '#ea1d2c'}
            onValueChange={kibe_vegetal}
            value={isEnabled15}
          />
        </View>
        <View style={style.textHeader1}>
          <Text> Hambúrguer vegetal - R$ 57,00 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled16 ? '#fff' : '#ea1d2c'}
            onValueChange={hambúrguer_vegetal}
            value={isEnabled16}
          />
        </View>

        <View style={style.container}>
          <Text> Bebidas alcoólicas </Text>
        </View>

        <View style={style.textHeader1}>
          <Text>Skol lata - R$ 2,60 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled17 ? '#fff' : '#ea1d2c'}
            onValueChange={skol_lata}
            value={isEnabled17}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Heineken lata - R$ 4,50 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled18 ? '#fff' : '#ea1d2c'}
            onValueChange={heineken_lata}
            value={isEnabled18}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Jack Daniel's - R$ 140,00 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled19 ? '#fff' : '#ea1d2c'}
            onValueChange={jack_Daniels}
            value={isEnabled19}
          />
        </View>

        <View style={style.container}>
          <Text> Bebidas não alcoólicas </Text>
        </View>

        <View style={style.textHeader1}>
          <Text>Água 1,5l - R$ 2,75 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled20 ? '#fff' : '#ea1d2c'}
            onValueChange={agua}
            value={isEnabled20}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Guaraná 2l - R$ 5,00 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled21 ? '#fff' : '#ea1d2c'}
            onValueChange={guaraná}
            value={isEnabled21}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Coca-cola 2l - R$ 7,00 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled22 ? '#fff' : '#ea1d2c'}
            onValueChange={coca_cola}
            value={isEnabled22}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Suco 1l - R$ 4,80 /un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isEnabled23 ? '#fff' : '#ea1d2c'}
            onValueChange={suco}
            value={isEnabled23}
          />
        </View>
        <TouchableOpacity
          style={style.buttonNext}
          onPress={() => {
            navigation.navigate('Mapa');
          }}>
          <Icon name="arrow-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  textHeader1: {
    display: 'flex',
    fontFamily: 'Poppins_400Regular',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    justifyContent: 'space-between',
    left: 20,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 15,
  },
  container: {
    alignItems: 'center',
    marginTop: 5,
  },
  principal: {
    height: 1800,
  },
  buttonNext: {
    position: 'absolute',
    right: 35,
    bottom: 85,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '15%',
    height: 60,
    borderRadius: 70,
    backgroundColor: '#EA1D2C',
   
  },
});
