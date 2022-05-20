import * as React from "react";
import { Text, Input, ListItem } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ScoreNewParty(props) {
  var tableau = [{ date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") },{ date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url: require("../../assets/practice.jpeg") }]
  const [value, setValue] = React.useState("");

  var golfList = tableau.map((element, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => props.navigation.navigate("ScorePageScreen")}>
        <ListItem style={{ borderBottomWidth: 1, borderBottomColor: "#3AB795", width: "100%" }}>
          <Image
            source={require("../../assets/golf-icon.jpg")}
            style={{
              borderRadius: 100,
              width: 25,
              height: 25,
            }}
          />
          <ListItem.Content>
            <ListItem.Title>{element.nomParcours}</ListItem.Title>
            <ListItem.Subtitle>
              {element.trou} trous
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.titreDiv}>
        <TouchableOpacity onPress={() => props.navigation.navigate('ScorePageStart')}>
          <Image style={{ width: 40, height: 40 }} source={require("../../assets/previous.png")} />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: 'center', marginBottom: 10 }}>Chercher un parcours</Text>
      </View>
      <View style={{ alignItems: "center", width: "100%" }}>
        <Input
          containerStyle={{
            marginTop: "5%",
            width: "90%",
            backgroundColor: "white",
            borderRadius: 10,
            height: 50,
          }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          inputStyle={{ marginLeft: 10 }}
          placeholder="Nom parcours"
          leftIcon={<Icon name="search" size={24} color="#3AB795" />}
          onChangeText={(val) => setValue(val)}
        />
        <View style={{ width: '100%'}}>
          <ScrollView style={{ marginTop: 10, height:"83%"}}>
            {golfList}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
  },
  titreDiv: {
    flexDirection: 'column',
    justifyContent: "space-between",
  },
})
