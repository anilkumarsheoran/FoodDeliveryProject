import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Navigation from './Navigation';
import nearByIcon from '../assets/icons/nearby.png'
import takeawayIcon from '../assets/icons/take-away.png'
import { FlatList } from 'react-native-gesture-handler';
import burgerIcon from '../assets/icons/hamburger.png'
import snackIcon from '../assets/icons/french-fries.png'
import meatIcon from '../assets/icons/meat.png'
import pizzaIcon from '../assets/icons/pizza-slice.png'
import cakeIcon from '../assets/icons/cake.png'
import starIcon from '../assets/icons/star.png'
import burgerImg from '../assets/icons/burgerimg.jpeg'
import pizzaImg from '../assets/icons/pizzaimg.jpeg'
import meatImg from '../assets/icons/meatimg.jpeg'
import cakeImg from '../assets/icons/cakeimg.jpeg'
import snackImg from '../assets/icons/snackimg.jpeg'

const Home = ({ navigation }) => {

    const initialCurrentLocation ={
        streetName: 'Gurgaon',
        gps: {
            latitude: 28.4595 ,
            longitude: 77.0266,
        }
    }

    const categoryData = [
        {
            id: 1,
            name: 'Burger',
            icon: burgerIcon
        },
        {
            id: 2,
            name: 'Snacks',
            icon: snackIcon
        },
        {
            id: 3,
            name: 'Pizza',
            icon: pizzaIcon
        },
        {
            id: 4,
            name: 'Meat',
            icon: meatIcon
        },
        {
            id: 5,
            name: 'Cake',
            icon: cakeIcon
        },
    ]

    const resturantData = [
        {
            id: 1,
            name:'Burger Story',
            rating: 4.5,
            priceRating: '$',
            photo: burgerImg,
            duration: '35-45 min',
            location: {
                latitude: 28.4595 ,
                longitude: 77.0266,
            },
            courier: {
                avatar: burgerImg,
                name: 'James'
            },
            menu: [
                {
                    menuId: 1,
                    name: 'Veg Burger',
                    photo: cakeIcon,
                    description: 'Veg burger with veg patty & letuce',
                    calories:250,
                    price: 20
                }
            ]
        },
        {
            id: 2,
            name:'Pizza Story',
            rating: 4.5,
            priceRating: '$',
            photo: pizzaImg,
            duration: '35-45 min',
            location: {
                latitude: 28.4595 ,
                longitude: 77.0266,
            }
        },
        {
            id: 3,
            name:'Burger Story',
            rating: 4.5,
            priceRating: '$',
            photo: cakeIcon,
            duration: '35-45 min',
            location: {
                latitude: 28.4595 ,
                longitude: 77.0266,
            }
        },
        {
            id: 4,
            name:'Burger Story',
            rating: 4.5,
            priceRating: '$',
            photo: cakeIcon,
            duration: '35-45 min',
            location: {
                latitude: 28.4595 ,
                longitude: 77.0266,
            }
        },
        {
            id: 5,
            name:'Burger Story',
            rating: 4.5,
            priceRating: '$',
            photo: cakeIcon,
            duration: '35-45 min',
            location: {
                latitude: 28.4595 ,
                longitude: 77.0266,
            }
        }
    ]

    function renderHeader(){
        return (
            <View style={styles.home}>
                <TouchableOpacity styles={{width: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                    source={nearByIcon}
                    resizeMode='contain'
                    style={{
                        width:30,
                        height:30,
                        justifyContent: 'center'
                    }}
                />
                </TouchableOpacity>
                <View style={styles.location}>
                    <View style={{
                        width: '70%',
                        height: '100%',
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#efefef'
                    }}>
                    <Text>{initialCurrentLocation.streetName}</Text>
                    </View>
                </View>
                <TouchableOpacity styles={{width: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                    source={takeawayIcon}
                    resizeMode='contain'
                    style={{
                        width:30,
                        height:30,
                        justifyContent: 'center'
                    }}
                />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories(){
        const renderItem=({item}) =>{
            return (
                <TouchableOpacity
                    style={{
                        marginTop: 20,
                        marginRight: 15,
                        padding:10,
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'orange'
                    }}
                >
                    <View style={{
                        borderRadius:20,
                        backgroundColor: 'white', 
                        padding: 10
                    }}>
                        <Image 
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                alignItems: 'center'
                            }}
                        />
                    </View>
                    <View style={{paddingVertical: 10}}>
                        <Text>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{padding: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Main</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Categories</Text>

                <FlatList 
                data={categoryData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{alignItems: 'center', padding: 10}}
                />
            </View>
        )
    }

    function renderResturantList(){
        const renderItem=({item}) =>{
            return (
                <TouchableOpacity
                    style={{
                        marginBottom: 20,
                        width:'100%'
                    }}
                >
                     <View>
                        <Image
                            source={item.photo}
                            resizeMode="cover"
                            style={{
                                    width: '100%',
                                    height: 200,
                                    borderRadius: 30
                                }}
                        />
                  
                      <View style={{position:'absolute',
                        height:50,
                        width:100,
                        bottom:0,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent:'center',
                        borderTopRightRadius:20
                      }}>
                        <Text>{item.duration}</Text>
                      </View>
                   </View>
                   <Text>{item.name}</Text>
                   <View style={{marginBottom:20, flexDirection: 'row'}}>
                      <Image
                        source={starIcon}
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 10
                        }}
                       />
                       <Text>{item.rating}</Text>
                       <View 
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                       >
                            
                       </View>
                   </View>
                </TouchableOpacity>)}

        return (
            <FlatList 
            data={resturantData}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{ padding: 10}}
            />
        )
    }

    return (
        <SafeAreaView>
            {renderHeader()}
            {renderMainCategories()}
            {renderResturantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    home: {
      backgroundColor: '#fff',
      width: '100%',
      flexDirection: 'row',
      height:50,
      padding: 10,
    },
    location:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
  });

export default Home