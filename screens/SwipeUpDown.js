import { Input, Badge, Text, ListItem, Slider } from "react-native-elements";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import SwipeUpDown from "react-native-swipe-up-down";
import { Entypo } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";

function SwipeUpDownGolf(props) {
  const swipeUpDownRef = useRef();
  const [research, setResearch] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [bgColorFilter1, setBgColorFilter1] = useState("#b3edbf");
  const [bgColorFilter2, setBgColorFilter2] = useState("#b3edbf");
  const [bgColorFilter3, setBgColorFilter3] = useState("#b3edbf");
  const [bgColorFilter4, setBgColorFilter4] = useState("#b3edbf");
  const [filter9trous, setFilter9trous] = useState(false);
  const [filter18trous, setFilter18trous] = useState(false);
  const [filterPractice, setFilterPractice] = useState(false);
  const [filterRestauration, setFilterRestauration] = useState(false);
  const [valueKm, setValueKm] = useState(0);

  let favoriteGolfsdistance = [
    { distance: 36 },
    { distance: 46 },
    { distance: 66 },
    { distance: 36 },
    { distance: 46 },
    { distance: 66 },
    { distance: 36 },
    { distance: 46 },
    { distance: 66 },
    { distance: 66 },
    { distance: 66 },
    { distance: 66 },
    { distance: 66 },
    { distance: 66 },
    { distance: 66 },
    { distance: 66 },
    { distance: 66 },
  ];

  var favoriteGolfs = favoriteGolfsdistance.map((l, i) => {
    return (
      <TouchableWithoutFeedback key={Math.random()}>
        <View style={{ marginHorizontal: 20 }}>
          <Image
            source={require("../assets/golf-icon.jpg")}
            style={{
              borderRadius: 100,
              width: windowWidth / 10,
              height: windowHeight / 22,
            }}
          />
          <Text>{l.distance} km</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  });

  var inputSearchGolf = (
    <Input
      containerStyle={{
        marginTop: windowHeight - windowHeight / 1.01,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        height: 50,
      }}
      inputContainerStyle={{ borderBottomWidth: 0 }}
      inputStyle={{ marginLeft: 10 }}
      placeholder="Recherche de golf"
      leftIcon={<Icon name="search" size={24} color="#3AB795" />}
      onPressIn={() => {
        swipeUpDownRef.current.showFull();
      }}
      onChangeText={(val) => setResearch(val)}
    />
  );

  var filteredGolfs = props.golfInDb[0].result;
  if (filter9trous) {
    filteredGolfs = filteredGolfs.filter(
      (golf) => golf.parcours[0].nbreTrou == 9 || golf.parcours[1].nbreTrou == 9
    );
  }

  if (filter18trous) {
    filteredGolfs = filteredGolfs.filter(
      (golf) =>
        golf.parcours[0].nbreTrou == 18 || golf.parcours[1].nbreTrou == 18
    );
  }

  var golfList = filteredGolfs.map((l, i) => {
    return (
      <TouchableWithoutFeedback>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("GolfInfo");
            props.onPressList(l.golfName);
            console.log("danslelistitem", l.golfName);
          }}
        >
          <ListItem
            key={Math.random()}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#3AB795",
            }}
          >
            <Image
              source={require("../assets/golf-icon.jpg")}
              style={{
                borderRadius: 100,
                width: windowWidth / 10,
                height: windowHeight / 22,
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{l.golfName}</ListItem.Title>
              <ListItem.Subtitle>
                {l.golfAddress.golfCity}, {l.parcours.length} parcours,{" "}
                {l.parcours[0].nbreTrou} trous et {l.parcours[1].nbreTrou} trous
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    );
  });

  var changeColor1 = () => {
    if (bgColorFilter1 == "#b3edbf") {
      setBgColorFilter1("#3AB795");
      setFilter9trous(true);
    } else {
      setBgColorFilter1("#b3edbf");
      setFilter9trous(false);
    }
  };

  var changeColor2 = () => {
    if (bgColorFilter2 == "#b3edbf") {
      setBgColorFilter2("#3AB795");
      setFilter18trous(true);
    } else {
      setBgColorFilter2("#b3edbf");
      setFilter18trous(false);
    }
  };

  var changeColor3 = () => {
    if (bgColorFilter3 == "#b3edbf") {
      setBgColorFilter3("#3AB795");
      setFilterPractice(true);
    } else {
      setFilterPractice(false);
      setBgColorFilter3("#b3edbf");
    }
  };

  var changeColor4 = () => {
    if (bgColorFilter4 == "#b3edbf") {
      setBgColorFilter4("#3AB795");
      setFilterRestauration(true);
    } else {
      setFilterRestauration(false);
      setBgColorFilter4("#b3edbf");
    }
  };

  return (
    <SwipeUpDown
      style={{ backgroundColor: "#A0E8AF" }}
      ref={swipeUpDownRef}
      itemMini={() => (
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Entypo
            name="chevron-thin-up"
            size={24}
            color="white"
            style={{ paddingTop: windowHeight - windowHeight / 1.01 }}
          />
          {inputSearchGolf}
        </View>
      )}
      itemFull={() => (
        <View style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Entypo
              name="chevron-thin-down"
              size={24}
              color="white"
              style={{ paddingTop: windowHeight - windowHeight / 1.01 }}
            />
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            {inputSearchGolf}
          </View>
          <View style={styles.filters}>
            <Badge
              onPress={() => changeColor1()}
              status="success"
              value="9 trous"
              badgeStyle={{
                height: 25,
                width: 80,
                backgroundColor: bgColorFilter1,
              }}
            />
            <Badge
              onPress={() => changeColor2()}
              status="success"
              value="18 trous"
              badgeStyle={{
                height: 25,
                width: 80,
                backgroundColor: bgColorFilter2,
              }}
            />
            <Badge
              onPress={() => changeColor3()}
              status="success"
              value="Practice"
              badgeStyle={{
                height: 25,
                width: 80,
                backgroundColor: bgColorFilter3,
              }}
            />
            <Badge
              onPress={() => changeColor4()}
              status="success"
              value="Restauration"
              badgeStyle={{
                height: 25,
                width: 80,
                backgroundColor: bgColorFilter4,
              }}
            />
          </View>

          <Slider
            value={valueKm}
            onValueChange={setValueKm}
            maximumValue={200}
            minimumValue={0}
            step={20}
            allowTouchTrack
            trackStyle={{ height: 5, backgroundColor: "transparent" }}
            minimumTrackTintColor="#3AB795"
            maximumTrackTintColor="#b3edbf"
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: "transparent",
            }}
            thumbProps={{
              children: (
                <Icon
                  name="circle"
                  type="font-awesome"
                  size={20}
                  reverse
                  containerStyle={{ bottom: 20, right: 20 }}
                  color="#3AB795"
                />
              ),
            }}
          />

          <Text
            style={{
              marginBottom: windowHeight - windowHeight / 1.01,
              color: "white",
            }}
          >
            Distance: {valueKm} km
          </Text>

          <View
            style={{
              marginLeft: windowWidth / 17,
              marginBottom: windowHeight - windowHeight / 1.01,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "white",
              }}
            >
              Favoris
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <ScrollView
              horizontal={true}
              style={{
                width: "90%",
                height: 100,
                backgroundColor: "#b3edbf",
              }}
              contentContainerStyle={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {favoriteGolfs}
            </ScrollView>
          </View>
          <ScrollView style={{ marginTop: 10, marginBottom: 90 }}>
            {golfList}
          </ScrollView>
        </View>
      )}
      extraMarginTop={windowHeight - windowHeight / 1.09}
      disableSwipeIcon={true}
      disablePressToShow={true} // Press item mini to show full
      swipeHeight={160}
      animation="spring"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filters: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
});

function mapStateToProps(state) {
  return { golfInDb: state.golf };
}

function mapDispatchToProps(dispatch) {
  return {
    onPressList: function (golfName) {
      dispatch({ type: "AddGolfName", name: golfName });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeUpDownGolf);
