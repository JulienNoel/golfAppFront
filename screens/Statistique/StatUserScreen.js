import { Text } from "react-native-elements";
import { StyleSheet, View,TouchableOpacity,Image} from "react-native";
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titreDiv: {
    flexDirection: 'column',
    justifyContent: "space-between",
  },
})
