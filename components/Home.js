import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Navigation from './Navigation';
import nearByIcon from '../assets/icons/nearby.png'

const Home = ({ navigation }) => {
    return (
        <View style={styles.home}>
          <TouchableOpacity>
            <Image 
                source={nearByIcon}
                style={{
                    width:30,
                    height:30,
                }}
            />
          </TouchableOpacity>
          <View style={styles.location}>
              <Text>Location</Text>
          </View>
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
    location:{
        backgroundColor:'grey',
        paddingVertical: 10

    }
  });

export default Home