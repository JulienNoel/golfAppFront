
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
 
export default function LogScreen(props) {

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [messageError, setMessageError] = useState([]);

  var handleSubmitLogin = async () => {
    
    const data = await fetch('https://calm-bastion-61741.herokuapp.com/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `emailFromFront=${emailLogin}&passwordFromFront=${passwordLogin}`
    })

    const body = await data.json()
    console.log(body.result)

    if (body.result) {

      setEmailLogin('')
      setPasswordLogin('')
      setMessageError([])
      props.navigation.navigate('StackMap')
    }

        

  } 

  var errorLogin = messageError.map((error,i) => {
    return(<Text style={{color: 'red'}}>{error}</Text>)
  })
 
  return (
    
    <View style={styles.container}>
    
      <Image style={styles.image} source={require('../assets/pro-golf-logo-maker-1558a.png')} />
      {errorLogin}
      <Text style={styles.signinText}>LOG IN</Text>
      <View style={styles.inputView}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmailLogin(email)}
          value={emailLogin}
          keyboardType='email-address'
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPasswordLogin(password)}
          value={passwordLogin}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmitLogin()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>    

      <Text style={styles.newAccountText}>Pas de Compte ?</Text>

      <TouchableOpacity style={styles.loginBtn} onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.loginText}>CREER UN COMPTE</Text>
      </TouchableOpacity>        
     
    </View>
    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    height: 200,
    width: 200,
        
  },
 
  inputView: {
    backgroundColor: "white",
    borderRadius: 5,
    width: "70%",
    height: 45,
    marginBottom: 20,    
    borderWidth: 1,
    borderColor: "#86BAA1",
    
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: "center"
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#3AB795",
    borderWidth: 1,
    borderColor: "#86BAA1",
    
  },
  loginText: {
      color: 'white'
  },
  signinText: {
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 15,
      fontSize: 20,
      color: '#86BAA1'
  },
  newAccountText: {

      fontWeight: 'bold',      
      marginTop: 15,
      fontSize: 20,
      color: '#86BAA1'

  }
  
});