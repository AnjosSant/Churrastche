import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
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
  const alternarSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const alternarSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
  };
   const alternarSwitch3 = () => {
    setIsEnabled3((previousState) => !previousState);
  };
   const alternarSwitch4 = () => {
    setIsEnabled4((previousState) => !previousState);
  };
   const alternarSwitch5 = () => {
    setIsEnabled5((previousState) => !previousState);
  };
  const alternarSwitch6 = () => {
    setIsEnabled6((previousState) => !previousState);
  };
  const alternarSwitch7 = () => {
    setIsEnabled7((previousState) => !previousState);
  };
  const alternarSwitch8 = () => {
    setIsEnabled8((previousState) => !previousState);
  };
  const alternarSwitch9 = () => {
    setIsEnabled9((previousState) => !previousState);
  };
  const alternarSwitch10 = () => {
    setIsEnabled10((previousState) => !previousState);
  };
  const alternarSwitch11 = () => {
    setIsEnabled11((previousState) => !previousState);
  };
  const alternarSwitch12 = () => {
    setIsEnabled12((previousState) => !previousState);
  };
  const alternarSwitch13 = () => {
    setIsEnabled13((previousState) => !previousState);
  };
  const alternarSwitch14 = () => {
    setIsEnabled14((previousState) => !previousState);
  };
  const alternarSwitch15 = () => {
    setIsEnabled15((previousState) => !previousState);
  };
  const alternarSwitch16 = () => {
    setIsEnabled16((previousState) => !previousState);
  };
  const alternarSwitch17 = () => {
    setIsEnabled17((previousState) => !previousState);
  };
  const alternarSwitch18 = () => {
    setIsEnabled18((previousState) => !previousState);
  };
  const alternarSwitch19 = () => {
    setIsEnabled19((previousState) => !previousState);
  };
  const alternarSwitch20 = () => {
    setIsEnabled20((previousState) => !previousState);
  };
  const alternarSwitch21 = () => {
    setIsEnabled21((previousState) => !previousState);
  };
  const alternarSwitch22 = () => {
    setIsEnabled22((previousState) => !previousState);
  };
  const alternarSwitch23 = () => {
    setIsEnabled23((previousState) => !previousState);
  };


  return (
    <ScrollView>
      <Header name="Shop" />
      <View style={style.principal}>
      <View style={style.container}>
       <Text> Corte bovino </Text>
      </View>
      <View style={style.textHeader1}>
        <Text> Picanha Angus - R$ 98,96 / Kg  </Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch}
          value={isEnabled}
        />
      </View>
       <View style={style.textHeader1}>
        <Text> Cupim - R$ 34,96 / Kg  </Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled2 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch2}
          value={isEnabled2}
        />
      </View>
       <View style={style.textHeader1}>
        <Text> Maminha - R$ 49,96 / Kg  </Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled3 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch3}
          value={isEnabled3}
        />
      </View>
       <View style={style.container}>
       <Text> Corte suíno </Text>
      </View>
       <View style={style.textHeader1}>
        <Text>Picanha suíns - R$ 23,96 / Kg  </Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled4 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch4}
          value={isEnabled4}
        />
      </View>
      <View style={style.textHeader1}>
        <Text>Pernil - R$ 26,00 / Kg  </Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled5 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch5}
          value={isEnabled5}
        />
      </View>
       <View style={style.textHeader1}>
        <Text>Linguiça - R$ 15,96 / Kg </Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled6 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch6}
          value={isEnabled6}
        />
      </View>


       <View style={style.container}>
       <Text> Essenciais </Text>
      </View>
        <View style={style.textHeader1}>
        <Text>Fósforos - R$ 2,50 / Un </Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled7 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch7}
          value={isEnabled7}
        />
      </View>
         <View style={style.textHeader1}>
        <Text>Sal grosso - R$ 4,50 / Kg</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled8 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch8}
          value={isEnabled8}
        />
      </View>
       <View style={style.textHeader1}>
        <Text>Carvão - R$ 20,00 / 5Kg</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled9 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch9}
          value={isEnabled9}
        />
      </View>
      <View style={style.textHeader1}>
        <Text>Gelo - R$ 10,00 / Un</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled10 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch10}
          value={isEnabled10}
        />
      </View>


      <View style={style.container}>
       <Text> Complementos </Text>
      </View>

       <View style={style.textHeader1}>
        <Text>Arroz - R$ 4,50 / Kg</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled11 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch11}
          value={isEnabled11}
        />
      </View>
        <View style={style.textHeader1}>
        <Text>Farofa - R$ 6,50 / Kg</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled12 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch12}
          value={isEnabled12}
        />
      </View>
       <View style={style.textHeader1}>
        <Text>Pão frsncês - R$ 0,80 / un</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled13 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch13}
          value={isEnabled13}
        />
      </View>
      

      <View style={style.container}>
       <Text> Vegetariano </Text>
      </View>
      <View style={style.textHeader1}>
        <Text>Isca de peixe vegetal - R$ 43,00 / Kg</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled14 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch14}
          value={isEnabled14}
        />
      </View>
       <View style={style.textHeader1}>
        <Text>Kibe vegetal R$ 38,00 / Kg</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled15 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch15}
          value={isEnabled15}
        />
      </View>
       <View style={style.textHeader1}>
        <Text>Kibe Hambúrguer vegetal - R$ 57,00 / Kg</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled16 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch16}
          value={isEnabled16}
        />
      </View>


      <View style={style.container}>
       <Text> Bebidas alcoólicas </Text>
      </View>

        <View style={style.textHeader1}>
        <Text>Skol lata - R$ 2,60 / un</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled17 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch17}
          value={isEnabled17}
        />
      </View>
       <View style={style.textHeader1}>
        <Text>Heineken lata - R$ 4,50 / un</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled18 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch18}
          value={isEnabled18}
        />
      </View>
        <View style={style.textHeader1}>
        <Text>Jack Daniel's - R$ 140,00 / un</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled19 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch19}
          value={isEnabled19}
        />
      </View>


       <View style={style.container}>
       <Text> Bebidas não alcoólicas </Text>
      </View>

      <View style={style.textHeader1}>
        <Text>Água 1,5l - R$ 2,75 / un</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled20 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch20}
          value={isEnabled20}
        />
      </View>
       <View style={style.textHeader1}>
        <Text>Guaraná 2l - R$ 5,00 / un</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled21 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch21}
          value={isEnabled21}
        />
      </View>
        <View style={style.textHeader1}>
        <Text>Coca-cola 2l - R$ 7,00 / un</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled22 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch22}
          value={isEnabled22}
        />
      </View>
        <View style={style.textHeader1}>
        <Text>Suco 1l - R$ 4,80 /un</Text>
          <Switch
          trackColor={{false:"d3d3d3",true:"#7fff00"}} 
          thumbColor={!isEnabled23 ? "#fff" : "#7fff00"}
          onValueChange={alternarSwitch23}
          value={isEnabled23}
        />
      </View>






</View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
textHeader1:{
  display: 'flex',
  fontFamily: "Poppins_400Regular",
  width: "90%",
  flexDirection: "row",
  alignItems: 'center',
  paddingLeft: 15,
  justifyContent: "space-between",
  left: 20,
  height: 50,
  borderRadius: 5,
  backgroundColor: "#fff",
  shadowOpacity: 0.25,
  shadowRadius:3.84,
  elevation:5,
  marginTop:15,
},
container:{
  alignItems: "center",
  marginTop: 5
  
},
principal: {
  height: 1800,
  
}
})
