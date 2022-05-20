import { Text } from "react-native-elements";
import { StyleSheet, View, Button} from "react-native";

export default function ScoreNewParty(props) {
  
  return (
    <View>
      <Text style={{marginTop:50}}>New</Text>
      <Button
        title="New"
        onPress={() => props.navigation.navigate('ScorePageScreen') }
      />
    </View>
  );
}
