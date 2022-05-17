import {
  Input,
  Badge,
  Card,
  Text,
  ListItem,
  Avatar,
} from "react-native-elements";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome5 } from '@expo/vector-icons';

export default function MapScreen() {
  const [location, setLocation] = useState({latitude: 0, longitude:0});

  const [pseudo, setPseudo] = useState("");

  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 10 }, (location) => {
          setLocation({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
          });
        });
      }
    }
    askPermissions();
  }, []);

  let listGolf = [
    {
      name: "Mon beau golf",
      distance: 41,
      address: "Sur le parking des anges",
    },
    {
      name: "Mon magnifique golf",
      distance: 56,
      address: "En haut de la tour Eiffel",
    },
    {
      name: "Le golf de l'extrême",
      distance: 26,
      address: "Pas loin de chez mon pote Louis",
    },
    {
      name: "Mon très beau golf",
      distance: 78,
      address: "Dans les nuages",
    },
  ];

  var golf = [
    {
      name: "golf1",
      coordinate: { latitude: 48.86777683776753, longitude: 2.303689483736294 },
    },
    {
      name: "golf2",
      coordinate: { latitude: 48.84777683776753, longitude: 2.303689483736294 },
    },
    {
      name: "golf3",
      coordinate: { latitude: 48.83777683776753, longitude: 2.303689483736294 },
    },
    {
      name: "golf4",
      coordinate: { latitude: 48.82777683776753, longitude: 2.303689483736294 },
    },
    {
      name: "golf5",
      coordinate: { latitude: 48.88777683776753, longitude: 2.303689483736294 },
    },
  ];

  var inputSearchGolf = (
    <Input
      containerStyle={{ marginTop: 30, marginBottom: 5, width: "70%" }}
      inputStyle={{ marginLeft: 10 }}
      placeholder="Recherche de golf"
      leftIcon={<Icon name="search" size={24} color="#3AB795" />}
      onChangeText={(val) => setPseudo(val)}
    />
  );

  var golfCards = listGolf.map((l, i) => {
    return (
      <ListItem key={i}>
        <Avatar source={require("../assets/golf-icon.jpg")}
                size={10} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>
            {l.distance} km - {l.address}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  });
  var markerDisplayGolf = golf.map((point, i) => (
    <Marker
      key={i}
      coordinate={point.coordinate}
      title={point.name}      
      size={10}
    ><FontAwesome5 name="golf-ball" size={24} color="#3AB795" /></Marker>
  ));

  return (
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        image={require("../assets/UserMarker.jpg")}
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
      {markerDisplayGolf}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
//     return (
//         <View style={styles.container}>
//             <View style={{display: 'flex', alignItems: 'center'}}>
//             {inputSearchGolf}
//             </View>
//             <View style={styles.filters}>
//                 <Badge status="success" value='filter 1'/>
//                 <Badge status="success" value='filter 2'/>
//                 <Badge status="success" value='filter 3'/>
//             </View>
//             <ScrollView style ={{flex: 1, marginTop: 50}}>
//             {golfCards}
//             </ScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     filters: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-around'
//     }
