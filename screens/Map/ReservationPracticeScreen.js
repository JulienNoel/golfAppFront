import { Text, Button } from "react-native-elements";
import { View, Dimensions, Image, TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ReservationPracticeScreen(props) {
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
            height: windowHeight - windowHeight / 1.03,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "white",
            width: windowWidth - windowWidth / 15,
            height: windowHeight - windowHeight / 1.4,
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
            }}
          >
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#b3edbf",
                height: "30%",
              }}
            >
              {/*SELECTION NOMBRE DE TROUS*/}
            </View>
            <View
              style={{
                height: "30%",
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
              marginBottom: windowHeight - windowHeight / 1.05,
              display: "flex",
            }}
          >
            <Button
              buttonStyle={{
                backgroundColor: "#3AB795",
              }}
              title="Voir les disponibilités"
              containerStyle={{
                borderRadius: 10,
                width: "30%",
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
