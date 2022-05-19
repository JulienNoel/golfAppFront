
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
 
export default function RegisterScreen() {

  
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [error, setError] = useState([])

  var handleSubmitRegister = async () => {
    
    const data = await fetch('http://192.168.1.157:3000/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `emailFromFront=${emailRegister}&passwordFromFront=${passwordRegister}&userNameFromFront=${name}&prenomFromFront=${prenom}&birthDateFromFront=${birthDate}`
    })

    const body = await data.json()
    
    if (body.result) {

    setEmailRegister('')
    setPasswordRegister('')
    setName('')
    setPrenom('')
    setBirthDate('')

    }
    


  }

 
  return (
    
    <View style={styles.container}>
    
      <Image style={styles.image} source={require('../assets/pro-golf-logo-maker-1558a.png')} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nom"
          placeholderTextColor="#003f5c"
          onChangeText={(val) => setName(val)}
          value={name}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Prenom"
          placeholderTextColor="#003f5c"
          onChangeText={(val) => setPrenom(val)}
          value={prenom}
        />
      </View>

      
      <View style={styles.inputView}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(val) => setEmailRegister(val)}
          value={emailRegister}
        />
      </View>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(val) => setPasswordRegister(val)}
          value={passwordRegister}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Date de Naissance"
          placeholderTextColor="#003f5c"          
          onChangeText={(val) => setBirthDate(val)}
          value={birthDate}
          autoComplete='birthdate-full'
        />
      </View>

       
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmitRegister()}>
        <Text style={styles.loginText}>REGISTER</Text>
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