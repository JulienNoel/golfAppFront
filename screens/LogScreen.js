
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
 
export default function LogScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    
    <View style={styles.container}>
    
      <Image style={styles.image} source={require('../assets/pro-golf-logo-maker-1558a.png')} />

      <Text style={styles.signinText}>Sign Up</Text>
      <View style={styles.inputView}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <Text style={styles.signinText}>Sign In</Text>
      <View style={styles.inputView}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
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
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#86BAA1",
    alignItems: "center",
    justifyContent: 'center'
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
 
  forgot_button: {

    height: 30,
    
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
      marginBottom: 15,
      fontSize: 20,
      color: '#86BAA1'
  },
  
});