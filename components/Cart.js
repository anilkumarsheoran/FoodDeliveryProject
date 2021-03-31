import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Navigation from './Navigation';

const Cart = ({ navigation }) => {
    return (
        <View style={styles.cart}>
          <Text>This is the cart page</Text>
          {/* <Navigation navigation= {navigation} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    cart: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
  });

export default Cart