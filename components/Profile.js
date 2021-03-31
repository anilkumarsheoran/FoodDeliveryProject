import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Navigation from './Navigation';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.profile}>
          <Text>This is the profile page</Text>
          {/* <Navigation navigation= {navigation} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
  });

export default Profile