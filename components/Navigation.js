import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Fav from './Fav';
import Profile from './Profile';
import Cart from './Cart'
import cutlery from '../assets/icons/cutlery.png'
import userIcon from '../assets/icons/user.png'
import favIcon from '../assets/icons/favorite.png'
import cartIcon from '../assets/icons/shopping-cart.png'

const Tab = createBottomTabNavigator();

const Navigation = ({ navigation }) => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false
        }}>
            <Tab.Screen name="Home" component={Home}
            options={{
                tabBarIcon: ({focused}) => (
                   <Image
                    source={cutlery}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? 'red' : 'grey'
                    }}
                   /> 
                )
            }} 
             />
            <Tab.Screen name="Profile" component={Profile}
                 options={{
                tabBarIcon: ({focused}) => (
                   <Image
                    source={userIcon}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? 'red' : 'grey'
                    }}
                   /> 
                )
            }} 
            />
            <Tab.Screen name="Cart" component={Cart}
                options={{
                tabBarIcon: ({focused}) => (
                   <Image
                    source={cartIcon}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? 'red' : 'grey'
                    }}
                   /> 
                )
               }}
            />
            <Tab.Screen name="Fav" component={Fav}
               options={{
                tabBarIcon: ({focused}) => (
                   <Image
                    source={favIcon}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? 'red' : 'grey'
                    }}
                   /> 
                )
               }}
             />
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
     // bottom: 0,
     // width: '100%',
     // height: 50
    },
    item: {
    }
  });

export default Navigation