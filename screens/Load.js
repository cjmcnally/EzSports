import { Image } from 'expo-image';
import React from 'react';
import { View, Button, StyleSheet, StatusBar } from 'react-native';

export default function Load({navigation}) {
    return (
        <View style={styles.container}>
        
              <Image style={styles.image} source={require('../assets/EzSports.png')} />
        
              <View style={styles.button}>
                <Button 
                  //onPress={onPressGetStarted}
                  title="Get Started"
                  color="#000000"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
              <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '70%',
    height: 250,
    contentFit: 'contain',
  },

  button: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: 'center',
  },
  
});

