import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { connect } from "react-redux";

function HomeScreen(props) {
  useEffect(() => {
    async function GolfFromBdd() {
<<<<<<< HEAD
      var rawResponse = await fetch("https://calm-bastion-61741.herokuapp.com/askgolf");
=======
      var rawResponse = await fetch("http://192.168.10.167:3000/askgolf");
>>>>>>> 58d60679ff56b839d8d57582c409b1a25b836cd4
      var response = await rawResponse.json();
      // console.log(response);
      props.onInitPage(response);
    }
    GolfFromBdd();
  }, []);

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
