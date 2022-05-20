import { Text } from "react-native-elements";
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import cartouche from "../components/menuCartouche"

export default function ScorePageStart(props) {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", margin: 20 }}>Nouvelle Partie</Text>
      {cartouche(props, "Partie réservée", require("../../assets/closeBall1.jpeg"), "ScoreReservedParty")}
      {cartouche(props, "Sans réservation", require("../../assets/joueur3.jpeg"), "ScoreNewParty")}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
