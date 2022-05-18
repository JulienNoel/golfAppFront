import { Text } from "react-native-elements";
import React, { useState, useEffect } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SwipeUpDownGolf from "./SwipeUpDown";

import { connect } from "react-redux";

function MapScreen(props) {
  const [location, setLocation] = useState({});
  const [locationInit, setLocationInit] = useState({});

  const [pseudo, setPseudo] = useState("");
  const [color, setColor] = useState("#3AB795");
  const [colorMap, setColorMap] = useState("white");
  const [newCurrentLocation, setNewCurrentLocation] = useState(null);
  const [mapType, setMapType] = useState("standard");

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        var locationTemp = await Location.getCurrentPositionAsync();
        setLocationInit({
          longitude: locationTemp.coords.longitude,
          latitude: locationTemp.coords.latitude,
        });
        setLocation({
          longitude: locationTemp.coords.longitude,
          latitude: locationTemp.coords.latitude,
        });
      }
    }
    askPermissions();
  }, []);

  var currentLocation = async () => {
    var currentPosition = await Location.getCurrentPositionAsync();
    setNewCurrentLocation({
      latitude: currentPosition.coords.latitude,
      longitude: currentPosition.coords.longitude,
    });
  };

  var mapTypeChange = () => {
    if (mapType === "standard") {
      setMapType("satellite");
      setColorMap("#3AB795");
    } else {
      setMapType("standard");
      setColorMap("white");
    }
  };

  var golf = [
    {
      name: "golf1",
      coordinate: { latitude: 48.86777683776753, longitude: 2.303689483736294 },
    },
    {
      name: "golf2",
      coordinate: { latitude: 40, longitude: 4 },
    },
  ];

  var markerDisplayGolf = golf.map((point, i) => (
    <Marker
      key={Math.random()}
      coordinate={{
        latitude: point.coordinate.latitude,
        longitude: point.coordinate.longitude,
      }}
      title={point.name}
    >
      <Image source={require("../assets/GolfMarker.png")} />
    </Marker>
  ));

  if (locationInit.latitude) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <MapView
          onRegionChange={() => setColor("white")}
          mapType={mapType}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: locationInit.latitude,
            longitude: locationInit.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            zIndex: 0,
          }}
          region={
            newCurrentLocation
              ? {
                  latitude: newCurrentLocation.latitude,
                  longitude: newCurrentLocation.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }
              : undefined
          }
        >
          <Marker
            image={require("../assets/UserMarker.png")}
            coordinate={
              location
                ? {
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }
                : {
                    latitude: 0,
                    longitude: 0,
                  }
            }
            style={{ width: 26, height: 28 }}
            resizeMode="contain"
          />
          {markerDisplayGolf}
        </MapView>
        {/*If you are using navigation in child component don't forget to send navigation in props to child*/}
        <SwipeUpDownGolf
          navigation={props.navigation}
          style={{ position: "absolute", zIndex: 1 }}
        ></SwipeUpDownGolf>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            position: "absolute",
            left: windowWidth - windowWidth / 6,
            top: windowHeight - windowHeight / 1.09,
            backgroundColor: "#A0E8AF",
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            zIndex: 1,
          }}
        >
          <FontAwesome
            name="location-arrow"
            size={24}
            color={color}
            style={{ paddingBottom: 15 }}
            onPress={() => {
              setColor("#3AB795");
              setNewCurrentLocation(currentLocation);

              {
                newCurrentLocation
                  ? setLocation(newCurrentLocation)
                  : undefined;
              }
            }}
          />
          <Entypo
            name="map"
            size={24}
            color={colorMap}
            onPress={() => {
              setMapType(mapTypeChange);
            }}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <Text
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Chargement
      </Text>
    );
  }
}

function mapStateToProps(state) {
  return { golf: state.golf };
}

export default connect(mapStateToProps, null)(MapScreen);
