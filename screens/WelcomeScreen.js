import { Text, Button } from "react-native-elements";
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
       welcome = <Text style={styles.text}>Welcome Back {props.user}</Text>
   } else {
     welcome = <Text style={styles.text}>Welcome To GolfApp</Text>
   }



  return (

    
    <ImageBackground source={require('../assets/paysage1.jpeg')} style={styles.container}>

        <View style={{flex: 1, justifyContent: 'space-evenly', alignItems : 'center' }}>
          <View>
          {welcome}
          </View>
          
            <View>
            <Button
                  title="GO GOLFING"
                  buttonStyle={{
                    borderColor: 'white',
                  }}
                  type="outline"
                  titleStyle={{ color: 'white' }}
                  containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                  }}
                  onPress={() => props.navigation.navigate('BottomNavigator')}
                />
            </View>
        </View>

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
