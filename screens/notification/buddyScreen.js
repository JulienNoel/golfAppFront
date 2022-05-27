import { Text, Button, Badge } from "react-native-elements";
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { checkPluginState } from "react-native-reanimated/lib/reanimated2/core";

export default function buddyScreen(props) {
  var tableauBuddy = [{name : "Steve N. 40 ans", index : 42, text : "Bonjour Tiger ! Je viens de voir votre créaneau, je suis motivé de jouer avec vous si mon profil plains :)"},
  {name : "Cyprien M. 32 ans", index : 35, text : "Salut, je suis seul sur le weekend de ton créneau je suis motivé de jouer avec toi. Je ramène les bière ;)"},
  {name : "Laure R. 27 ans", index : 47, text : "Bonsoir, je cherche un créneau pour jouer au golf chaumont, hésitez pas à m'accepter"},
  {name : "Louis M. 23 ans", index : 43, text : "Motivé pour jouer avec toi !"},
  {name : "Julien N. 40 ans", index : 32, text : "Hello ! j'ai un bon niveau et je suis motivé de jouer sur Paris le weekend prochain je ramènerais le petit déjeuner !"}]
  
  const [page, setPage] = useState(0);
  function plus() {
    if(page < tableauBuddy.length-1){
      setPage(page+1)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.titreDiv}>
        <TouchableOpacity style={{ width: "100%", alignItems: "flex-start" }} onPress={() => props.navigation.navigate('Home')}>
          <Image style={{ width: 40, height: 40 }} source={require("../../assets/previous.png")} />
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginBottom: 40, marginTop:"15%", fontWeight: "700", fontSize: "20" }}>Parcours divin {"\n"}4 juin 2022 - 9h15 {"\n"} Golf Chaumont</Text>
      </View>
      <View style={styles.cartoucheDash}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ width: 40, height: 40, borderWidth: 1, borderColor: "grey", borderRadius: 100, alignItems: 'center', justifyContent: "center", backgroundColor: "grey", margin: 20 }}>
            <Icon name="user" size={18} color="white" />
          </View>
          <View style={{ alignItems: "flex-start" }}>
            <Text style={{ textAlign: "center", fontWeight: "600", fontSize: "18", marginRight: 50 }}>{tableauBuddy[page].name}</Text>
            <Badge
              badgeStyle={{ backgroundColor: "#3AB795", height: 20, marginTop: 5 }}
              textStyle={{ fontWeight: "bold" }}
              value={" Index : "+ tableauBuddy[page].index} //+ page.index
            />
          </View>
        </View>
        <View style={styles.cartoucheText}>
          <View style={{ padding: 10 }}><Text>{tableauBuddy[page].text}</Text></View>
        </View>
      </View>
      <Text style={{ margin: 10 }}>{page+1} / {tableauBuddy.length}</Text>
      <View style={styles.navigationIcon}>

        <TouchableOpacity onPress={() => plus()}>
          <View style={{ borderRadius: 100, borderWidth: 2, width: 70, height: 70, borderColor: "red", justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 40, height: 40, tintColor: 'red' }}
              source={require("../../assets/no.png")}
            /></View>
        </TouchableOpacity>

        <Button
          title="Message"
          buttonStyle={{ marginRight: "10%", marginLeft: "10%",backgroundColor:"#3AB795"}}
          onPress={() => console.log("hello")}
        />

        <TouchableOpacity onPress={() => plus()}>
          <View style={{ borderRadius: 100, borderWidth: 2, width: 70, height: 70, borderColor: "green", justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 60, height: 60, tintColor: 'green' }}
              source={require("../../assets/yes.png")}
            /></View></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#ededed",
  }, cartoucheDash: {
    justifyContent: "center",
    alignItems: "center",
    width: '75%',
    height: '45%',
    borderRadius: 5,
    shadowColor: "#000",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    }
  }, cartoucheText: {
    width: '90%',
    height: '66%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ededed",
  }, navigationIcon: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titreDiv: {
    width: "100%",
    flexDirection: 'column',
    justifyContent: "space-between",
  },
})
