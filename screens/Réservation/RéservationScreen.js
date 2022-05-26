import React, { useEffect, useState } from "react";
import { Text } from "react-native-elements";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";

import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";

import moment from "moment";
import "moment/locale/fr";

function ScoreNewParty(props) {
  const [reservationTableau, setReservationTableau] = useState([]);

  console.log(props.userInfo.user.token);
  useEffect(() => {
    async function ReservationFromBdd() {
<<<<<<< HEAD
      var rawResponse = await fetch(`http://192.168.10.125:3000/getReservation/${props.userInfo.user.token}/`)
=======
      var rawResponse = await fetch(
        `https://calm-bastion-61741.herokuapp.com/getReservation/${props.userInfo.user.token}/`
      );
>>>>>>> 80773067c0240d2fcdc7c78430222e8134cbff59
      var response = await rawResponse.json();
      console.log("reservaation", response);
      setReservationTableau(response.reservation);
    }
    ReservationFromBdd();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titreDiv}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/previous.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Mes réservations
        </Text>
      </View>
      {ReservedPartyTab(reservationTableau, props)}
    </View>
  );
}

function ReservedPartyTab(tableauRéservation, props) {
  var gallery = tableauRéservation.map((element, index) => {
    var dateFormat = moment(element.dateReservation).format("L");
    for (const a of element.golfId.parcours) {
      if (a.nomParcours === element.nomParcours) {
        var l = a.parcoursTrou.length;
      }
    }

    return (
      <TouchableOpacity key={index} style={styles.card}>
        <Card>
          <Card.Cover
            source={require("../../assets/joueur5.jpeg")}
            style={{ height: 100 }}
          />
          <View style={styles.overlay}>
            <View style={{ flex: 1, height: "100%" }}>
              <Text style={styles.titreImage}>{element.nomParcours}</Text>
            </View>
            <View style={{ flex: 1, height: "40%" }}>
              <Text style={styles.subTitreImage}>
                {element.idJoueur.length}{" "}
                <FontAwesome name="user" size={14} color={"white"} />
              </Text>
              <Text style={styles.subTitreImage}>{l + " trous"}</Text>
            </View>
          </View>
          <Card.Content
            style={{
              height: 70,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.titreCard}>{dateFormat}</Text>
            <Text style={styles.titreCard}>{element.heureReservation}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  });
  return (
    <ScrollView contentContainerStyle={styles.scroll}>{gallery}</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  titreDiv: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  scroll: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    flexWrap: "wrap",
    height: 1000,
  },
  card: {
    width: "45%",
    margin: "2.5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  overlay: {
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    position: "absolute",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: 100,
    backgroundColor: "#00000080",
  },
  titreImage: {
    fontSize: 13,
    fontWeight: "700",
    color: "white",
    margin: 10,
  },
  titreCard: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    textAlign: "justify",
    marginTop: 6,
  },
  subTitreImage: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    margin: 1,
    marginRight: 10,
    textAlign: "right",
  },
});

function mapStateToProps(state) {
  return { userInfo: state.userActiveInfo };
}

export default connect(mapStateToProps, null)(ScoreNewParty);
