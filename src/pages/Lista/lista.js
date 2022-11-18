import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/header";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Context } from "../../context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function Geral() {
  const { CalculoGeral } = useContext(Context);
  const [listarConvidados, setListarConvidados] = useState([]);
  const [dados, setDados] = useState([]);
  const [listarShop, setListarShop] = useState([]);

  useEffect(() => {
    (async () => {
      let convidados = await AsyncStorage.getItem("Convidados");
      let shop = await AsyncStorage.getItem("dataCortes");
      //CONVERTENDO DADOS PARA JSON
      console.log(shop);
      if (convidados !== null) {
        convidados = JSON.parse(convidados);
        shop = JSON.parse(shop);

        console.log(shop);
        setDados(CalculoGeral(convidados, shop));
        setListarConvidados(convidados);
        setListarShop(shop);
      }
    })();
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  console.log(listarShop);
  console.log(listarConvidados);

  //BUSCAR CARNE
  let carneB = listarShop.filter((item) => item.tipo == "bovino");
  let carneF = listarShop.filter((item) => item.tipo == "frango");
  let carneS = listarShop.filter((item) => item.tipo == "suino");

  var carneKg = dados[0].map((item) => item.carnes);
  console.log(dados);
  var kgB = carneKg.filter((item) => item.tipo == "Carne Bovina");
  var kgF = carneKg.filter((item) => item.tipo == "Carne Frango");
  var kgS = carneKg.filter((item) => item.tipo == "Carne Suína");

 

  console.log(dados);
  //BUSCAR ESSENCIAIS
  console.log(essenciais);
  let essenciais = listarShop.filter((item) => item.tipo == "essenciais");
  let fosforo = essenciais.filter((item) => item.nome == "Fósforos");
  var carvao = dados[0].map((item) => item.outros);
  var buscarCarvao = carvao.filter((item) => item.tipo == "essenciais");
  var carvaoItems = essenciais.filter((item) => item.nome == "Carvão");
  var qtdCarvao = carvaoItems.map((item) => item.nome);
  var precoCarvaos = carvaoItems.map((item) => item.preco);

  // var quantidadeTotalCortes =
  //   quantidadeCarne + quantidadeSuino + quantidadeFrango;
  // console.log(quantidadeCarne);
  //CONTA CARVAO

  // let kgCarvao = quantidadeTotalCortes.toFixed(2);
  // let sacoCarvao = Math.ceil(kgCarvao / 3);
  // let precoCarvao = sacoCarvao * 20;
  // console.log(kgCarvao);
  // console.log(sacoCarvao);

  //BUSCAR BEBIDAS
  //BEBIDAS ALCOOLICAS
  var bAlcoolicas = listarShop.filter(
    (item) => item.tipo == "bebidas_alcoolicas"
  );
  var bNalcoolicas = listarShop.filter(
    (item) => item.tipo == "bebidas_nao_alcoolicas"
  );
  console.log(bNalcoolicas);

  //KILOS TOTAL
  let kilosTotal = (
    Number(kgB.qtdTotal) +
    Number(kgF.qtdTotal) +
    Number(kgS.qtdTotal)
  ).toFixed(2);
  console.log(kilosTotal)



  let somaTotalBovino = carneB.map((item) => item.total);
  var somaB = 0;
  for (let i = 0; i < somaTotalBovino.length; i++) {
    somaB += Number(somaTotalBovino[i]);
  }

  let somaTotalFrango = carneF.map((item) => item.total);
  console.log(somaTotalFrango);
  var somaF = 0;
  for (let i = 0; i < somaTotalFrango.length; i++) {
    somaF += Number(somaTotalFrango[i]);
  }

  let somaTotalSuino = carneS.map((item) => item.total);
  var somaS = 0;
  for (let i = 0; i < somaTotalSuino.length; i++) {
    somaS += Number(somaTotalSuino[i]);
  }

  let somaFosforo = fosforo.map((item) => item.preco);

  let somaBAlcoolica = bAlcoolicas.map((item) => item.total);
  console.log(somaBAlcoolica)
  var somaAlcoolica = 0;
  for (let i = 0; i < somaBAlcoolica.length; i++) {
    somaAlcoolica += Number(somaBAlcoolica[i]);
  }


  //TOTAL CONTA
  let totalItems =
    somaB + somaF + somaS + Number(somaFosforo) + Number(precoCarvaos) + somaAlcoolica;

  console.log(somaB.toFixed(2));
  console.log(somaF.toFixed(2));
  console.log(somaS.toFixed(2));
  console.log(carneKg.map((item) => item.carnes));

  // console.log(listarShop.filter((item) => item.tipo == "bovino"))

  return (
    <ScrollView>
      <ScrollView style={lista.container}>
        <Header name="Resultado" />
        <View style={lista.cardHeader}>
          <Text style={lista.text}>Lista de compra</Text>
        </View>
        <ScrollView style={lista.CardBody}>
          <View style={lista.content_lista}>
            <View style={lista.nomes}>
              {/* Nome da Carne */}
              <Text style={lista.text_titulo}>Nome</Text>
              {carneB.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.nome}</Text>
                </View>
              ))}
              {carneF.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.nome}</Text>
                </View>
              ))}
              {carneS.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.nome}</Text>
                </View>
              ))}
              {essenciais.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.nome}</Text>
                </View>
              ))}
              {bAlcoolicas.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.nome}</Text>
                </View>
              ))}
              {bNalcoolicas.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.nome}</Text>
                </View>
              ))}
            </View>

            {/* Quantidade de CArne */}
            <View style={lista.qtd}>
              <Text style={lista.text_titulo}>Qtd.</Text>
                
              {carneB.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.qtdpBovino}Kg</Text>
                </View>
              ))}
              {carneF.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.qtdpFrango}Kg</Text>
                </View>
              ))}
              {carneS.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.qtdpSuino}Kg</Text>
                </View>
              ))}
              {fosforo.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{fosforo.length} un</Text>
                </View>
              ))}
              {carvaoItems.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.preco} un</Text>
                </View>
              ))}
              {/* {fosforo.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{fosforo.length} un</Text>
                </View>
              ))}
              {carvaoItems.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.qtdSaco} un</Text>
                </View>
              ))} */}
              {bAlcoolicas.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.latas} un</Text>
                </View>
              ))}
              {bNalcoolicas.map((item) => (
                <View>
                  <Text style={lista.tamanho}>{item.latas} un</Text>
                </View>
              ))}
            </View>
            

            {/* Preco Carne */}
            <View style={lista.preco}>
              <Text style={lista.text_titulo}>Preço</Text>
              {carneB.map((item) => (
                <View>
                  <Text style={lista.tamanho}>R${item.total}</Text>
                </View>
              ))}
              {carneF.map((item) => (
                <View>
                  <Text style={lista.tamanho}>R${item.total}</Text>
                </View>
              ))}
              {carneS.map((item) => (
                <View>
                  <Text style={lista.tamanho}>R${item.total}</Text>
                </View>
              ))}
              {fosforo.map((item) => (
                <View>
                  <Text style={lista.tamanho}>R${item.preco.toFixed(2)}</Text>
                </View>
              ))}
              {carvaoItems.map((item) => (
                <View>
                  <Text style={lista.tamanho}>R${(item.preco) * precoCarvaos}</Text>
                </View>
              ))}
               {bAlcoolicas.map((item) => (
                <View>
                  <Text style={lista.tamanho}>R${item.total}</Text>
                </View>
              ))}
               {bNalcoolicas.map((item) => (
                <View>
                  <Text style={lista.tamanho}>R${item.total}</Text>
                </View>
              ))}
          </View>
            </View>
          </ScrollView>
        <View style={lista.CardFooter}>
          <View style={lista.content_total}>
            <Text style={lista.text}>Total:</Text>
            <Text style={lista.total}>R${`${totalItems.toFixed(2)}`}</Text>
          </View>
        </View>

        <View style={resumo.cardHeader}>
          <Text style={resumo.text}>Lista de despesas</Text>
        </View>
        <View style={resumo.CardBody}>
          <SafeAreaView style={resumo.despesas}></SafeAreaView>
        </View>
        <View style={resumo.CardFooter}>
          <Text style={resumo.text}>Custo por pagante</Text>
        </View>
        </ScrollView>
      </ScrollView>
  
  );
}
const lista = StyleSheet.create({
  container: {
    top: 20,
    height: 1200,
  },
  text: {
    color: "#ffffff",
  },
  cardHeader: {
    width: "80%",
    height: 60,
    backgroundColor: "#D03838",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth: 0,
    padding: 8,
    marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },
  CardBody: {
    width: "80%",
    height: 300,
    borderWidth: 1,
    borderBoWidth: 1,
    padding: 8,
    backgroundColor: "#ffffff",
    marginLeft: "auto",
    marginRight: "auto",
  },
  CardFooter: {
    width: "80%",
    height: 55,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    backgroundColor: "#D03838",
    marginLeft: "auto",
    marginRight: "auto",
  },
  content_total: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 15,
    paddingLeft: 15,
    top: 15,
  },
  content_lista: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tamanho: {
    fontSize: 12,
    paddingTop: 15,
    fontFamily: "Poppins_400Regular",
  },
  qtd: {
    paddingRight: 25,
  },
  text_titulo: {
    fontWeight: "bold",
    fontFamily: "Poppins_400Regular",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  total: {
    fontFamily: "Poppins_400Regular",
  },
});

const resumo = StyleSheet.create({
  cardHeader: {
    width: "80%",
    height: 60,
    backgroundColor: "#ECECEC",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 8,
    marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },

  CardBody: {
    width: "80%",
    height: 200,
    borderWidth: 1,
    padding: 8,
    backgroundColor: "#ffffff",
    marginLeft: "auto",
    marginRight: "auto",
  },
  CardFooter: {
    width: "80%",
    height: 55,
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 8,
    backgroundColor: "#ECECEC",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    justifyContent: "center",
  },
  text: {
    color: "#000000",
  },
});
