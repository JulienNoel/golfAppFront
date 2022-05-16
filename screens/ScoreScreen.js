import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import { Badge } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ScoreScreen() {

const[countScore, setCountScore] = useState(0);
const[countPutt, setCountPutt] = useState(0);

if (countScore < 0) {
  setCountScore(0)
}

if (countPutt <0) {
  setCountPutt(0)
}

  return (
    
    <View style={styles.main}>          

        <View style={{backgroundColor: 'green'}}>
          <Text>test</Text>
        </View>

        <View style={{flex:1,
                     flexDirection: 'row',
                     alignItems: 'flex-end',
                     justifyContent: 'space-between',
                     width: '90%'
                     }}>
            
            <Badge
              badgeStyle={{ backgroundColor: "#3AB795", height: 20 }}
              textStyle={{ fontWeight: "bold" }}
              value="Note Privée"
              onPress={() => console.log("hello")}
            />
            <Badge
              badgeStyle={{ backgroundColor: "#3AB795", height: 20 }}
              textStyle={{ fontWeight: "bold" }}
              value="Note Publique"
              onPress={() => console.log("hello")}
            />
            
            <Badge
              badgeStyle={{ backgroundColor: "#f1c40f", height: 20 }}
              textStyle={{ fontWeight: "bold" }}
              value="Creer une note"
              onPress={() => console.log("hello")}
            />            
          
          </View>


          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
              <Text style={{fontWeight: 'bold'}}>SCORE</Text>
            </View>     

            <View style={styles.score}>
                <Icon
                  raised
                  name="minus-circle"
                  size={50}
                  type="font-awesome"
                  color="#3AB795"
                  onPress={() => setCountScore(countScore-1)}
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
                  onPress={() => setCountScore(countScore+1)}
                />
              </View>

              <View>
              <Text style={{fontWeight: 'bold'}}>PUTTS</Text>
            </View>     

            <View style={styles.score}>
                <Icon
                  raised
                  name="minus-circle"
                  size={50}
                  type="font-awesome"
                  color="#3AB795"
                  onPress={() => setCountPutt(countPutt-1)}
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
                  onPress={() => setCountPutt(countPutt+1)}
                />
              </View>

          </View>
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },

  note: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",    
    backgroundColor: 'red'
    },

  score: {    
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    
  },
  
  middleScore: {
      
      width: '50%',
      height: 40,
      borderWidth: 1,
      borderRadius: 20,
      margin: 20,
      alignItems: "center",
      justifyContent: "center",
      borderColor: '#86BAA1',
      
  }
});
