import { Text } from "react-native-elements";
import { ImageBackground, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';



function WelcomeScreen(props) {
  

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

    
    <ImageBackground source={require('../assets/paysage1.jpeg')} style={styles.container}>

        <Text style={styles.text}>Welcome To GolfApp</Text>
        <Text style={styles.text}>{props.user}</Text>

    </ImageBackground> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
})



function mapStateToProps(state){
  
  return {user: state.user}
}

export default connect(mapStateToProps, null)(WelcomeScreen);
