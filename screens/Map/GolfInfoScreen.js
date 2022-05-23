import { Text, Button } from "react-native-elements";
import { View, Dimensions, Image, TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function GolfInfoScreen(props) {
  var golfSelectInfo = props.golfInDb.filter(
    (golf) => golf.golfName === props.golfName
  );

var Reserver = () => {

  if (props.token) {

    props.navigation.navigate("Resarvation")

  } else {
    
    props.navigation.navigate("Login")
    
  }

}


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
        source={require("../../assets/paysage3.jpeg")}
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
          onPress={() => props.navigation.navigate("Map")}
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
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: windowWidth - windowWidth / 15,
            marginVertical: windowHeight - windowHeight / 1.01,
          }}
        >
          <Text style={{ fontSize: 20 }}>
            {golfSelectInfo[0].golfName} -{" "}
            {golfSelectInfo[0].golfAddress.golfCity}
          </Text>
          <Button
            buttonStyle={{
              backgroundColor: "#3AB795",
            }}
            title="Reserver"
            containerStyle={{
              borderRadius: 10,
              width: "30%",
            }}
            onPress={() => Reserver()}
          />
        </View>
        <View
          style={{
            width: windowWidth - windowWidth / 15,
            height: windowHeight - windowHeight / 1.03,
          }}
        >
          <Text
            style={{
              marginBottom: windowHeight - windowHeight / 1.01,
            }}
          >
            Détails
          </Text>
        </View>
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
              <Text style={{ color: "#939393", marginVertical: "4%" }}>
                Télephone
              </Text>
              <Text>0651803967</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#b3edbf",
                height: "30%",
              }}
            >
              <Text style={{ color: "#939393", marginVertical: "4%" }}>
                Site Web
              </Text>
              <Link>zebi.com</Link>
            </View>
            <View
              style={{
                justifyContent: "space-around",
                height: "40%",
              }}
            >
              <View>
                <Text style={{ color: "#939393" }}>Adresse</Text>
              </View>
              <View>
                <Text>{golfSelectInfo[0].golfAddress.golfAddressName}</Text>
                <Text>
                  {" "}
                  {golfSelectInfo[0].golfAddress.golfPostCode}{" "}
                  {golfSelectInfo[0].golfAddress.golfCity}
                </Text>
                <Text> France</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: windowWidth - windowWidth / 15,
            height: windowHeight - windowHeight / 1.08,
            marginBottom: windowHeight - windowHeight / 1.05,
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: "#939393",
            }}
          >
            Note du golf
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="star" size={24} color="#3AB795" />
            <FontAwesome name="star" size={24} color="#3AB795" />
            <FontAwesome name="star" size={24} color="#3AB795" />
            <FontAwesome name="star" size={24} color="#3AB795" />
            <FontAwesome name="star-o" size={24} color="#3AB795" />
          </View>
        </View>
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return { golfInDb: state.golf[0].result, golfName: state.nameGolfSelect, token: state.token };
}

export default connect(mapStateToProps, null)(GolfInfoScreen);
