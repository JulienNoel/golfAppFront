import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import cartouche from "./components/menuCartouche"

function HomeScreen(props) {
  useEffect(() => {
    async function GolfFromBdd() {
      var rawResponse = await fetch("https://calm-bastion-61741.herokuapp.com/askgolf");
      var response = await rawResponse.json();
      props.onInitPage(response);
    }
    GolfFromBdd();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
      {cartouche(props, "statistique", require("../assets/joueur6.jpeg"), "statistique")}
      {cartouche(props, "Trophés", require("../assets/closeBall2.webp"), "")}
      {cartouche(props, "Mes réservations", require("../assets/club.jpeg"), "")}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

function mapDispatchToProps(dispatch) {
  return {
    onInitPage: function (golf) {
      dispatch({ type: "AddGolf", golf: golf });
    },
  };
}

export default connect(null, mapDispatchToProps)(HomeScreen);
