import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import ScoreScreen from './screens/ScoreScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomNavigator () {

  return (
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'Chat') {
            iconName = 'chatbubble';
          }else if (route.name == 'Home') {
            iconName = 'md-home-sharp';
          }
  
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        })}
      tabBarOptions={{
        activeTintColor: '#eb4d4b',
        inactiveTintColor: '#FFFFFF',
        style: {
          backgroundColor: '#e67e22',
        }
      }}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Score" component={ScoreScreen} />
    </Tab.Navigator>
    
  );
}

export default function App() {

  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

