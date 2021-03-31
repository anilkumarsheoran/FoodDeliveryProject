import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Navigation from './Navigation';

const Fav = ({ navigation }) => {
    return (
        <View style={styles.fav}>
          <Text>This is the fav page</Text>
          {/* <Navigation navigation= {navigation} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    fav: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
  });

export default Fav