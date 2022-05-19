import { Text } from "react-native-elements";
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from "react-native";

export default function ScorePageStart() {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", margin: 20 }}>Nouvelle Partie</Text>

      <TouchableOpacity style={styles.div} onPress={() => { console.log('button1'); }}>
        <ImageBackground source={require("../assets/closeBall1.jpeg")} style={styles.image} imageStyle={{ borderRadius: 5 }}>
          <View style={styles.overlay}>
            <Text style={styles.titreImage}>Partie réservée</Text>
            <Image
              style={{ width: 40, height: 40, marginBottom: 5, tintColor: "white" }}
              source={require("../assets/next.png")} />
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.div} onPress={() => { console.log('button2'); }}>
        <ImageBackground source={require("../assets/joueur3.jpeg")} style={styles.image} imageStyle={{ borderRadius: 5 }}>
          <View style={styles.overlay}>
            <Text style={styles.titreImage}>Nouvelle partie sans réservation</Text>
            <Image
              style={{ width: 40, height: 40, marginBottom: 5, tintColor: "white" }}
              source={require("../assets/next.png")} />
          </View>
        </ImageBackground>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  div: {
    width: '95%',
    height: '12%',
    borderRadius: 5,
    margin: 10,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    height: '100%',
  },
  overlay: {
    flex: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000080"
  },
  titreImage: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    padding: 10,
  }
})
