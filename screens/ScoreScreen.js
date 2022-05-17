import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import ScoreTab from "./ScoreTab"
import SwipeUpDown from "react-native-swipe-up-down";

import { Badge, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  const swipeUpDownRef = useRef();
  const [countScore, setCountScore] = useState(0);
  const [countPutt, setCountPutt] = useState(0);

  if (countScore < 0) {
    setCountScore(0);
  }

  if (countPutt < 0) {
    setCountPutt(0);
  }

  if (countScore == countPutt && countScore != 0) {
    setCountScore(countScore + 1);
  }

  const majScorePlus = () => {
    setCountScore(countScore + 1);
    setCountPutt(countPutt + 1);
  };

  const majScoreMoins = () => {
      if (countPutt > 0)
    setCountScore(countScore - 1);
    setCountPutt(countPutt - 1);
  };

  const resetScore = () => {
    setCountScore(0);
    setCountPutt(0);
  };

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  


  return (
    <ImageBackground source={require("../assets/map.png")} style={styles.div}>
      <View style={styles.infoCard}>
        <View style={{ margin: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
            Nom du parcours
          </Text>
          <Text>Par 72 - 7342 m</Text>
        </View>
        <View style={{ margin: 20, alignItems: "flex-end" }}>
          <Badge
            badgeStyle={{ backgroundColor: "#3AB795", height: 20 }}
            textStyle={{ fontWeight: "bold" }}
            value="Par 4"
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            Trou 1
          </Text>
          <Text>320 m</Text>
        </View>
      </View>
      <View style={styles.navigationIcon}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/previous.png")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/next.png")}
        />
      </View>
      <View style={styles.badgeIcon}>
        <Badge
          badgeStyle={{
            backgroundColor: "#3AB795",
            height: 20,
            marginEnd: 20,
            marginBottom: 5,
          }}
          textStyle={{ fontWeight: "bold" }}
          value="avg score : 4,3"
        />
        <Badge
          badgeStyle={{ backgroundColor: "#3AB795", height: 20, marginEnd: 20 }}
          textStyle={{ fontWeight: "bold" }}
          value="avg score : 4,3"
        />
      </View>
      <SwipeUpDown
        ref={swipeUpDownRef}
        itemMini={(show) => (
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              onPress={show}
              style={{ fontWeight: "bold", color: "#3AB795", fontSize: 20 }}
            >
              Score
            </Text>
          </View>
        )}
        itemFull={(close) => (
          <ScrollView>
            {/** To use scrollview please add TouchableWithoutFeedback */}
            <TouchableWithoutFeedback>
              <View>
                <TouchableOpacity onPress={close}>
                  <View style={{ alignItems: "center", height: 40}}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#3AB795",
                        fontSize: 20,
                        margin:10
                      }}
                    >
                      Score
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.main}>
                
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overLayStyle={styles.overlay}>
                    <Text>Hello from Overlay!</Text>
                </Overlay>

                    <ScoreTab/>
                  <View style={{ flex: 1, marginTop: 10, flexDirection: "row"}}>
                    <Badge
                      badgeStyle={{
                        backgroundColor: "#3AB795",
                        height: 20,
                        margin: 5,
                      }}
                      textStyle={{ fontWeight: "bold" }}
                      value="0 note Privée"
                      onPress={toggleOverlay}
                    />
                    <Badge
                      badgeStyle={{
                        backgroundColor: "#3AB795",
                        height: 20,
                        margin: 5,
                      }}
                      textStyle={{ fontWeight: "bold" }}
                      value="13 notes Publique"
                      onPress={() => console.log("hello")}
                    />
                  </View>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Badge
                      badgeStyle={{
                        backgroundColor: "#f1c40f",
                        height: 20,
                        margin: 5,
                      }}
                      textStyle={{ fontWeight: "bold" }}
                      value="Créer une note"
                      onPress={() => console.log("hello")}
                    />
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ flex: 1, alignItems: "center", marginTop: 20 }}
                    >
                      <Text style={{ fontWeight: "bold" }}>SCORE</Text>
                      <View style={styles.score}>
                        <Icon
                          raised
                          name="minus-circle"
                          size={50}
                          type="font-awesome"
                          color="#3AB795"
                          onPress={() => setCountScore(countScore - 1)}
                        />
                        <View style={styles.middleScore}>
                          <Text>{countScore}</Text>
                        </View>
                        <Icon
                          raised
                          name="plus-circle"
                          size={50}
                          type="font-awesome"
                          color="#3AB795"
                          onPress={() => setCountScore(countScore + 1)}
                        />
                      </View>
                    </View>

                    <View
                      style={{ flex: 1, alignItems: "center", marginTop: 20 }}
                    >
                      <Text style={{ fontWeight: "bold" }}>PUTTS</Text>
                      <View style={styles.score}>
                        <Icon
                          raised
                          name="minus-circle"
                          size={50}
                          type="font-awesome"
                          color="#3AB795"
                          onPress={majScoreMoins}
                        />
                        <View style={styles.middleScore}>
                          <Text>{countPutt}</Text>
                        </View>
                        <Icon
                          raised
                          name="plus-circle"
                          size={50}
                          type="font-awesome"
                          color="#3AB795"
                          onPress={majScorePlus}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.navigationIcon}>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={require("../assets/previous.png")}
                    />
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Trou n°1
                    </Text>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={require("../assets/next.png")}
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        )}
        onShowMini={() => console.log("mini")}
        onShowFull={() => console.log("full")}
        extraMarginTop={90}
        disableSwipeIcon
        disablePressToShow={true} // Press item mini to show full
        style={{ backgroundColor: "white" }} // style for swipe
        swipeHeight={80}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    justifyContent: "space-between",
  },
  infoCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  navigationIcon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badgeIcon: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: "20%",
  },
  main: {
    flex: 1,
    justifyContent: "space-between",
  },
  note: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "red",
  },
  score: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  middleScore: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#86BAA1",
  },
  overlay: {
      width: '50%',
      height: '50%',
  }
});
