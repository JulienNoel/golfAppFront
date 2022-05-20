import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";

LogBox.ignoreAllLogs();

// Initialisation du store
import golf from "./reducers/golf";
import localisation from "./reducers/localisation";
import nameGolfSelect from "./reducers/nameGolfSelect";
import user from "./reducers/user.reducer";
import token from "./reducers/token";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const store = createStore(
  combineReducers({ golf, nameGolfSelect, user, token, localisation })
);

import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/Map/MapScreen";
import RegisterScreen from "./screens/registerScreen";
import LogScreen from "./screens/LogScreen";
import GolfInfoScreen from "./screens/Map/GolfInfoScreen";
import ReservationPracticeScreen from "./screens/Map/ReservationPracticeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

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
      <Stack.Screen name="Resarvation" component={ReservationPracticeScreen} />
    </Stack.Navigator>
  );
}
// navigation score //

import ScorePageStart from "./screens/Score/ScorePageStart";
import ScoreReservedParty from "./screens/Score/ScoreReservedParty";
import ScoreNewParty from "./screens/Score/ScoreNewParty";
import ScorePageScreen from "./screens/Score/ScorePageScreen";

function StackScoreScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScorePageStart" component={ScorePageStart} />
      <Stack.Screen name="ScoreReservedParty" component={ScoreReservedParty} />
      <Stack.Screen name="ScoreNewParty" component={ScoreNewParty} />
      <Stack.Screen name="ScorePageScreen" component={ScorePageScreen} />
    </Stack.Navigator>
  );
}

import StatistiqueHome from "./screens/Statistique/StatHomeScreen";
import Statistique from "./screens/Statistique/StatUserScreen";
function StackStatistiqueScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StatistiqueHome" component={StatistiqueHome} />
      <Stack.Screen name="StatistiqueUser" component={Statistique} />
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="StackMap" component={StackMapScreen} />
      <Tab.Screen name="Score" component={StackScoreScreen} />
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
          <Stack.Screen name="statistique" component={StackStatistiqueScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
