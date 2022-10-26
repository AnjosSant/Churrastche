import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header/header";

export default function Home() {
  return (
    <ScrollView>
      <Header name="shop" />
      <View style={styles.container1}>
        <View style={styles.letra}>Corte (Bovina)</View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Picanha Angus - R$ 98,96 / Kg</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Cupim - R$ 34,96 / Kg</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Maminha - R$ 49,96 / Kg</Text>
        </View>

        <View style={styles.letra}>Corte (Suína)</View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Picanha suíns - R$ 23,96 / Kg </Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Pernil - R$ 26,00 / Kg</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Linguiça - R$ 15,96 / Kg</Text>
        </View>

        <View style={styles.letra}>Essenciais</View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Fósforos - R$ 2,50 / Un</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Sal grosso - R$ 4,50 / Kg</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Carvão - R$ 20,00 / 5Kg</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Gelo - R$ 10,00 / Un</Text>
        </View>

        <View style={styles.letra}>Complementos</View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Arroz - R$ 4,50 / Kg</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Farofa - R$ 6,50 / Kg</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Pão frsncês - R$ 0,80 / un</Text>
        </View>

        <View style={styles.letra}>Vegetariano</View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>
            Isca de oaeixe vegetal - R$ 43,00 / Kg
          </Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Kibe vegetal R$ 38,00 / Kg</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>
            Hambúrguer vegetal - R$ 57,00 / Kg
          </Text>
        </View>

        <View style={styles.letra}>Bebidas (Alcoólicas)</View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Skol lata - R$ 2,60 / un</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}> Heineken lata - R$ 4,50 / un</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Jack Daniel's - R$ 140,00 / un</Text>
        </View>

        <View style={styles.letra}>Bebidas (Não Alcoólicas)</View>
        <View style={styles.header1}>
          <Text style={styles.textHeader}>Água 1,5l - R$ 2,75 / un </Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Guaraná 2l - R$ 5,00 / un</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Coca-cola 2l - R$ 7,00 / un</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.textBody}>Suco 1l - R$ 4,80 /un</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header1: {
    margin: 10,
    width: "350px",
    height: "50px",
    backgroundColor: "#fff",
    // borderWidth: 1.3,
    padding: 5,
    marginTop: 5,
    marginLeft: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textHeader: {},
  letra: {
    textAlign: "center",
  },
  container1: {
    height: 1400,
  },
});
