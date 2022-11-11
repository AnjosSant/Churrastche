import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/home/home.js";
import Convidados from "./pages/Convidados/convidados.js";
import Lista from "./pages/Lista/lista.js";
import Loja from "./pages/Loja/loja.js";
import Mapa from "./pages/Mapa/mapa.js";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#EA1D2C",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Convidados"
        component={Convidados}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Icon name="users" size={size} color={color} />;
            }
            return <Icon name="users" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Loja}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Icon name="tags" size={size} color={color} />;
            }
            return <Icon name="tags" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Icon name="home" size={size} color={color} />;
            }
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Icon name="map" size={size} color={color} />;
            }
            return <Icon name="map" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Lista"
        component={Lista}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Icon name="list" size={size} color={color} />;
            }
            return <Icon name="list" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;