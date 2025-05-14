import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Load from './screens/Load';
import Login from './screens/Login';
import Home from './screens/Feed';
import { freezeEnabled } from 'react-native-screens';
import Feed from './screens/Feed';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Load" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Load" component={Load} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
