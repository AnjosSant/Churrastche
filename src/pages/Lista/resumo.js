import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/header";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Resumo() {
  return (
    <View>
      <SafeAreaView>
        <Header name="Calculadora de churrasco" />
      </SafeAreaView>
      <View style={styles.header}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        lista
        <MaterialIcons name="list-alt" size={24} color="black" />
        Resumo
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderWidth: 1,
          marginTop: 15,
        }}
      />
      <View style={styles.cardHeader}>
        <Text style={styles.CardTextHeader}>
            Despesas
        </Text>
        </View>
      <ScrollView style={styles.CardBody}>
        
        </ScrollView>  
        <View style={styles.CardFooter}>
                <Text style={styles.CardTextFooter}>
                    Total: R$00.00
                </Text>
        </View>
      <View style={styles.rateio}>
        <Text style={styles.textRateio}>
            Custo por pagante R$: 00.00
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    justifyContent: "center",

    marginTop: 15,
    borderBottomWidth: "100%",
    borderBottomColor: "#000000",
  },
  cardHeader: {
    width: "80%",
    height: 60,
    backgroundColor: "#D03838",
    borderWidth: 1.3,
    padding: 8,
    marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },
  CardTextHeader: {
    color: "#ffffff",   
    fontWeight: 500,
  },
  CardBody: {
    width: "80%",
    height: 150,
    borderWidth: 1.3,
    padding: 8,
    backgroundColor: "#ffffff",
    marginLeft: "auto",
    marginRight: "auto",
  },
  CardTextBody: {
    color: "#000000",
    fontWeight: 400,
    justifyContent: "center",
  },
  CardFooter: {
    width: "80%",
    height: 50,
    borderWidth: 1.3,
    padding: 8,
    backgroundColor: "#D03838",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },
  CardTextFooter: {
    color: "#ffffff",
    fontWeight: 500,
    justifyContent: "center",
  },
  rateio: {
    width: "80%",
    height: 60,
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#D03838",
    borderWidth: 1.3,
    padding: 8,
    justifyContent: "center",
  },
  textRateio: {
    color: "#ffffff",
    fontWeight: 500,
    justifyContent: "center",
  },
});
