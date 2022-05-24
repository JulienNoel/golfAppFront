import { Text, Button, Badge } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function buddyScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.titreDiv}>
        <TouchableOpacity style={{ width: "100%", alignItems: "flex-start" }} onPress={() => props.navigation.navigate('Home')}>
          <Image style={{ width: 40, height: 40 }} source={require("../../assets/previous.png")} />
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginBottom: 40, marginTop:"15%", fontWeight: "700", fontSize: "20" }}>Parcours du {"\n"} 21 mars 2022 - 9h15 {"\n"} Golf au gros boule</Text>
      </View>
      <View style={styles.cartoucheDash}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ width: 40, height: 40, borderWidth: 1, borderColor: "grey", borderRadius: 100, alignItems: 'center', justifyContent: "center", backgroundColor: "grey", margin: 20 }}>
            <Icon name="user" size={18} color="white" />
          </View>
          <View style={{ alignItems: "flex-start" }}>
            <Text style={{ textAlign: "center", fontWeight: "600", fontSize: "18", marginRight: 50 }}>Julien N. 40 ans</Text>
            <Badge
              badgeStyle={{ backgroundColor: "#3AB795", height: 20, marginTop: 5 }}
              textStyle={{ fontWeight: "bold" }}
              value={" Index : 32"} //+ page.index
            />
          </View>
        </View>
        <View style={styles.cartoucheText}>
          <View style={{ padding: 10 }}><Text>Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shee</Text></View>
        </View>
      </View>
      <Text style={{ margin: 10 }}>2 / 10</Text>
      <View style={styles.navigationIcon}>

        <TouchableOpacity onPress={() => console.log("hello")}>
          <View style={{ borderRadius: 100, borderWidth: 2, width: 70, height: 70, borderColor: "red", justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 40, height: 40, tintColor: 'red' }}
              source={require("../../assets/no.png")}
            /></View>
        </TouchableOpacity>

        <Button
          title="Message"
          style={{ marginRight: "10%", marginLeft: "10%" }}
          onPress={() => console.log("hello")}
        />

        <TouchableOpacity onPress={() => console.log("hello")}>
          <View style={{ borderRadius: 100, borderWidth: 2, width: 70, height: 70, borderColor: "green", justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 60, height: 60, tintColor: 'green' }}
              source={require("../../assets/yes.png")}
            /></View></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#ededed",
  }, cartoucheDash: {
    justifyContent: "center",
    alignItems: "center",
    width: '75%',
    height: '45%',
    borderRadius: 5,
    shadowColor: "#000",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    }
  }, cartoucheText: {
    width: '90%',
    height: '66%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ededed",
  }, navigationIcon: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titreDiv: {
    width: "100%",
    flexDirection: 'column',
    justifyContent: "space-between",
  },
})
