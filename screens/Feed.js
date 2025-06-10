import { Image } from 'expo-image';
import React from 'react';
import {useState} from 'react';
import { TextInput, View, Button, StyleSheet, StatusBar, Text } from 'react-native';

export default function Feed({navigation}) {
    return (
        <View style={styles.container}>
            
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

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#121212',
        paddingVertical: 10,
    },
});