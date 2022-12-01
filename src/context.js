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

    let tipoBebidaNaoAlcoolica = bebidas_nao_alcoolicas.map(
      (item) => item.preco
    );
    let tipoBebidaAlcoolica = bebidas_alcoolicas.map((item) => item.preco);


    let descartavel = listarShop.filter((item) => item.tipo == "descartavel");

    let items = listarShop.filter((item) => item.Estado === true);
    let Bebida = listarShop.filter((item) => item.Estado === true && item.tipo == "bebidas_nao_alcoolicas" && item.tipo == "bebidas_alcoolicas");
    
    let JackDaniels = listarShop.filter((item) => item.nome == "Jack Daniels");


    var tiposB = bovino;
    var tiposF = frango;
    var tiposS = suino;
    var tipoAlcoolica = bebidas_alcoolicas;
    var tipoNaoAlcoolica = bebidas_nao_alcoolicas;


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
      var litrosCriancaRefri =
        numCrianca * data[2].bebidasCrianca.refrigerante.pessoa; // refri
      var litrosCriancaSuco = numCrianca * data[2].bebidasCrianca.suco.pessoa; // suco
      var litrosCriancaAgua = numCrianca * data[2].bebidasCrianca.agua.pessoa; // agua
    } else {
      qtdCriancaCarne = 0;
      qtdCriancaFrango = 0;
      qtdCriancaSuino = 0;
      litrosCriancaRefri = 0;
      litrosCriancaSuco = 0;
      litrosCriancaAgua = 0;
    }

    // calc bebida
    var quantidadeTotalAdulto = numHomens + numMulher;

    if (quantidadeTotalAdulto >= 1) {
      var litrosAdultoRefri =
        quantidadeTotalAdulto * data[1].bebidas.refrigerante.pessoa; //refri
      var litrosAdultoSuco =
        quantidadeTotalAdulto * data[1].bebidas.suco.pessoa; //suco
      var litrosAdultoAgua =
        quantidadeTotalAdulto * data[1].bebidas.agua.pessoa; //agua
      var litrosAdultoAlcoolica =
        quantidadeTotalAdulto * data[1].bebidas.alcoolicas.adulto; //alcoolica
    } else {
      litrosAdultoRefri = 0;
      litrosAdultoSuco = 0;
      litrosAdultoAgua = 0;
      litrosAdultoAlcoolica = 0;
    }

    //CALCULO CARVAO E SAL grosso
    let totalPessoas = quantidadeTotalAdulto + numCrianca;
    // var salGrosso = 0;
    // var carvao = 3; //kg

    // if(totalPessoas < 10){
    //     carvao = carvao * 2;

    // }
    // else if(totalPessoas > 10){
    //     carvao = carvao * 4;
    // }
    // else{
    //     carvao == 0;
    // }



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
    if (bebidas_nao_alcoolicas.length > 0) {
      suino = bebidas_nao_alcoolicas.length;
    } else {
      bebidas_nao_alcoolicas = 1;
    }
    if (bebidas_alcoolicas.length > 0) {
      bebidas_alcoolicas = bebidas_alcoolicas.length;
    } else {
      bebidas_alcoolicas = 1;
    }





    //soma latas
    // let quantidadeLatasAlcoolicas = quantidadeTotalAdulto * 4;
    // let litrosLata = (quantidadeLatasAlcoolicas * 300) / 1000;

    // //soma jack daniels
    // let garrafaJack = Math.ceil(quantidadeTotalAdulto / 8);
    // let litrosJack = (garrafaJack * 1000) / 1000;


    //SOMA TOTAL BEBIDAS
    var quantidadeBebidasAdulto =
      ((litrosAdultoRefri + litrosAdultoSuco + litrosAdultoAgua)/ 1000) / bebidas_nao_alcoolicas.length;
    var quantidadeBebidasCrianca =
      ((litrosCriancaRefri + litrosCriancaSuco + litrosCriancaAgua) /1000 )/bebidas_nao_alcoolicas.length;



    let qtdLitroAlcoolica = (litrosAdultoAlcoolica )/ 1000;
    let qtdLitroNaoAlcoolica = (quantidadeBebidasAdulto + quantidadeBebidasCrianca) /1000
    var litrosTotal = qtdLitroAlcoolica  / (bebidas_nao_alcoolicas.length + bebidas_alcoolicas)
    litrosTotal += qtdLitroNaoAlcoolica

    let qtdLata = Math.ceil(qtdLitroAlcoolica / bebidas_alcoolicas);
    let qtdLataRefri = Math.ceil(
      (quantidadeBebidasAdulto + quantidadeBebidasCrianca) /
        bebidas_nao_alcoolicas.length
    );



    //SOMA TOTAL DAS CARNES
    var quantidadeCarne =
      (qtdHomensCarne + qtdMulheresCarne + qtdCriancaCarne) / bovino;
    var quantidadeFrango =
      (qtdHomensFrango + qtdMulheresFrango + qtdCriancaFrango) / frango;
    var quantidadeSuino =
      (qtdHomensSuino + qtdMulheresSuino + qtdCriancaSuino) / suino;

    var quantidadeTotalCortes =
      quantidadeCarne + quantidadeSuino + quantidadeFrango;
    //CONTA CARVAO

    let kgCarvao = quantidadeTotalCortes.toFixed(2);
    let sacoCarvao = Math.ceil(kgCarvao / 3);
    let precoCarvao = sacoCarvao * 20.25;


    let sal = quantidadeTotalCortes * 0.02;
    let sacoSal = Math.ceil(sal * 4.5);
    let precoSal = sacoSal * 4.5;
    // let fosforo =
    let pao = totalPessoas * 2 * 50;
    let arroz = totalPessoas * 100;
    let sacoArroz = Math.ceil(arroz / 5);
    let farofa = totalPessoas * 70;
    let sacoFarofa = Math.ceil(farofa / 0.5);



    // PRECO CARNE BOVINA
    var precoTotalCarne = 0;
    var precoTotalFrango = 0;
    var precoTotalSuino = 0;

    //preco total bebidas
    var precoTotalBebidasNaoAlcolicas = 0;
    var precoTotalBebidasAlcolicas = 0;

    for (let i = 0; i < tipos1.length; i++) {
      let resultado = (tipos1[i] * Number(quantidadeCarne.toFixed(2))) / bovino;
      precoTotalCarne += resultado;
      Object.assign(tiposB[i], { total: resultado.toFixed(2) });
      Object.assign(tiposB[i], {
        qtdpBovino: (quantidadeCarne.toFixed(2) / bovino).toFixed(2),
      });
    }
    for (let i = 0; i < tipos2.length; i++) {
      let resultado =
        (tipos2[i] *( Number(quantidadeFrango.toFixed(2))) / frango);
      precoTotalFrango += resultado;
      Object.assign(tiposF[i], { total: resultado.toFixed(2) });
      Object.assign(tiposF[i], {
        qtdpFrango: (quantidadeFrango.toFixed(2) / frango).toFixed(2),
      });
    }
    for (let i = 0; i < tipos3.length; i++) {
      let resultado = (tipos3[i] * Number(quantidadeSuino.toFixed(2))) / suino;
      precoTotalSuino += resultado;
      Object.assign(tiposS[i], { total: resultado.toFixed(2) });
      Object.assign(tiposS[i], {
        qtdpSuino: (quantidadeSuino.toFixed(2) / suino.toFixed(2)).toFixed(2),
      });
    }
    for (let i = 0; i < tipoBebidaAlcoolica.length; i++) {
      let resultado =
        (tipoBebidaAlcoolica[i] * quantidadeBebidasAdulto) / bebidas_alcoolicas;
      precoTotalBebidasAlcolicas += resultado;
      Object.assign(tipoAlcoolica[i], { total: ((Math.ceil(qtdLitroAlcoolica / bebidas_alcoolicas)) * tipoBebidaAlcoolica[i] ).toFixed(2) });
      Object.assign(tipoAlcoolica[i], {
        latas: (Math.ceil(qtdLitroAlcoolica / bebidas_alcoolicas)),
      });

    }
    for (let i = 0; i < tipoBebidaNaoAlcoolica.length; i++) {
      let resultado =
        (tipoBebidaNaoAlcoolica[i] * quantidadeBebidasCrianca +
          tipoBebidaNaoAlcoolica[i] * quantidadeBebidasAdulto) /
        bebidas_nao_alcoolicas.length;
      precoTotalBebidasNaoAlcolicas += resultado;
      Object.assign(tipoNaoAlcoolica[i], { total: (Math.ceil((quantidadeBebidasCrianca + quantidadeBebidasAdulto)/ bebidas_nao_alcoolicas.length) / tipoBebidaNaoAlcoolica[i]).toFixed(2) });
      Object.assign(tipoNaoAlcoolica[i], {
        latas: Math.ceil((quantidadeBebidasCrianca + quantidadeBebidasAdulto)/ bebidas_nao_alcoolicas.length),
      });
    }


    var dataShop = [
      {
        carnes: {
          bovino: {
            id: 0,
            tipo: "Carne Bovina",
            qtdTotal: quantidadeCarne.toFixed(2),
            carnes: bovino,
            tipos: tipos1,
          },
          frango: {
            id: 1,
            tipo: "Carne Frango",
            qtdTotal: quantidadeFrango.toFixed(2),
            carnes: frango,
            tipos: tipos2,
          },
          suino: {
            id: 2,
            tipo: "Carne Suína",
            qtdTotal: quantidadeSuino.toFixed(2),
            carnes: suino,
            tipos: tipos3,
          },
        },
        bebidas: {
          bebidasA: {
            id: 0,
            tipo: "bebidas_alcoolicas",
            qtdTotal: qtdLata,
            bebida: bebidas_alcoolicas,
            tipos: tipoBebidaAlcoolica,
          },
          bebidasNA: {
            id: 1,
            tipo: "bebidas_nao_alcolicas",
            qtdTotal: qtdLataRefri,
            bebida: bebidas_nao_alcoolicas,
            tipos: tipoBebidaNaoAlcoolica,
          },
        },
        outros: {
          carvao: {
            id: 0,
            tipo: "essenciais",
            nome: "Carvão",
            qtdTotal: kgCarvao,
            preco: precoCarvao,
            qtdSaco: sacoCarvao,
          },
          sal: {
            id: 1,
            tipo: "essenciais",
            nome: "Sal",
            qtdTotal: sal,
            preco: precoSal,
            qtdSaco: sacoSal,
          },
        },
      },
    ];
    return [dataShop, items];
  };

  return (
    <Context.Provider value={{ CalculoGeral }}> {children} </Context.Provider>
  );
}
