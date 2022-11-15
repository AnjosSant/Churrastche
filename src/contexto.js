import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';
import Data , { data } from './data';

export const Context = createContext();

export default function Provider({ children }) {
  const [listarConvidados, setListarConvidados] = useState([]);
  const [listarShop, setListarShop] = useState([]);

  useEffect(() => {
    (async () => {
      let convidados = await AsyncStorage.getItem('Convidados');
      let shop = await AsyncStorage.getItem('dataCortes');
      convidados = JSON.parse(convidados);
      shop = JSON.parse(shop);

      setListarConvidados(convidados);
      setListarShop(shop);
    })();
  }, []);

  const CalculoGeral = () => {
    // filtro da quantidade de pessoas
    let quantidadeHomem = listarConvidados.filter(
      (item) => item.sexo == 'homem'
    );
    let quantidadeMulher = listarConvidados.filter(
      (item) => item.sexo == 'mulher'
    );
    let quantidadeCrianca = listarConvidados.filter(
      (item) => item.sexo == 'crianca'
    );
    console.log(quantidadeHomem);
    let bovino = shop.filter((item) => item.tipo == 'bovino');
    let suino = shop.filter((item) => item.tipo == 'suino');
    let frango = shop.filter((item) => item.tipo == 'frango');
    let essenciais = shop.filter((item) => item.tipo == 'essenciais');
    let complementos = shop.filter((item) => item.tipo == 'complementos');
    let vegetariano = shop.filter((item) => item.tipo == 'vegetariano');
    let bebidas_alcoolicas = shop.filter(
      (item) => item.tipo == 'bebidas_alcoolicas'
    );
    let bebidas_nao_alcoolicas = shop.filter(
      (item) => item.tipo == 'bebidas_nao_alcoolicas'
    );
    let descartavel = shop.filter((item) => item.tipo == 'descartavel');

    return quantidadeHomem
  };

  return (
    <Context.Provider value={{ CalculoGeral }}> {children} </Context.Provider>
  );
}
