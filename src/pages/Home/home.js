import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Header from "../../components/Header/header";

export default function Home({}) {
  return (
    <ScrollView>
      <Header name="Calculadora de churrasco" />
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>ChurrasTchê!</Text>
        </View>
        <View style={styles.cardRed}>
          <Text style={styles.textChamamento}>
            VAMOS TE AJUDAR A MANDAR BRASA NO SEU CHURRASCO!
          </Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderWidth: 4,
              margin: 90,
              marginTop: 35,
            }}
          />
          <Text style={styles.textPreencher}>
            Preencha as informações, e te indicaremos uma lista de compras ideal
            para o seu churrasco.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 55,
    fontWeight: "bold",
    marginTop: 60,
  },
  cardRed: {
    backgroundColor: "#EA1D2C",
    height: 600,
    width: 400,
    marginTop: 40,
  },
  textChamamento: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    marginTop: 35,
  },
  textPreencher: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "regular",
    alignItems: "left",
    textAlign: "left",
    marginLeft: 30,
    marginRight: 30,
    marginTop: -40,
  },
});
