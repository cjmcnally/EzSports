import { Image } from 'expo-image';
import React from 'react';
import {useState} from 'react';
import { TextInput, View, Button, StyleSheet, StatusBar, Text } from 'react-native';

export default function Feed({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.feedBox}>
                <Text style={styles.text}>Welcome to the Feed!</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },

    feedBox: {
        backgroundColor: "#1f1e1e",
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        borderRadius: 20,
        padding: 10,
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontWeight: 'bold',
        //fontFamily: "Jersey 25",
        fontSize: 26,
        color: "#fff",
    },
});