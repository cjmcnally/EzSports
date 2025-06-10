import { Image } from 'expo-image';
import React from 'react';
import {useState} from 'react';
import { TextInput, View, Button, StyleSheet, StatusBar } from 'react-native';

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/EzSports.png')} />

        <View style={styles.form}>
        <TextInput 
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="rgba(68, 67, 67, 0.45)"
            value={email}
            onChangeText={setEmail}
        />
        
        <TextInput 
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(68, 67, 67, 0.45)"
            value={password}
            onChangeText={setPassword}
        />
        </View>

        <View style={styles.button}>
            <Button 
                title="Register"
                color="rgba(68, 67, 67, 0.55)"
                onPress={() => navigation.navigate('Main')}
            />
        </View>
        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },

    image: {
        position: 'absolute',
        top: 20,
        width: '90%',
        height: 500,
        resizeMode: 'contain',
    },

    form: {
        marginTop: 200,
        gap: 15,
    },

    input: {
        paddingVertical: 15,
        paddingHorizontal: 70,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        textAlign: 'left',
    },

    button: {
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        
    },
});