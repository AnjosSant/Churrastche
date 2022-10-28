import React, { useState, useCallback } from "react";
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Cookie_400Regular } from '@expo-google-fonts/cookie';
import { ChangaOne_400Regular } from '@expo-google-fonts/changa-one';
// import { useFonts, Blackhansans_400Regular } from '@expo-google-fonts/black-han-sans';



import Header from "../../components/Header/header";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Home({}) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Cookie_400Regular,
    ChangaOne_400Regular,
  }); 

  const navigation = useNavigation();
 const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
       setPlaying(false);
     }
   }, []);

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

          <TouchableOpacity
            style={styles.buttonNext}
            onPress={() => {
              navigation.navigate("Convidados");
            }}
          >
            <Text style={styles.textAvancar}>Vamos lá!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.receitas}>
          <View>
            <Text style={styles.textWhite}>Receitas</Text>
          </View>
          <View style={styles.yt}>
          {/* <YoutubePlayer
            height={300}
            width={300}
            play={playing}
            videoId={"kWH9FDwfm0Y"}
            onChanceState={onStateChange}
          /> */}
        </View>
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
    fontSize: 90,
    marginTop: 40,
    fontFamily: "Cookie_400Regular",

  },
  cardRed: {
    backgroundColor: "#EA1D2C",
    height: 520,
    width: "100%",
    marginTop: 40,
  },
  textChamamento: {
    color: "#fff",
    fontSize: 36,
    alignItems: "center",
    textAlign: "center",
    marginTop: 35,
    fontFamily: "ChangaOne_400Regular",

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
    fontFamily: "Poppins_400Regular",
    
  },
  buttonNext: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "45%",
    height: 60,
    borderRadius: 12,
    backgroundColor: "white",
    marginTop: 50,
  },
  textAvancar: {
    fontFamily: "Poppins_400Regular",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",

  },
  receitas: {
    height: 600,
    width: "100%",
    marginTop: 40,

  },
  textWhite: {
    textAlign: "center",
    fontSize: 90,
    marginTop: 20,
    fontFamily: "Cookie_400Regular",

  },
  yt: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  }
});
