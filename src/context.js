import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import Data, { data } from "./data";

export const Context = createContext();

export default function Provider({ children }) {
  //CRIANDO UMA VARIAVEL PARA PEGAR OS DADOS QUE ESTAO NO AsyncStorage
  const [listarConvidados, setListarConvidados] = useState([]);
  const [listarShop, setListarShop] = useState([]);
  useEffect(() => {
    (async () => {
      let convidados = await AsyncStorage.getItem("Convidados");
      let shop = await AsyncStorage.getItem("dataCortes");
      //CONVERTENDO DADOS PARA JSON
      convidados = JSON.parse(convidados);
      shop = JSON.parse(shop);

      setListarConvidados(convidados);
      setListarShop(shop);
    })();
  }, []);
  console.log(listarShop);
  console.log(listarConvidados);

  const CalculoGeral = (listarConvidados, listarShop) => {
    // filtro da quantidade de pessoas

    // FILTRANDO E LISTANDO TODOS OS OBJETOS DA PAGINA CONVIDADOSQUE ESTAO SELECIONADOS!
    let quantidadeHomem = listarConvidados.filter(
      (item) => item.sexo === "homem"
    );
    let quantidadeMulher = listarConvidados.filter(
      (item) => item.sexo === "mulher"
    );
    let quantidadeCrianca = listarConvidados.filter(
      (item) => item.sexo === "crianca"
    );
    let duracao = listarConvidados.filter(
      (item) => item.horas === "horastotal"
    );
    let local = listarConvidados.filter(
      (item) => item.localevento === "precolocal"
    );

    // FILTRANDO E LISTANDO TODOS OS OBJETOS DA PAGINA SHOP QUE ESTAO TRUE!
    let bovino = listarShop.filter((item) => item.tipo == "bovino");
    let suino = listarShop.filter((item) => item.tipo == "suino");
    let frango = listarShop.filter((item) => item.tipo == "frango");
    let tipos1 = bovino.map((item) => item.preco);
    let tipos2 = frango.map((item) => item.preco);
    let tipos3 = suino.map((item) => item.preco);
    let essenciais = listarShop.filter((item) => item.tipo == "essenciais");
    let complementos = listarShop.filter((item) => item.tipo == "complementos");
    let vegetariano = listarShop.filter((item) => item.tipo == "vegetariano");
    let bebidas_alcoolicas = listarShop.filter(
      (item) => item.tipo == "bebidas_alcoolicas"
    );
    let bebidas_nao_alcoolicas = listarShop.filter(
      (item) => item.tipo == "bebidas_nao_alcoolicas"
    );
    let descartavel = listarShop.filter((item) => item.tipo == "descartavel");

    let Bebida = listarShop.filter((item) => item.Estado === true);

    var tiposB = bovino;
    var tiposF = frango;
    var tiposS = suino;

    // CALCULO HOMEM

    if (quantidadeHomem.length >= 1) {
      var numHomens = quantidadeHomem[0].quantidade;
      var qtdHomensCarne = (data[0].carne.homem.carne * numHomens) / 1000;
      var qtdHomensFrango = (data[0].carne.homem.frango * numHomens) / 1000;
      var qtdHomensSuino = (data[0].carne.homem.suino * numHomens) / 1000;
    } else {
      qtdHomensCarne = 0;
      qtdHomensFrango = 0;
      qtdHomensSuino = 0;
    }

    // CALCULO MULHER

    if (quantidadeMulher.length >= 1) {
      var numMulher = quantidadeMulher[0].quantidade;
      var qtdMulheresCarne = (data[0].carne.mulher.carne * numMulher) / 1000;
      var qtdMulheresFrango = (data[0].carne.mulher.frango * numMulher) / 1000;
      var qtdMulheresSuino = (data[0].carne.mulher.suino * numMulher) / 1000;
    } else {
      qtdMulheresCarne = 0;
      qtdMulheresFrango = 0;
      qtdMulheresSuino = 0;
    }

    //CALCULO CRIANCA

    if (quantidadeCrianca.length >= 1) {
      var numCrianca = quantidadeCrianca[0].quantidade;
      var qtdCriancaCarne = (data[0].carne.crianca.carne * numCrianca) / 1000;
      var qtdCriancaFrango = (data[0].carne.crianca.frango * numCrianca) / 1000;
      var qtdCriancaSuino = (data[0].carne.crianca.suino * numCrianca) / 1000;
    } else {
      qtdCriancaCarne = 0;
      qtdCriancaFrango = 0;
      qtdCriancaSuino = 0;
    }

    let litrosAdulto = (numHomens + numMulher) * 900;
    let litrosCrianca =
      (numCrianca * 450) /
      Bebida.filter((item) => item.tipo != "bebidas_alcoolicas").length;
    // let litrosCrianca = (numCrianca) * 450

    let litrosTotal = litrosAdulto / Bebida.length;
    litrosTotal += litrosCrianca;
    litrosTotal = litrosTotal / 1000;
    var litrosAlcool = litrosAdulto / 1000 / Bebida.length;

    //VALIDACAO?

    if (bovino.length > 0) {
      bovino = bovino.length;
    } else {
      bovino = 1;
    }

    if (frango.length > 0) {
      frango = frango.length;
    } else {
      frango = 1;
    }

    if (suino.length > 0) {
      suino = suino.length;
    } else {
      suino = 1;
    }

    //SOMA TOTAL DAS CARNES
    var quantidadeCarne =
      (qtdHomensCarne + qtdMulheresCarne + qtdCriancaCarne) / bovino;
    var quantidadeFrango =
      (qtdHomensFrango + qtdMulheresFrango + qtdCriancaFrango) / frango;
    var quantidadeSuino =
      (qtdHomensSuino + qtdMulheresSuino + qtdCriancaSuino) / suino;

    // PRECO CARNE BOVINA
    var precoTotalCarne = 0;
    var precoTotalFrango = 0;
    var precoTotalSuino = 0;

    for (let i = 0; i < tipos1.length; i++) {
      let resultado = (tipos1[i] * Number(quantidadeCarne.toFixed(2))) / bovino;
      precoTotalCarne += resultado;
      Object.assign(tiposB[i], { total: resultado.toFixed(2) });
    }
    for (let i = 0; i < tipos2.length; i++) {
      let resultado =
        (tipos2[i] * Number(quantidadeFrango.toFixed(2))) / frango;
      precoTotalFrango += resultado;
      Object.assign(tiposF[i], { total: resultado.toFixed(2) });
    }
    for (let i = 0; i < tipos3.length; i++) {
      let resultado = (tipos3[i] * Number(quantidadeSuino.toFixed(2))) / suino;
      precoTotalSuino += resultado;
      Object.assign(tiposS[i], { total: resultado.toFixed(2) });
    }

    var dataShop = [
      {
        id: 0,
        tipo: "Carne Bovina",
        qtdTotal: quantidadeCarne.toFixed(2),
        carnes: bovino,
        tipos: tipos1,
      },
      {
        id: 1,
        tipo: "Carne Frango",
        qtdTotal: quantidadeFrango.toFixed(2),
        carnes: frango,
        tipos: tipos2,
      },
      {
        id: 2,
        tipo: "Carne Suína",
        qtdTotal: quantidadeSuino.toFixed(2),
        carnes: suino,
        tipos: tipos3,
      },
    ];

    return [dataShop, Bebida];
  };

  return (
    <Context.Provider value={{ CalculoGeral }}> {children} </Context.Provider>
  );
}
