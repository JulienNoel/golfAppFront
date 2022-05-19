import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";

LogBox.ignoreAllLogs();

// Initialisation du store
import template from "./reducers/template.reducer";
import golf from "./reducers/golf";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
const store = createStore(combineReducers({ template,golf }));



import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import ScoreScreen from "./screens/ScoreScreen";
import RegisterScreen from "./screens/registerScreen";
import LogScreen from "./screens/LogScreen";
import GolfInfoScreen from "./screens/GolfInfoScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const StackMap = createStackNavigator();

function StackMapScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="GolfInfo" component={GolfInfoScreen} />
    </Stack.Navigator>
  );
}
function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == "Home") {
            iconName = "home";
          } else if (route.name == "StackMap") {
            iconName = "map-marker";
          } else if (route.name == "Score") {
            iconName = "table";
          }
          return <FontAwesome name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#3AB795",
        inactiveTintColor: "black",
        style: {
          backgroundColor: "#78E08F",
        },
      }}
    >
      <Tab.Screen name="Home" component={LogScreen} />
<<<<<<< HEAD
      <Tab.Screen name="Map" component={MapScreen} />
=======
      <Tab.Screen name="StackMap" component={StackMapScreen} />
>>>>>>> a67b40f42de47f7ae2fb6c3f460dde73f1949147
      <Tab.Screen name="Score" component={ScoreScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
