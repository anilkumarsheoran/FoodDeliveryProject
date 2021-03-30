import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Navigation from './Navigation';

const Home = ({ navigation }) => {
    return (
        <View style={styles.home}>
          <Text>This is the home page</Text>
          <Navigation navigation= {navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
  });

export default Home