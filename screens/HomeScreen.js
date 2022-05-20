import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

import cartouche from "./components/menuCartouche"

function HomeScreen(props) {
  useEffect(() => {
    async function GolfFromBdd() {
      var rawResponse = await fetch("http://172.20.10.7:3000/askgolf");
      var response = await rawResponse.json();
      console.log("useeefect", response);
      props.onInitPage(response);
    }
    GolfFromBdd();
  }, []);

  const [tokenLocal, setTokenLocal] = useState('')
  const [prenomUser, setPrenomUser] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  
  AsyncStorage.getItem("info User", function(error, data) {
    var userData = JSON.parse(data);
    
    if (userData) {
    setTokenLocal(userData.token)
    setPrenomUser(userData.userPrenom)
    setIsLogin(true)
    }
   });

   



  return (

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome {props.user}</Text>
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

function mapStateToProps(state){
  console.log(state.user)
  return {user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
