import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { connect } from "react-redux";

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
