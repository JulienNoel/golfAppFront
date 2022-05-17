import {
    Input,
    Badge,
    Text,
    ListItem,
  } from "react-native-elements";
  import React, { useState, useRef } from "react";
  import { StyleSheet, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Image} from "react-native";
  import SwipeUpDown from 'react-native-swipe-up-down';
  import { AntDesign } from "@expo/vector-icons";

  
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
        {time: 66},
        {time: 36},
        {time: 46},
        {time: 66},
        {time: 36},
        {time: 46},
        {time: 66}
      ]

      var favoriteGolfs = favoriteGolfsTime.map((l,i) => {
        return (
            <TouchableWithoutFeedback>
              <View>
                <Image source={require("../assets/golf-icon.jpg")} style={{borderRadius: 100, width: '120%', height: '26%'}} />
                <Text>{l.time} min</Text>
              </View>
            </TouchableWithoutFeedback>
        )
      })

      var inputSearchGolf = (
        <Input
          containerStyle={{ marginTop: 30, width: "90%", backgroundColor: "white", borderRadius: 10, height: 50}}
          inputContainerStyle={{borderBottomWidth: 0}}
          inputStyle={{ marginLeft: 10 }}
          placeholder="Recherche de golf"
          leftIcon={<Icon name="search" size={24} color="#3AB795" />}
          onChangeText={(val) => setResearch(val)}
        />
      );
    
      var golfList = listGolf.map((l, i) => {
        return (
          <TouchableWithoutFeedback>
            <TouchableOpacity>
          <ListItem key={i}>
            <Image source={require("../assets/golf-icon.jpg")} style={{borderRadius: 100, width: '10%', height: '90%'}} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>
                {l.distance} km - {l.address}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          </TouchableOpacity>
          </TouchableWithoutFeedback>
        );
      });

return (
        <View style={styles.container}>
            <SwipeUpDown style={{marginVertical: 0}}
                ref={swipeUpDownRef}
                itemMini={(show) => (
                    <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <AntDesign name='minus' size={24} color='grey' />
                        {/* <Text onPress={show} style={{ fontWeight: 'bold', color: "#3AB795", fontSize: 20 }}>-----</Text> */}
                        {inputSearchGolf}
                    </View>
                )}
                itemFull={(close) => (
                    <View style={styles.container}>
                      <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <Text onPress={close} style={{ fontWeight: 'bold', color: "#3AB795", fontSize: 20 }}>-----</Text>
                    </View>
            <View style={{display: 'flex', alignItems: 'center'}}>
            {inputSearchGolf}
            </View>
            <View style={styles.filters}>
                <Badge status="success" value='filter 1' badgeStyle={{height: 25, width: 50, backgroundColor: '#3AB795'}}/>
                <Badge status="success" value='filter 2' badgeStyle={{height: 25, width: 50, backgroundColor: '#3AB795'}}/>
                <Badge status="success" value='filter 3' badgeStyle={{height: 25, width: 50, backgroundColor: '#3AB795'}}/>
            </View>
            <View style ={{backgroundColor: 'red'}}>
              <Text style ={{fontSize: 20}}>Favoris</Text>
            </View>
            <View style = {{flex: 1, alignItems: 'center' }}>
            <ScrollView horizontal={true} style={{ width: '90%',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'grey',
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'white'}}>
              {favoriteGolfs}
              </ScrollView>
            </View>
            <ScrollView style ={{marginTop: 10, marginBottom: 90}}>
            {golfList}
            </ScrollView>
        </View>
                )}
                extraMarginTop={50}
                disableSwipeIcon={true}
                disablePressToShow={true} // Press item mini to show full
                style={{ backgroundColor: "#A0E8AF" }} // style for swipe
                swipeHeight={160}
                animation="spring"
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
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10
    },
    // favoriteGolfs: {
    //   width: '90%',
    //   alignItems: 'center',
    //   borderWidth: 1,
    //   borderColor: 'grey',
    //   flexDirection: 'row',
    //   justifyContent: 'space-around',
    //   backgroundColor: 'white',
    // }
});
