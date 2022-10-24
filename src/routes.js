import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home/home.js";
import Convidados from "./pages/Convidados/convidados.js";
import Lista from "./pages/Lista/lista.js";
import Loja from "./pages/Loja/loja.js";
import Mapa from "./pages/Mapa/mapa.js";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Convidados" component={Convidados} />
      <Tab.Screen name="Shop" component={Loja} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Mapa" component={Mapa} />
      <Tab.Screen name="Lista" component={Lista} />
    </Tab.Navigator>
  );
}

export default Routes;
