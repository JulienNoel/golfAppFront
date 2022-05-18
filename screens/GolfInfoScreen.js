import { Text, Button } from "react-native-elements";
import { View, Dimensions } from "react-native";
import { Link } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function GolfInfoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Text>Nom du golf - Ville</Text>
        <Button
          title="Reserver"
          containerStyle={{
            width: windowWidth - windowWidth / 1.5,
          }}
        />
        <Text>Détails</Text>
        <View
          style={{
            backgroundColor: "#b3edbf",
            width: windowWidth - windowWidth / 15,
            height: windowHeight - windowHeight / 1.5,
            marginBottom: windowHeight - windowHeight / 1.05,
          }}
        >
          <View style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}>
            <Text>Télephone</Text>
            <Text>0651803967</Text>
          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}>
            <Text>Site Web</Text>
            <Link>zebi.com</Link>
          </View>
          <View>
            <Text>Adresse</Text>
            <Text>32 avenue de Reims 60300 Senlis France</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#b3edbf",
            width: windowWidth - windowWidth / 15,
            height: windowHeight - windowHeight / 1.5,
            marginBottom: windowHeight - windowHeight / 1.05,
          }}
        >
          <Text>Note du golf</Text>
          <View style={{ display: "flex" }}>
            <FontAwesome name="star" size={24} color="black" />
            <FontAwesome name="star" size={24} color="black" />
            <FontAwesome name="star" size={24} color="black" />
            <FontAwesome name="star" size={24} color="black" />
            <FontAwesome name="star-o" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
}
