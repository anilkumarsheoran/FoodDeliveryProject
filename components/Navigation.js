import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Navigation = () => {
    return (
        <View style={styles.navigation}>
            <FlatList
                numColumns={4}
                style={{width:'100%', paddingTop: 20}}
                data={[
                {key: 'Home'},
                {key: 'Fav'},
                {key: 'Cart'},
                {key: 'Profile'},
                ]}
                renderItem={({item}) => <View style={{width:'25%', alignItems: 'center'}}>
                    <Text style={styles.item}>{item.key}</Text>
                </View>
                }
            />
        </View>
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