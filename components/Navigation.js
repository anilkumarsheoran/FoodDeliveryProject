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
        // <View style={styles.navigation}>
        //     <FlatList
        //         numColumns={4}
        //         style={{width:'100%', paddingTop: 20}}
        //         data={[
        //         {key: 'Home'},
        //         {key: 'Fav'},
        //         {key: 'Cart'},
        //         {key: 'Profile'},
        //         ]}
        //         renderItem={({item}) => <View style={{width:'25%', alignItems: 'center'}}>
        //             <Button style={styles.item} title={item.key} 
        //                 onPress ={() =>  navigation.navigate(item.key)}
        //             />
        //         </View>
        //         }
        //     />
        // </View>
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    navigation: {
      flex: 1,
      backgroundColor: '#efefef',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: 50
    },
    item: {
    }
  });

export default Navigation