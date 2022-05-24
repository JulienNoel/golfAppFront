import { Text, Button } from "react-native-elements";
import { View, Dimensions, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Entypo } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function recapReservation(props) {
  var golfSelectInfo = props.golfInDb.filter(
    (golf) => golf.golfName === props.golfName
  );

  var NbTrousInt = parseInt(props.route.params.NombreTrous);

  // Je recupere les info du parcour selectionner
  var parcoursSelect = [];

  for (var i = 0; i < golfSelectInfo[0].parcours.length; i++) {
    console.log(
      "dansboucle",
      golfSelectInfo[0].parcours[i].parcoursTrou.length
    );
    if (golfSelectInfo[0].parcours[i].parcoursTrou.length == NbTrousInt) {
      parcoursSelect.push(golfSelectInfo[0].parcours[i]);
    }
  }

  console.log("okok", parcoursSelect);
  console.log("navigate", props.route.params);

  var dayOfWeek = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const date = new Date(props.route.params.dateSelect);

  var day = dayOfWeek[date.getDay()];
  var month = monthNames[date.getMonth()];

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  var handleSumit = () => {
    props.navigation.navigate("Home");
    toggleModal();
  };

  if (
    props.route.params.checkedOpenToBuddies ||
    (!props.route.params.checkedOpenToBuddies &&
      !props.route.params.checkedBuddiesOnly)
  ) {
    return (
      <View
        style={{ flex: 1, backgroundColor: "#ededed", alignItems: "center" }}
      >
        <Modal
          isVisible={isModalVisible}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 10,
              width: windowWidth - windowWidth / 9,
              height: windowHeight - windowHeight / 1.3,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ fontWeight: "500", fontSize: 20 }}>
              Réservation validée !
            </Text>
            <Image
              style={{
                width: "20%",
                height: "42%",
                marginVertical: windowHeight - windowHeight / 1.02,
              }}
              source={require("../../assets/icons8-vérifié.gif")}
            />
            <View style={{ width: "90%" }}>
              <Button
                buttonStyle={{
                  backgroundColor: "#3AB795",
                  height: windowHeight - windowHeight / 1.05,
                }}
                containerStyle={{
                  borderRadius: 10,
                  width: "100%",
                }}
                title="Home"
                onPress={() => handleSumit()}
              />
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            position: "absolute",
            left: windowWidth - windowWidth / 1.01,
            top: windowHeight - windowHeight / 1.05,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: "#3AB795",
          }}
        >
          <Entypo
            name="chevron-left"
            size={24}
            color="white"
            onPress={() => props.navigation.navigate("Disponibilite")}
          />
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            marginTop: windowHeight - windowHeight / 1.11,
          }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              width: windowWidth - windowWidth / 15,
              marginBottom: windowHeight - windowHeight / 1.1,
            }}
          >
            <Text style={{ fontSize: 30 }}>{golfSelectInfo[0].golfName}</Text>
          </View>
          <View
            style={{
              width: windowWidth - windowWidth / 15,
              height: windowHeight - windowHeight / 1.5,
              marginBottom: windowHeight - windowHeight / 2,
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "90%",
                height: "95%",
              }}
            >
              <View
                style={{
                  height: "20%",
                  marginTop: windowHeight - windowHeight / 1.02,
                }}
              >
                <Text style={{ fontSize: 23, fontWeight: "600" }}>
                  Récapitulatif de la réservation
                </Text>
              </View>
              <View style={{ height: "80%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    height: "40%",
                  }}
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "40%",
                      marginRight: windowHeight - windowHeight / 1.01,
                      alignItems: "center",
                    }}
                    source={require("../../assets/paysage3.jpeg")}
                  />
                  <View
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "500",
                          marginBottom: windowHeight - windowHeight / 1.01,
                        }}
                      >
                        {parcoursSelect[0].nomParcours}
                      </Text>
                    </View>
                    <View>
                      <Text style={{ color: "grey" }}>
                        {props.route.params.NombreTrous} - {day}{" "}
                        {date.getDate()} {month} {props.route.params.hourSelect}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: windowWidth - windowWidth / 15,
                height: windowHeight - windowHeight / 1.1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: windowWidth - windowWidth / 1.15,
              }}
            >
              <Button
                buttonStyle={{
                  backgroundColor: "#3AB795",
                  height: windowHeight - windowHeight / 1.06,
                }}
                title="Payer"
                containerStyle={{
                  borderRadius: 10,
                  width: "100%",
                }}
                onPress={() => {
                  toggleModal;
                  props.navigate.navigation("StackMap");
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  } else if (props.route.params.checkedBuddiesOnly) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>checkedBuddiesOnly</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    golfInDb: state.golf[0].result,
    golfName: state.nameGolfSelect,
  };
}

export default connect(mapStateToProps, null)(recapReservation);
