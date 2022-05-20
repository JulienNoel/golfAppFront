import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen(props) {
  useEffect(() => {
    async function GolfFromBdd() {
      var rawResponse = await fetch(
        "https://calm-bastion-61741.herokuapp.com/askgolf"
      );
      var response = await rawResponse.json();
      props.onInitPage(response);
    }
    GolfFromBdd();
  }, []);

  const [tokenLocal, setTokenLocal] = useState('')
  const [prenomUser, setPrenomUser] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  
  AsyncStorage.getItem("info User", function(error, data) {
    var userData = JSON.parse(data);
    console.log(data);
    if (userData) {
    setTokenLocal(userData.token)
    setPrenomUser(userData.userPrenom)
    setIsLogin(true)
    }
   });

   



  return (

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>


      <Text>Welcome</Text>


    </View>
  );
}

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
