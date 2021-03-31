import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Fav from './Fav';
import Profile from './Profile';
import Cart from './Cart'

const Tab = createBottomTabNavigator();

const Navigation = ({ navigation }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Fav" component={Fav} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    navigation: {
      flex: 1,
      backgroundColor: '#efefef',
      alignItems: 'center',
      justifyContent: 'center',
    //   position: 'fixed',
      bottom: 0,
      width: '100%',
      height: 50
    },
    item: {
    }
  });

export default Navigation