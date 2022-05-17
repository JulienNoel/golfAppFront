import {
    Input,
    Badge,
    Text,
    ListItem,
    Avatar,
  } from "react-native-elements";
  import React, { useState, useRef } from "react";
  import { StyleSheet, View, ScrollView, Button } from "react-native";
  import SwipeUpDown from 'react-native-swipe-up-down';

  
  import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
    const swipeUpDownRef = useRef();
    const [research, setResearch] = useState("");

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
          name: "Mon golf de beau gosse",
          distance: 78,
          address: "Dans les nuages",
        },
        {
          name: "Le golf des plus beaux",
          distance: 7,
          address: "Sous terre",
        },
        {
          name: "What the Golf ?",
          distance: 780,
          address: "On dirait le sud",
        },
        {
          name: "On a highway to golf",
          distance: 68,
          address: "Sur une scène de concert",
        }
      ];

      let favoriteGolfsTime = [
        {time: 36},
        {time: 46},
        {time: 66}
      ]

      var favoriteGolfs = favoriteGolfsTime.map((l,i) => {
        return (
          <View>
            <Avatar key = {i} source={require("../assets/golf-icon.jpg")} />
            <Text>{l.time} min</Text>
          </View>
        )
      })

      var inputSearchGolf = (
        <Input
          containerStyle={{ marginTop: 30, marginBottom: 5, width: "70%" }}
          inputStyle={{ marginLeft: 10 }}
          placeholder="Recherche de golf"
          leftIcon={<Icon name="search" size={24} color="#3AB795" />}
          onChangeText={(val) => setResearch(val)}
        />
      );
    
      var golfList = listGolf.map((l, i) => {
        return (
          <ListItem key={i}>
            <Avatar source={require("../assets/golf-icon.jpg")} />
            <ListItem.Content>
              <ListItem.Title>{l.name} <Button
          // onPress={'Plop'}
          title="+"
          color="#3AB795"
          /></ListItem.Title>
              <ListItem.Subtitle>
                {l.distance} km - {l.address}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      });

return (
        <View style={styles.container}>
            <SwipeUpDown
                ref={swipeUpDownRef}
                itemMini={(show) => (
                    <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <Text onPress={show} style={{ fontWeight: 'bold', color: "#3AB795", fontSize: 20 }}>Voir la liste des golfs</Text>
                    </View>
                )}
                itemFull={(close) => (
                    <View style={styles.container}>
                      <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <Text onPress={close} style={{ fontWeight: 'bold', color: "#3AB795", fontSize: 20 }}>Voir la liste des golfs</Text>
                    </View>
            <View style={{display: 'flex', alignItems: 'center'}}>
            {inputSearchGolf}
            </View>
            <View style={styles.filters}>
                <Badge status="success" value='filter 1'/>
                <Badge status="success" value='filter 2'/>
                <Badge status="success" value='filter 3'/>
            </View>
            <View style ={{marginTop: 25}}>
              <Text style ={{fontSize: 20}}>Favoris</Text>
            </View>
            <View style={styles.favoriteGolfs}>
              {favoriteGolfs}
            </View>
            <ScrollView style ={{flex: 1, marginTop: 50}}>
            {golfList}
            </ScrollView>
        </View>
                )}
                extraMarginTop={10}
                disableSwipeIcon
                disablePressToShow={true} // Press item mini to show full
                style={{ backgroundColor: "white" }} // style for swipe
                swipeHeight={80}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    filters: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    favoriteGolfs: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }
});
