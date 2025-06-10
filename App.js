import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Load from './screens/Load';
import Login from './screens/Login';
import Feed from './screens/Feed';
import Calendar from './screens/Calendar';
import Chat from './screens/Chat';
import Profile from './screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator initialRouteName={"FEED"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'FEED') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          } else if (route.name === 'CALENDAR') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'CHAT') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'PROFILE') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#121212', borderColor: 'transparent', borderTopWidth: 0, elevation: 0 },
        headerStyle: { backgroundColor: '#121212', borderBottomWidth: 0, elevation: 0 },
        headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold' },
        headerTitleAlign: 'center',
        tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
      })}>
      <Tab.Screen name="FEED" component={Feed} />
      <Tab.Screen name="CALENDAR" component={Calendar} />
      <Tab.Screen name="CHAT" component={Chat} />
      <Tab.Screen name="PROFILE" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Load" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Load" component={Load} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#fff',
  },
});
