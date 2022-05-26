import { Text, Badge } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity, Image, ScrollView } from "react-native";
import cartouche from "../components/menuCartouche"
import { BarChart, XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'

export default function StatHomeScreen(props) {
  const data = [
    {
      value: 50,
      svg: {
        fill: "#084C61",
      },
    },
    {
      value: 10,
      svg: {
        fill: "#DB504A",
      },
    },
    {
      value: 40,
      svg: {
        fill: "#E3B505",
      },
    },
    {
      value: 95,
      svg: {
        fill: "#4F6D7A",
      },
    },
    {
      value: 85,
      svg: {
        fill: '#56A3A6',
      },
    },
  ]
  const nomColorTableau = ["#084C61", "#DB504A", "#E3B505", "#4F6D7A", "#56A3A6"]
  const nomScoreTableau = ["Eagle", "Birdie", "Par", "Bodey", "Double"]

  var TableauScoreNom = nomColorTableau.map((element, index) => {
    return (
      <View style={{ flexDirection: 'row', margin: 5, alignItems: "center", justifyContent: "flex-start", width: "40%", marginLeft: 40 }}>
        <Badge badgeStyle={{ backgroundColor: element, height: 20, width: 8, marginRight: 5 }} />
        <Text style={{ fontWeight: "500" }}>{nomScoreTableau[index]}</Text>
      </View>

    )
  })
  return (
    <View style={styles.container}>
      <View style={styles.titreDiv}>
        <TouchableOpacity onPress={() => props.navigation.navigate('StatistiqueHome')}>
          <Image style={{ width: 40, height: 40 }} source={require("../../assets/previous.png")} />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: 'center', marginBottom: 10 }}>Stat User</Text>
      </View>
      {cartouche(props, "Statistique de la partie", require("../../assets/closeBall1.jpeg"), "")}
      <View style={{ alignItems: "center" }}>
        <View style={styles.cartoucheDash}>
          <BarChart
            style={{ height: "100%", width: "50%", marginLeft: 10 }}
            data={data}
            gridMin={0}
            svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            yAccessor={({ item }) => item.value}
            contentInset={{ top: 20, bottom: 20 }}
          >
          </BarChart>

          <View style={{ flexDirection: "column", width: "40%", justifyContent: "center", alignItems: "center" }}>
            {TableauScoreNom}
          </View>



        </View>
        <View style={styles.cartoucheDash}>
          
          <View style={[styles.cercle, {borderColor:'#DB504A', marginTop:30, marginLeft:20}]}>
            <Text style={{textAlign:"center",fontSize:26, fontWeight:"800"}}>2.2</Text>
            <Text style={{textAlign:"center", fontSize:12, marginLeft:5, marginRight:5, marginBottom:10}}>Moy. putts sur total partie</Text>
          </View>
          <View style={[styles.cercle, {borderColor:'#E3B505',width:130,height:130,marginBottom:20,}]}>
            <Text style={{textAlign:"center",fontSize:30, fontWeight:"800"}}>+4.2</Text>
            <Text style={{textAlign:"center", fontSize:13, marginLeft:5,fontWeight:"500", marginRight:5, marginBottom:10}}>Moy. sur total partie</Text>
          </View>
          <View style={[styles.cercle, {borderColor:'#56A3A6',marginTop:30, marginRight:20}]}>
            <Text style={{textAlign:"center",fontSize:26, fontWeight:"800"}}>5.2</Text>
            <Text style={{textAlign:"center", fontSize:12, marginLeft:5, marginRight:5, marginBottom:10}}>Moy. sur total partie</Text>
          </View>
        </View>
        <View style={styles.cartoucheDash}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  cercle:{
    margin:5,
    borderWidth:3,
    borderRadius:200,
    width:100,
    height:100,
    alignItems:"center",
    justifyContent:"center"
  },
  titreDiv: {
    flexDirection: 'column',
    justifyContent: "space-between",
  },
  cartoucheDash: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "center",
    width: '95%',
    height: '26%',
    borderRadius: 5,
    marginTop: 10,
    shadowColor: "#000",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})
