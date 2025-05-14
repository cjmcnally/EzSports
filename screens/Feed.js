import { Image } from 'expo-image';
import React from 'react';
import {useState} from 'react';
import { TextInput, View, Button, StyleSheet, StatusBar } from 'react-native';

export default function Feed() {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>FEED</Text> **/}
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },

    text: {
        fontWeight: 'bold',
        //fontFamily: "Jersey 25",
        fontSize: 36,
        color: "#fff",
    },
});