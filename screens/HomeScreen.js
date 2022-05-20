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
  

   AsyncStorage.getItem("token", function(error, data) {
    
    console.log(data);
    setTokenLocal(data)
   });

  return (

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>


      <Text>HomeScreen</Text>


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

export default connect(null, mapDispatchToProps)(HomeScreen);
