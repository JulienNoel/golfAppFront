import { Text, Tooltip } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { connect } from "react-redux";

import cartouche from "./components/menuCartouche"
import Icon from "react-native-vector-icons/FontAwesome";

function HomeScreen(props) {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
  useEffect(() => {
    async function GolfFromBdd() {
      var rawResponse = await fetch("https://calm-bastion-61741.herokuapp.com/askgolf");
      var response = await rawResponse.json();
      //console.log("useeefect", response);
      props.onInitPage(response);
    }
    GolfFromBdd();
  }, []);

  var Notification = [{ Notification: "nouvelle demande de buddy" }, { Notification: "Réservation" }]
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: "12%", width: "100%", marginTop: 50 }}>
        <View style={{ width: 65, height: 65, borderWidth: 1, borderColor: "grey", borderRadius: 100, alignItems: 'center', justifyContent: "center", backgroundColor: "grey", marginRight: 10, margin: '10%' }}>
          <Icon name="user" size={24} color="white" />
        </View>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: 'center' }}>Alexis M.</Text>
        <View style={{ height: "100%", margin: '10%' }}>
          <Tooltip containerStyle={{ height: 100 }} backgroundColor="#ededed" popover={
            <View style={{ height: "100%", width: "100%" }}>
              <Text onPress={() => props.navigation.navigate("notification1")} style={{ height: "50%", width: "100%" }}>0 nouvelle demande de buddie</Text>
              <Text onPress={() => props.navigation.navigate("notification2")} style={{ height: "50%", width: "100%" }}>Hello</Text>
            </View>
          }>
            <Icon name="bell-o" size={30} color="black" />
          </Tooltip>
        </View>

      </View>
      {cartouche(props, "statistique", require("../assets/joueur6.jpeg"), "statistique")}
      <View style={styles.cartoucheDash}>


        <Text style={{ fontWeight: "300", marginTop: 10 }}>Evolution Index</Text>
        <AreaChart
          style={{ height: "90%",width:"95%"}}
          data={data}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
          svg={{ fill: '#3AB795' }}
        >
          <Grid />
        </AreaChart>


      </View>
      {cartouche(props, "Trophés", require("../assets/closeBall2.webp"), "")}
      <View style={styles.cartoucheTrophy}>
        {/* 2er dashobard vide */}
      </View>
      {cartouche(props, "Mes réservations", require("../assets/club.jpeg"), "")}
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
    alignItems:"center",
    width: '95%',
    height: '25%',
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
    width: '95%',
    height: '10%',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})

function mapDispatchToProps(dispatch) {
  return {
    onInitPage: function (golf) {
      dispatch({ type: "AddGolf", golf: golf });
    },
  };
}

function mapStateToProps(state) {

  return { user: state.user }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
