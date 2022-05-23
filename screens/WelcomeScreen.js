import { Text } from "react-native-elements";
import { ImageBackground, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';



function WelcomeScreen(props) {
  

  
  
  const [isLogin, setIsLogin] = useState(false)

  
  AsyncStorage.getItem("info User", function(error, data) {
    var userData = JSON.parse(data);
    
    if (userData) {
    props.addToken(userData.token)
    props.addUser(userData.userPrenom)
    setIsLogin(true)
    }
   });

   var welcome

   if (isLogin) {
       welcome = <Text style={styles.text}>{props.user}</Text>
   }



  return (

    
    <ImageBackground source={require('../assets/paysage1.jpeg')} style={styles.container}>

        <Text style={styles.text}>Welcome To GolfApp</Text>
        {welcome}

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



function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      
      dispatch({type: 'addToken', token: token})
    },
    addUser: function(user){
      console.log(user)
      dispatch({type: 'addUser', user: user})
    }      
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
