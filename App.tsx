import "react-native-gesture-handler";
import React  from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import { LogBox } from "react-native";

// Components
import BottomNavigator from "./src/components/navigator/BottomNavigator";

import "./i18n";
import { useTranslation } from "react-i18next";

import Product from './src/screens/Product';

import { store } from './src/app/store'
import { Provider } from 'react-redux'


const iOSLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0071e3",
    text: "#000",
    text2: "#999",
    border: "#EAEAEA",
    background: "white",
    card: "#fff",
  },
};


const iOSDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#0071e3",
    text: "#FFF",
    text2: "#999",
    border: "#111",
    background: "#222",
    card: "#000",
  },
};


const Stack = createStackNavigator();


export default function App() {
  
  const scheme = useColorScheme();
  LogBox.ignoreAllLogs(); //Ignore log snackbars


  return (
    <>
      <StatusBar
        barStyle={scheme === "dark" ? "dark-content" : "dark-content"}
      />
      <AppearanceProvider>
      <Provider store={store}>
        <NavigationContainer
          theme={scheme === "dark" ? iOSDarkTheme : iOSLightTheme}
        >
          <Stack.Navigator initialRouteName="Shop" >
            
            {/* Logged-out stack */}
            <Stack.Screen
              name="Shop"
              component={BottomNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Product"
              component={Product}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      </AppearanceProvider>
    </>
  );
}