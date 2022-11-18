import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../src/pages/Home/home";
import Convidados from "../src/pages/Convidados/convidados";
import Lista from "../src/pages/Lista/lista";
import Loja from "../src/pages/Loja/loja";
import Mapa from "../src/pages/Mapa/mapa";
import Icon from "react-native-vector-icons/FontAwesome";
import Provider from "./context";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Provider>
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
        name="Shop"
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
    </Provider>
  );
}

export default Routes;