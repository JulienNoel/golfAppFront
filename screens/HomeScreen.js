import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import cartouche from "./components/menuCartouche";
import Icon from "react-native-vector-icons/FontAwesome";
function HomeScreen(props) {
  useEffect(() => {
    async function GolfFromBdd() {
      var rawResponse = await fetch("http://192.168.10.116:3000/askgolf");
      var response = await rawResponse.json();
      console.log("useeefect", response);
      props.onInitPage(response);
    }
    GolfFromBdd();
  }, []);
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
          <Icon name="user" size={24} color="white" />
        </View>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          Alexis M.
        </Text>
        <Icon
          name="bell-o"
          size={30}
          color="black"
          style={{ height: "100%", margin: "10%" }}
        />
      </View>
      {cartouche(
        props,
        "statistique",
        require("../assets/joueur6.jpeg"),
        "statistique"
      )}
      <View style={styles.cartoucheDash}>{/* 1er dashobard vide */}</View>
      {cartouche(props, "Trophés", require("../assets/closeBall2.webp"), "")}
      <View style={styles.cartoucheTrophy}>{/* 2er dashobard vide */}</View>
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
    onInitPage: function (golf) {
      dispatch({ type: "AddGolf", golf: golf });
    },
  };
}

export default connect(null, mapDispatchToProps)(HomeScreen);
