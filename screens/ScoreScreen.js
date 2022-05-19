import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";

import ScorePageModel from "../components/ScorePageModel"
import ScorePageStart from "../components/ScorePageStart"

export default function ScoreScreen() {
  
  return (
    <View>
      <ScorePageStart/>
      <ScorePageModel/>
    </View>
  );
}
