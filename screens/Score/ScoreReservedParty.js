import { Text } from "react-native-elements";
import { StyleSheet, View, Button} from "react-native";

export default function ScoreNewParty(props) {
  return (
    <View>
      <Text style={{marginTop:50}}>reserved</Text>
      <Button
        title="reserved"
        onPress={() => props.navigation.navigate('ScorePageScreen') }
      />
    </View>
  );
}
