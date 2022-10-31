import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import { Directions } from "react-native-gesture-handler";
import Header from "../../components/Header/header";

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
      <Header name="shop" />
      <View style={styles.container1}>
        <View style={styles.letra}>
        <Text style={styles.textHeader}>Corte bovino</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Picanha Angus - R$ 98,96 / Kg</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={styles.header1}>
          <Text style={styles.textBody}>Cupim - R$ 34,96 / Kg</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled2 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch2}
              value={isEnabled2}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Maminha - R$ 49,96 / Kg</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled3 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch3}
              value={isEnabled3}
            />
          </View>
        </View>

        <View style={styles.letra}>
        <Text style={styles.textHeader}>Corte suíno</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Picanha suíns - R$ 23,96 / Kg </Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled4 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch4}
              value={isEnabled4}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Pernil - R$ 26,00 / Kg</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled5 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch5}
              value={isEnabled5}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Linguiça - R$ 15,96 / Kg</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled6 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch6}
              value={isEnabled6}
            />
          </View>
        </View>

        <View style={styles.letra}>
        <Text style={styles.textHeader}>Essenciais</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Fósforos - R$ 2,50 / Un</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled7 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch7}
              value={isEnabled7}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Sal grosso - R$ 4,50 / Kg</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled8 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch8}
              value={isEnabled8}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Carvão - R$ 20,00 / 5Kg</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled9 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch9}
              value={isEnabled9}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Gelo - R$ 10,00 / Un</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled10 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch10}
              value={isEnabled10}
            />
          </View>
        </View>

        <View style={styles.letra}>
        <Text style={styles.textHeader}>Complementos</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Arroz - R$ 4,50 / Kg</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled11 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch11}
              value={isEnabled11}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Farofa - R$ 6,50 / Kg</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled12 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch12}
              value={isEnabled12}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Pão frsncês - R$ 0,80 / un</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled13 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch13}
              value={isEnabled13}
            />
          </View>
        </View>

        <View style={styles.letra}>
        <Text style={styles.textHeader}>Vegetariano</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>
            Isca de peixe vegetal - R$ 43,00 / Kg
          </Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled14 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch14}
              value={isEnabled14}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Kibe vegetal R$ 38,00 / Kg</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled15 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch15}
              value={isEnabled15}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>
            Hambúrguer vegetal - R$ 57,00 / Kg
          </Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled16 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch16}
              value={isEnabled16}
            />
          </View>
        </View>

        <View style={styles.letra}>
        <Text style={styles.textHeader}>Bebidas alcoólicas</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Skol lata - R$ 2,60 / un</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled17 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch17}
              value={isEnabled17}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}> Heineken lata - R$ 4,50 / un</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled18 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch18}
              value={isEnabled18}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Jack Daniel's - R$ 140,00 / un</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled19 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch19}
              value={isEnabled19}
            />
          </View>
        </View>

        <View style={styles.letra}>
        <Text style={styles.textHeader}>Bebidas não alcoólicas</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Água 1,5l - R$ 2,75 / un </Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled20 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch20}
              value={isEnabled20}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Guaraná 2l - R$ 5,00 / un</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled21 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch21}
              value={isEnabled21}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Coca-cola 2l - R$ 7,00 / un</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled22 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch22}
              value={isEnabled22}
            />
          </View>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Suco 1l - R$ 4,80 /un</Text>
          <View style={styles.button}>
            <Switch
              style={styles.Switch1}
              trackColor={{ false: "#d3d3d3", true: "#ff0000" }}
              thumbColor={!isEnabled23 ? "#fff" : "#ff0000"}
              onValueChange={alternarSwitch23}
              value={isEnabled23}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header1: {
    fontFamily: "Poppins_400Regular",
    width: "90%",
    alignItems: "left",
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    left: 20,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 15,
  },
  textHeader: {},
  letra: {
    top: 10,
    textAlign: "center",
  },
  container1: {
    height: 1850,
  },
  textbox: {
    alignItems: "center",
    alignContent: "center",
  },
  textBody: {
    alignItems: "center",
    alignContent: "center",
  },
  button: {
    right: 30,
  },
});
