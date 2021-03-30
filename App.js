import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Fav from './components/Fav';
import Profile from './components/Profile';
import Cart from './components/Cart'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Fav" component={Fav} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Profile" component={Profile} />    
      </Stack.Navigator> */}
      <Navigation />
    </NavigationContainer> 
  );
}
