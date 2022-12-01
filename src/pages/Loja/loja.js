import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/header';
import Toast from 'react-native-toast-message';

export default function Home() {
  const [isPicanhaA, setisPicanhaA] = useState(false);
  const [isCupim, setisCupim] = useState(false);
  const [ismaminha, setismaminha] = useState(false);
  const [isPicanhaS, setisPicanhaS] = useState(false);
  const [isPernil, setisPernil] = useState(false);
  const [isLinguica, setisLinguica] = useState(false);
  const [isCoxa, setisCoxa] = useState(false);
  const [isCoracao, setisCoracao] = useState(false);
  const [isAsa, setisAsa] = useState(false);
  const [isFosforos, setisFosforos] = useState(false);
  const [isSal, setisSal] = useState(false);
  const [isCarvao, setisCarvao] = useState(false);
  const [isSkol, setisSkol] = useState(false);
  const [isHeineken, setisHeineken] = useState(false);
  const [isBrahma, setisBrahma] = useState(false);
  const [isAgua, setisAgua] = useState(false);
  const [isGuarana, setisGuarana] = useState(false);
  const [isCoca_cola, setisCoca_cola] = useState(false);
  const [isSuco, setisSuco] = useState(false);

  const picanha_Angus = () => {
    setisPicanhaA((previousState) => !previousState);
  };
  const cupim = () => {
    setisCupim((previousState) => !previousState);
  };
  const maminha = () => {
    setismaminha((previousState) => !previousState);
  };
  const picanha_suins = () => {
    setisPicanhaS((previousState) => !previousState);
  };
  const pernil = () => {
    setisPernil((previousState) => !previousState);
  };
  const linguica = () => {
    setisLinguica((previousState) => !previousState);
  };
const coxa = () => {
    setisCoxa((previousState) => !previousState);
  };
const coracao = () => {
    setisCoracao((previousState) => !previousState);
  };
const asa = () => {
    setisAsa((previousState) => !previousState);
  };
  const fosforos = () => {
    setisFosforos((previousState) => !previousState);
  };
  const sal_grosso = () => {
    setisSal((previousState) => !previousState);
  };
  const carvao = () => {
    setisCarvao((previousState) => !previousState);
  };
  const skol_lata = () => {
    setisSkol((previousState) => !previousState);
  };
  const heineken_lata = () => {
    setisHeineken((previousState) => !previousState);
  };
  const brahma = () => {
    setisBrahma((previousState) => !previousState);
  };
  const agua = () => {
    setisAgua((previousState) => !previousState);
  };
  const guarana = () => {
    setisGuarana((previousState) => !previousState);
  };
  const coca_cola = () => {
    setisCoca_cola((previousState) => !previousState);
  };
  const suco = () => {
    setisSuco((previousState) => !previousState);
  };
  const dataCortes = [
    {
      tipo: 'bovino',
      nome: 'Picanha Angus',
      preco: 98,
      Estado: isPicanhaA,
    },
    {
      tipo: 'bovino',
      nome: 'Cupim',
      preco: 34,
      Estado: isCupim,
    },
    {
      tipo: 'bovino',
      nome: 'Maminha',
      preco: 49,
      Estado: ismaminha,
    },
    {
      tipo: 'suino',
      nome: 'Picanha suína',
      preco: 23,
      Estado: isPicanhaS,
    },
    {
      tipo: 'suino',
      nome: 'Pernil',
      preco: 26,
      Estado: isPernil,
    },
    {
      tipo: 'suino',
      nome: 'Linguiça',
      preco: 16,
      Estado: isLinguica,
    },
    {
      tipo : 'frango',
      nome : 'Coxa',
      preco : 13.98,
      Estado : isCoxa
    },
    {
      tipo : 'frango',
      nome : 'Coração',
      preco : 25.46,
      Estado : isCoracao
    },
    {
      tipo : 'frango',
      nome : 'Asa',
      preco : 13.96,
      Estado : isAsa
    },
    {
      tipo: 'essenciais',
      nome: 'Fósforos',
      preco: 2.5,
      Estado: isFosforos,
    },
    {
      tipo: 'essenciais',
      nome: 'Carvão',
      preco: 20,
      Estado: isCarvao,
    },
    {
      tipo: 'essenciais',
      nome: 'Sal grosso',
      preco: 4.5,
      Estado: isSal,
    },
    {
      tipo: 'bebidas_alcoolicas',
      nome: 'Skol lata',
      preco: 2.6,
      Estado: isSkol,
    },
    {
      tipo: 'bebidas_alcoolicas',
      nome: 'Heineken lata ',
      preco: 4.5,
      Estado: isHeineken,
    },
    {
      tipo: 'bebidas_alcoolicas',
      nome: 'Brahma',
      preco: 3.60,
      Estado: isBrahma,
    },
    {
      tipo: 'bebidas_nao_alcoolicas',
      nome: 'Água',
      preco: 2.75,
      Estado: isAgua,
    },
    {
      tipo: 'bebidas_nao_alcoolicas',
      nome: 'Guaraná',
      preco: 5,
      Estado: isGuarana,
    },
    {
      tipo: 'bebidas_nao_alcoolicas',
      nome: 'Coca cola',
      preco: 7,
      Estado: isCoca_cola,
    },
    {
      tipo: 'bebidas_nao_alcoolicas',
      nome: 'Suco',
      preco: 4.8,
      Estado: isSuco,
    },
  ];

  const guardarBanco = () => {
    var filtroCortes = dataCortes.filter((dataCortes) => dataCortes.Estado === true);

    
    filtroCortes.length > 0
      ? AsyncStorage.setItem('dataCortes', JSON.stringify(filtroCortes)) &&
        navigation.navigate('Lista')
      : Toast.show({
          type: 'info',
          position: 'bottom',
          text1: 'Selecione ao menos 1 Item!',
          visibilityTime: 3000,
          autoHide: true,
          onShow: () => {},
          onHide: () => {},
        });
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
            thumbColor={!isPicanhaA ? '#fff' : '#ea1d2c'}
            onValueChange={picanha_Angus}
            value={isPicanhaA}
          />
        </View>
        <View style={style.textHeader1}>
          <Text> Cupim - R$ 34,96 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isCupim ? '#fff' : '#ea1d2c'}
            onValueChange={cupim}
            value={isCupim}
          />
        </View>
        <View style={style.textHeader1}>
          <Text> Maminha - R$ 49,96 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!ismaminha ? '#fff' : '#ea1d2c'}
            onValueChange={maminha}
            value={ismaminha}
          />
        </View>
        <View style={style.container}>
          <Text> Corte suíno </Text>
        </View>
        <View style={style.textHeader1}>
          <Text>Picanha suína - R$ 23,96 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isPicanhaS ? '#fff' : '#ea1d2c'}
            onValueChange={picanha_suins}
            value={isPicanhaS}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Pernil - R$ 26,00 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isPernil ? '#fff' : '#ea1d2c'}
            onValueChange={pernil}
            value={isPernil}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Linguica - R$ 15,96 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isLinguica ? '#fff' : '#ea1d2c'}
            onValueChange={linguica}
            value={isLinguica}
          />
        </View>
    
        <View style={style.container}><Text>Frango</Text></View>

        <View style={style.textHeader1}>
          <Text> Coxa - R$ 13,98 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isCoxa ? '#fff' : '#ea1d2c'}
            onValueChange={coxa}
            value={isCoxa}
          />
        </View>

         
        <View style={style.textHeader1}>
          <Text>Coração - R$ 25,46 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isCoracao ? '#fff' : '#ea1d2c'}
            onValueChange={coracao}
            value={isCoracao}
          />
        </View>

         
        <View style={style.textHeader1}>
          <Text>Asa - R$ 13,96 / Kg </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isAsa ? '#fff' : '#ea1d2c'}
            onValueChange={asa}
            value={isAsa}
          />
        </View>
        <View style={style.container}>
          <Text> Essenciais </Text>
        </View>
        <View style={style.textHeader1}>
          <Text>Fósforos - R$ 2,50 / Un </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isFosforos ? '#fff' : '#ea1d2c'}
            onValueChange={fosforos}
            value={isFosforos}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Sal grosso - R$ 4,50 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isSal ? '#fff' : '#ea1d2c'}
            onValueChange={sal_grosso}
            value={isSal}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Carvão - R$ 20,00 / 5Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isCarvao ? '#fff' : '#ea1d2c'}
            onValueChange={carvao}
            value={isCarvao}
          />
        </View>
        <View style={style.container}>
          <Text> Bebidas alcoólicas </Text>
        </View>

        <View style={style.textHeader1}>
          <Text>Skol lata - R$ 2,60 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isSkol ? '#fff' : '#ea1d2c'}
            onValueChange={skol_lata}
            value={isSkol}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Heineken lata - R$ 4,50 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isHeineken ? '#fff' : '#ea1d2c'}
            onValueChange={heineken_lata}
            value={isHeineken}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Brahma Puro Malte - R$ 3,60 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isBrahma ? '#fff' : '#ea1d2c'}
            onValueChange={brahma}
            value={isBrahma}
          />
        </View>

        <View style={style.container}>
          <Text> Bebidas não alcoólicas </Text>
        </View>

        <View style={style.textHeader1}>
          <Text>Água 1,5l - R$ 2,75 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isAgua ? '#fff' : '#ea1d2c'}
            onValueChange={agua}
            value={isAgua}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Guaraná 2l - R$ 5,00 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isGuarana ? '#fff' : '#ea1d2c'}
            onValueChange={guarana}
            value={isGuarana}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Coca-cola 2l - R$ 7,00 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isCoca_cola ? '#fff' : '#ea1d2c'}
            onValueChange={coca_cola}
            value={isCoca_cola}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Suco 1l - R$ 4,80 /un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isSuco ? '#fff' : '#ea1d2c'}
            onValueChange={suco}
            value={isSuco}
          />
        </View>
        <TouchableOpacity
          style={style.buttonNext}
          onPress={() => {
            guardarBanco();
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
    height: 1890,
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