import React from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity} from 'react-native';
import Card from '../component/Card';

const NewsListScreen = props => {

    return (

        <View>

          

            <Card navigation={props.navigation}/>



        </View>
    )
}

const styles = StyleSheet.create({


})


export default NewsListScreen;