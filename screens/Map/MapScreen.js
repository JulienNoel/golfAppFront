import { Text } from "react-native-elements";
import React, { useState, useEffect } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  View,
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
  const [newCurrentLocation, setNewCurrentLocation] = useState(null);
  const [color, setColor] = useState("#3AB795");
  const [colorMap, setColorMap] = useState("white");
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
        // var LongEtLat = await Location.geocodeAsync(props.golf[0].golfAdress);
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

  props.localisationTransfer(location)

  var mapTypeChange = () => {
    if (mapType === "standard") {
      setMapType("satellite");
      setColorMap("#3AB795");
    } else {
      setMapType("standard");
      setColorMap("white");
    }
  };

<<<<<<< HEAD:screens/MapScreen.js
  // if (props.golf.length != 0) {
  //   var markerDisplayGolf = props.golf[0].result.map((point, i) => (
  //     <Marker
  //       key={Math.random()}
  //       coordinate={{
  //         latitude: point.golfAddress.golfLatitude,
  //         longitude: point.golfAddress.golfLongitude,
  //       }}
  //       title={point.golfName}
  //     >
  //       <Image source={require("../assets/GolfMarker.png")} />
  //     </Marker>
  //   ));
  // }
=======
  if (props.golf[0]) {
    console.log(typeof props.golf[0].result[0].golfAddress.golfLatitude);
    var markerDisplayGolf = props.golf[0].result.map((point, i) => (
      <Marker
        key={Math.random()}
        coordinate={{
          latitude: point.golfAddress.golfLatitude,
          longitude: point.golfAddress.golfLongitude,
        }}
        title={point.golfName}
      >
        <Image source={require("../../assets/GolfMarker.png")} />
      </Marker>
    ));
  }
>>>>>>> 0615fba8d191af9e3c5afff7e76bcbe634446626:screens/Map/MapScreen.js

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
            image={require("../../assets/UserMarker.png")}
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
          {/* {markerDisplayGolf} */}
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Chargement...</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { golf: state.golf };
}

function mapDispatchToProps(dispatch) {
  return {
    localisationTransfer: function (localisation) {
      dispatch({ type: "AddLocalisation", localisation });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
