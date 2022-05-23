import { Text } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity, Image, ScrollView } from "react-native";
import cartouche from "../components/menuCartouche"
export default function StatHomeScreen(props) {

  return (
    <View style={styles.container}>
      <View style={styles.titreDiv}>
        <TouchableOpacity onPress={() => props.navigation.navigate('StatistiqueHome')}>
          <Image style={{ width: 40, height: 40 }} source={require("../../assets/previous.png")} />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: 'center', marginBottom: 10 }}>Stat User</Text>
      </View>
      {cartouche(props, "A voir", require("../../assets/closeBall1.jpeg"), "StatistiqueUser")}
      <View style={{ alignItems: "center" }}>
        <View style={styles.cartoucheDash}></View>
        <View style={styles.cartoucheDash}></View>
        <View style={styles.cartoucheDash}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,

  },
  titreDiv: {
    flexDirection: 'column',
    justifyContent: "space-between",
  },
  cartoucheDash: {
    alignItems: "center",
    width: '95%',
    height: '26%',
    borderRadius: 5,
    marginTop: 10,
    shadowColor: "#000",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})
