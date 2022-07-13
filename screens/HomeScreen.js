import { Text, Tooltip } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { connect } from "react-redux";
import { Avatar } from "react-native-elements";

import cartouche from "./components/menuCartouche";

import Icon from "react-native-vector-icons/FontAwesome";
import { SimpleLineIcons } from "@expo/vector-icons";
import LogScreen from "./LogScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen(props) {
  const data = [34, 32, 30, 35, 40, 43, 35, 32, 30, 29, 28, 23, 22, 20, 23];
  useEffect(() => {
    
    async function UserActiveFromBdd() {
      AsyncStorage.getItem("info User", async function (error, data) {
        var userData = JSON.parse(data);
        
        if (userData.token) {
          console.log(userData.token);
          var rawResponse = await fetch(
            `https://calm-bastion-61741.herokuapp.com/getUserByToken/${userData.token}/`
          );
          var response = await rawResponse.json();

          props.onPressVoirDispo(response);
        }
      });
    }
    
    UserActiveFromBdd();
  }, []);

  if (!props.token) {
    return <LogScreen navigation={props.navigation} />;
  }

  var Logout = () => {
    AsyncStorage.clear();
    props.addToken(null);
    props.addUser(null);
    props.navigation.navigate("BottomNavigator", { screen: "StackMap" });
  };

  var Notification = [
    { Notification: "nouvelle demande de buddy" },
    { Notification: "Réservation" },
  ];

  var listAvatar = [{image : require("../assets/joueur1.jpeg"), nom: 'Tiger' },
                    {image : require("../assets/alexis.jpg"), nom: 'Alexis'},
                    {image : require("../assets/joueur3.jpeg"), nom: 'Sophie'},
                    {image : require("../assets/shady.jpg"), nom: 'Shady'},
                    {image : require("../assets/joueur5.jpeg"), nom: 'Laura'}]

  var displayAvatar = listAvatar.map((avatar, i) => {
         return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Avatar
                    rounded
                    source={avatar.image}
                    size="small"
                  />
                  <Text style={{ fontSize: 11, fontWeight: "700", color: "grey" }}>
                    {avatar.nom}
                  </Text>
                </View>
  })

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "12%",
          width: "100%",
          marginTop: 50,
        }}
      >
        <View
          style={{
            width: 65,
            height: 65,
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "grey",
            marginRight: 10,
            margin: "10%",
          }}
        >
          <Avatar
            rounded
            source={require("../assets/joueur9.jpeg")}
            size={65}
          />
        </View>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          {props.user}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Tooltip
            containerStyle={{ height: 60, width:200 }}
            backgroundColor="#ededed"
            popover={
              <View style={{ height: "100%", width: "100%" }}>
                <Text
                  onPress={() => props.navigation.navigate("notification1")}
                  style={{ height: "100%", width: "100%" }}
                >
                  5 nouvelles demandes de buddy
                </Text>
              </View>
            }
          >
            <Icon
              name="bell-o"
              size={30}
              color="black"
              style={{ marginLeft: 60 }}
            />
          </Tooltip>
          <SimpleLineIcons
            name="logout"
            size={24}
            color="black"
            onPress={Logout}
          />
        </View>
      </View>
      {cartouche(
        props,
        "Statistiques",
        require("../assets/joueur6.jpeg"),
        "statistique"
      )}
      <View style={styles.cartoucheDash}>
        <Text style={{ fontWeight: "500", marginTop: 10 }}>
          Evolution Index
        </Text>
        <AreaChart
          style={{ height: "80%", width: "95%" }}
          data={data}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
          svg={{ fill: "#3AB795" }}
        >
          <Grid />
        </AreaChart>
      </View>
      {cartouche(props, "Trophées", require("../assets/closeBall2.webp"), "")}
      <View style={styles.cartoucheTrophy}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {displayAvatar}
        </View>
      </View>
      {cartouche(
        props,
        "Mes réservations",
        require("../assets/club.jpeg"),
        "MesReservation"
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ededed",
  },
  cartoucheDash: {
    alignItems: "center",
    width: "95%",
    height: "25%",
    borderRadius: 5,
    shadowColor: "#000",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cartoucheTrophy: {
    backgroundColor: "white",
    width: "95%",
    height: "10%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: "addToken", token: token });
    },
    addUser: function (user) {
      dispatch({ type: "addUser", user: user });
    },
    onPressVoirDispo: function (user) {
      dispatch({ type: "AddActiveUser", user: user });
    },
  };
}

function mapStateToProps(state) {
  return {
    token: state.token,
    user: state.user,
        
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
