import React from 'react';

// Components
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, View } from 'react-native';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import TabLabel from './TabLabel';
import Svg, { Path } from "react-native-svg";

// Screens
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Shop from '../../screens/Shop';
import Favorites from '../../screens/Favorites';
import Cart from '../../screens/Cart';

// Translation
import { useTranslation } from 'react-i18next';
import CartWithBadge from '../Icons/CartWithBadge';

import useDimensions from "../../functions/useDimensions"
const { h, w } = useDimensions();



const Tab = createBottomTabNavigator();


export default function BottomNavigator(props: any) {

  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }: any) => {
          size = 25;

          if (route.name === 'Profile') {
            return (
              <View style={[styles.iconView, { borderTopRightRadius: 40 }]}>
                {focused
                  ? <TabLabel label={route.name} />
                  : <FontAwesome
                    name='user'
                    size={size - 3}
                    color={color} />
                }
              </View>
            );

          } else if (route.name === 'Favorites') {
            return (
              <View style={[styles.iconView, { borderTopLeftRadius: 40 }]}>
                {focused
                  ? <TabLabel label={route.name} />
                  : <MaterialIcons
                    name='favorite'
                    size={size}
                    color={color} />
                }
              </View>
            );
          }

          else if (route.name === 'Home') {
            return (
              <View style={[styles.iconView, { borderTopLeftRadius: 40 }]}>
                {focused
                  ? <TabLabel label={route.name} />
                  : <Entypo
                    name='home'
                    size={size}
                    color={color} />
                }
              </View>
            );
          }

          else if (route.name === 'Cart') {
            return (
              <View style={[styles.iconView, {
                justifyContent: "flex-start",
                backgroundColor: "transparent"
              }]}>
                <View style={styles.svg}>
                  <Svg
                    width={90}
                    height={80}
                    viewBox="0 0 75 61"
                    {...props}
                  >
                    <Path
                      d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                      fill='#EEF5FD'
                    />
                  </Svg>
                </View>
                <View
                  style={styles.cartWrapper}>
                  <CartWithBadge number={1} />
                </View>
              </View>
            );
          }

          else if (route.name === 'Shop') {
            return (
              <View style={[styles.iconView, { borderTopRightRadius: 40 }]}>
                {focused
                  ? <TabLabel label={route.name} />
                  : <Entypo
                    name="shop"
                    size={size}
                    color={color} />}
              </View>
            );
          }

        },
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarActiveTintColor: "#1FD1B4",
        tabBarStyle: styles.tabbar,
        tabBarHideOnKeyboard: true
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={Cart} options={{ headerTitleAlign: "center" }} />
      <Tab.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({
  iconView: {
    backgroundColor: "#EEF5FD",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cartWrapper: {
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    shadowColor: "grey",
    position: "absolute",
    bottom: 45,
    backgroundColor: "#1FD1B4",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  cartView: {
    width: "100%",
    height: "65%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0
  },
  tabbar: {
    position: 'absolute',
    backgroundColor: "transparent",
    bottom: Platform.OS === "ios" ? -w(8) : -w(5),
    borderTopWidth: 0,
    height: 130,
    // SHADOW
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  svg: {
    position: "absolute",
    bottom: 0
  }
})

