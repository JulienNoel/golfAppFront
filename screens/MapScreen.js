import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import {} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MapScreen() {
  const [location, setLocation] = useState({});

  var golf = [
    {
      name: "golf1",
      coordinate: { latitude: 48.86777683776753, latitude: 2.303689483736294 },
    },
    {
      name: "golf2",
      coordinate: { latitude: 48.84777683776753, latitude: 2.303689483736294 },
    },
    {
      name: "golf3",
      coordinate: { latitude: 48.83777683776753, latitude: 2.303689483736294 },
    },
    {
      name: "golf4",
      coordinate: { latitude: 48.82777683776753, latitude: 2.303689483736294 },
    },
    {
      name: "golf5",
      coordinate: { latitude: 48.88777683776753, latitude: 2.303689483736294 },
    },
  ];

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
  }, [location]);

  console.log(location);

  var markerDisplayGolf = golf.map((point, i) => (
    <Marker
      key={i}
      coordinate={point.coordinate}
      title={point.name}
      image={require("../assets/GolfMarker.jpg")}
    />
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
