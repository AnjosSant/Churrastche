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
  const [isGelo, setisGelo] = useState(false);
  const [isArroz, setisArroz] = useState(false);
  const [isFarofa, setisFarofa] = useState(false);
  const [isPao, setisPao] = useState(false);
  const [isIscaPeixe, setisIscaPeixe] = useState(false);
  const [isKibe, setisKibe] = useState(false);
  const [isHamburguerV, setisHamburguerV] = useState(false);
  const [isSkol, setisSkol] = useState(false);
  const [isHeineken, setisHeineken] = useState(false);
  const [isJack, setisJack] = useState(false);
  const [isAgua, setisAgua] = useState(false);
  const [isGuarana, setisGuarana] = useState(false);
  const [isCoca_cola, setisCoca_cola] = useState(false);
  const [isSuco, setisSuco] = useState(false);
  const [isDescartveis, setisDescartveis] = useState(false);

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
  const gelo = () => {
    setisGelo((previousState) => !previousState);
  };
  const arroz = () => {
    setisArroz((previousState) => !previousState);
  };
  const farofa = () => {
    setisFarofa((previousState) => !previousState);
  };
  const pao_frances = () => {
    setisPao((previousState) => !previousState);
  };
  const isca_de_peixe_vegetal = () => {
    setisIscaPeixe((previousState) => !previousState);
  };
  const kibe_vegetal = () => {
    setisKibe((previousState) => !previousState);
  };
  const hamburguer_vegetal = () => {
    setisHamburguerV((previousState) => !previousState);
  };
  const skol_lata = () => {
    setisSkol((previousState) => !previousState);
  };
  const heineken_lata = () => {
    setisHeineken((previousState) => !previousState);
  };
  const jack_Daniels = () => {
    setisJack((previousState) => !previousState);
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
  const descartavel = () => {
    setisDescartveis((previousState) => !previousState);
  };
  const dataCortes = [
    {
      tipo: 'bovino',
      nome: 'Picanha_Angus',
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
      nome: 'maminha',
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
      nome: 'linguica',
      preco: 16,
      Estado: isLinguica,
    },
    {
      tipo : 'frango',
      nomo : 'coxa',
      preco : 13.98,
      Estado : isCoxa
    },
    {
      tipo : 'frango',
      nomo : 'coracao',
      preco : 25.46,
      Estado : isCoracao
    },
    {
      tipo : 'frango',
      nomo : 'asa',
      preco : 13.96,
      Estado : isAsa
    },
    {
      tipo: 'essenciais',
      nome: 'fósforos',
      preco: 2.5,
      Estado: isFosforos,
    },
    {
      tipo: 'essenciais',
      nome: 'sal grosso',
      preco: 4.5,
      Estado: isSal,
    },
    {
      tipo: 'essenciais',
      nome: ' carvão',
      preco: 20,
      Estado: isCarvao,
    },
    {
      tipo: 'essenciais',
      nome: ' gelo',
      preco: 10,
      Estado: isGelo,
    },
    {
      tipo: 'complementos',
      nome: ' arroz',
      preco: 4.5,
      Estado: isArroz,
    },
    {
      tipo: 'complementos',
      nome: ' farofa',
      preco: 6.5,
      Estado: isFarofa,
    },
    {
      tipo: 'complementos',
      nome: ' pão francês',
      preco: 6.5,
      Estado: isPao,
    },
    {
      tipo: 'vegetariano',
      nome: ' isca_de_peixe_vegetal',
      preco: 43,
      Estado: isIscaPeixe,
    },
    {
      tipo: 'vegetariano',
      nome: 'kibe vegetal ',
      preco: 38,
      Estado: isKibe,
    },
    {
      tipo: 'vegetariano',
      nome: 'hambúrguer vegetal ',
      preco: 57,
      Estado: isHamburguerV,
    },
    {
      tipo: 'bebidas_alcoolicas',
      nome: 'skol lat ',
      preco: 2.6,
      Estado: isSkol,
    },
    {
      tipo: 'bebidas_alcoolicas',
      nome: 'heineken lata ',
      preco: 4.5,
      Estado: isHeineken,
    },
    {
      tipo: 'bebidas_alcoolicas',
      nome: 'jack Daniels ',
      preco: 140,
      Estado: isJack,
    },
    {
      tipo: 'bebidas_nao_alcoolicas',
      nome: 'agua ',
      preco: 2.75,
      Estado: isAgua,
    },
    {
      tipo: 'bebidas_nao_alcoolicas',
      nome: 'guaraná ',
      preco: 5,
      Estado: isGuarana,
    },
    {
      tipo: 'bebidas_nao_alcoolicas',
      nome: 'coca cola ',
      preco: 7,
      Estado: isCoca_cola,
    },
    {
      tipo: 'bebidas_nao_alcoolicas',
      nome: 'suco ',
      preco: 4.8,
      Estado: isSuco,
    },
    {
      tipo: 'descartavel',
      nome: 'descartavel ',
      preco: 35,
      Estado: isDescartveis,
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
    
        <View style={style.container}><Text>frango</Text></View>

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
        <View style={style.textHeader1}>
          <Text>Gelo - R$ 10,00 / Un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isGelo ? '#fff' : '#ea1d2c'}
            onValueChange={gelo}
            value={isGelo}
          />
        </View>

        <View style={style.container}>
          <Text> Complementos </Text>
        </View>

        <View style={style.textHeader1}>
          <Text>Arroz - R$ 4,50 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isArroz ? '#fff' : '#ea1d2c'}
            onValueChange={arroz}
            value={isArroz}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Farofa - R$ 6,50 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isFarofa ? '#fff' : '#ea1d2c'}
            onValueChange={farofa}
            value={isFarofa}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Pão francês - R$ 0,80 / un</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isPao ? '#fff' : '#ea1d2c'}
            onValueChange={pao_frances}
            value={isPao}
          />
        </View>

        <View style={style.container}>
          <Text> Vegetariano </Text>
        </View>
        <View style={style.textHeader1}>
          <Text>Isca de peixe vegetal - R$ 43,00 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isIscaPeixe ? '#fff' : '#ea1d2c'}
            onValueChange={isca_de_peixe_vegetal}
            value={isIscaPeixe}
          />
        </View>
        <View style={style.textHeader1}>
          <Text>Kibe vegetal R$ 38,00 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isKibe ? '#fff' : '#ea1d2c'}
            onValueChange={kibe_vegetal}
            value={isKibe}
          />
        </View>
        <View style={style.textHeader1}>
          <Text> Hambúrguer vegetal - R$ 57,00 / Kg</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isHamburguerV ? '#fff' : '#ea1d2c'}
            onValueChange={hamburguer_vegetal}
            value={isHamburguerV}
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
          <Text>Jack Daniel's - R$ 140,00 / litro</Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isJack ? '#fff' : '#ea1d2c'}
            onValueChange={jack_Daniels}
            value={isJack}
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
         <View style={style.container}>
          <Text> Outros </Text>
        </View>

        <View style={style.textHeader1}>
          <Text>Descartáveis- R$ 35,00 </Text>
          <Switch
            trackColor={{ false: 'd3d3d3', true: '#ea1d2c' }}
            thumbColor={!isDescartveis ? '#fff' : '#ea1d2c'}
            onValueChange={descartavel}
            value={isDescartveis}
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