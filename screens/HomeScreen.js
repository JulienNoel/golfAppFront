import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

import cartouche from "./components/menuCartouche"
import Icon from "react-native-vector-icons/FontAwesome";
function HomeScreen(props) {
  useEffect(() => {
    async function GolfFromBdd() {
      var rawResponse = await fetch("http://192.168.10.143:3000/askgolf");
      var response = await rawResponse.json();
      console.log("useeefect", response);
      props.onInitPage(response);
    }
    GolfFromBdd();
  }, []);



  return (

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome {props.user}</Text>
      {cartouche(props, "statistique", require("../assets/joueur6.jpeg"), "statistique")}
      <View style={styles.cartoucheDash}>

      </View>
      {cartouche(props, "Trophés", require("../assets/closeBall2.webp"), "")}
      <View style={styles.cartoucheTrophy}>
        
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
  cartoucheDash:{
    width: '95%',
    height: '25%',
    borderRadius: 5,
    shadowColor: "#000",
    backgroundColor:"white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cartoucheTrophy:{
    backgroundColor:"white",
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

function mapStateToProps(state){
  console.log(state.user)
  return {user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
