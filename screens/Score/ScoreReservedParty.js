import { Text, Button, Badge } from "react-native-elements";
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

export default function ScoreNewParty(props) {
  var tableau = [{ date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url : require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18,url : require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18,url : require("../../assets/practice.jpeg") },{ date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url : require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18,url : require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18,url : require("../../assets/practice.jpeg") },{ date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18, url : require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18,url : require("../../assets/practice.jpeg") }, { date: "19 mars 1996", heure: "9h30", nombreJoueur: 3, nomParcours: 'Beau soleil', trou: 18,url : require("../../assets/practice.jpeg") }]
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('ScorePageStart')}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../../assets/previous.png")}
        /></TouchableOpacity>
      <Button
        buttonStyle={{ width: '30%' }}
        title="reserved"
        onPress={() => props.navigation.navigate('ScorePageScreen')}
      />
      {ReservedPartyTab(tableau)}
    </View>
  );
}

function ReservedPartyTab(tableauRéservation) {

  var gallery = tableauRéservation.map((element, index) => {
    return (
      <Card style={styles.card} >
        <Card.Cover source={element.url} style={{height:100}}/>
        <Card.Content style={{height:70}}>
          <Text>{element.date}</Text>
          <Text>{element.heure}</Text>
          <Text>{element.nombreJoueur}</Text>
          <Text>{element.nomParcours}</Text>
          <Text>{element.trou}</Text>
        </Card.Content>
      </Card>)
  })
  return (
      <ScrollView contentContainerStyle={styles.scroll}>
        {gallery}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  scroll: {
    flexGrow: 1,
    backgroundColor:"red",
    width: '100%',
    alignItems:"center",
    flexWrap:"wrap",
    height:1000,
  },
  card: {
    width: '45%',
    margin:"2.5%",
    
  }, 
});
