import React from 'react';
import {StyleSheet, View, Text, Platform, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 



const Card = props => {

    return (
      
        <TouchableOpacity onPress={() => props.navigation.navigate( {routeName: 'NewsItem'} )}>

            <View style={styles.card}>
                <View style={styles.imageContainer}>

                    <Image style={styles.image} source={require('../../assets/images.png')} />

                </View>

                <View style={styles.titleContainer}>

                    <Text style={styles.title}>Dummy title</Text>
                    <MaterialIcons name="favorite-border" size={24} color="#72bcd4" />


                </View>

                <View style={styles.description}>
                    <Text>This is a dummy description</Text>

                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    card: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 5,
        height: 300,
        margin: 20

    },
    imageContainer : {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },

    

    titleContainer: {
        height: '15%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    description:{
        paddingHorizontal: 15
    },
    image: {
        width: '100%',
        height: '100%'
    },

    title: {
        fontSize: 33
    }



})


export default Card;