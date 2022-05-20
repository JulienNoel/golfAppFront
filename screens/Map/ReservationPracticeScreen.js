import { Text, Button, ButtonGroup } from "react-native-elements";
import { View, Dimensions, Image, TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ReservationPracticeScreen(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  var golfSelectInfo = props.golfInDb.filter(
    (golf) => golf.golfName === props.golfName
  );

  // console.log("golfNameSelect", props.golfName);
  // console.log("golfselectCity", golfSelectInfo[0].golfAddress.golfCity);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ededed",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          height: "38%",
          width: windowWidth,
          marginBottom: windowHeight - windowHeight / 1.02,
        }}
        source={require("../../assets/paysage2.jpeg")}
      />
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
          onPress={() => props.navigation.navigate("GolfInfo")}
        />
      </TouchableOpacity>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            width: windowWidth - windowWidth / 15,
            marginVertical: windowHeight - windowHeight / 1.01,
          }}
        >
          <Text style={{ fontSize: 30 }}>{golfSelectInfo[0].golfName}</Text>
        </View>
        <View
          style={{
            width: windowWidth - windowWidth / 15,
            height: windowHeight - windowHeight / 1.5,
            marginBottom: windowHeight - windowHeight / 1.05,
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              width: "95%",
              height: "95%",
              justifyContent: "space-around",
              backgroundColor: "red",
              marginVertical: windowHeight - windowHeight / 1.04,
            }}
          >
            <View
              style={{
                height: "30%",
                backgroundColor: "pink",
              }}
            >
              {/*SELECTION NOMBRE DE TROUS*/}
              <ButtonGroup
                buttons={["18 trous", "9 trous"]}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                  setSelectedIndex(value);
                }}
                containerStyle={{
                  marginBottom: 20,
                  borderRadius: 10,
                  backgroundColor: "red",
                }}
              />
            </View>
            <View
              style={{
                height: "50%",
                backgroundColor: "white",
              }}
            >
              {/*Radio Seulement créneaux ouverts aux buddies*/}
              {/*Radio Proposer mon créneau aux buddies*/}
            </View>
          </View>
          <View
            style={{
              width: windowWidth - windowWidth / 15,
              height: windowHeight - windowHeight / 1.08,
              // marginHorizontal: windowHeight - windowHeight / 1.05,
              backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              buttonStyle={{
                backgroundColor: "#3AB795",
              }}
              title="Voir les disponibilités"
              containerStyle={{
                borderRadius: 10,
                width: "100%",
              }}
              // onPress={() => props.navigation.navigate("")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  console.log("mapstate", state.golfName);
  return { golfInDb: state.golf[0].result, golfName: state.nameGolfSelect };
}

export default connect(mapStateToProps, null)(ReservationPracticeScreen);
