import { Text } from "react-native-elements";
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import cartouche from "../components/menuCartouche"

export default function ScorePageStart(props) {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", margin: 20 }}>Nouvelle Partie</Text>
      <View style={{ height: "100%", width: "100%", justifyContent: "center"}}>
        {cartouche(props, "Partie réservée", require("../../assets/closeBall1.jpeg"), "ScoreReservedParty")}
        {cartouche(props, "Sans réservation", require("../../assets/joueur3.jpeg"), "ScoreNewParty")}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
  },
})
