import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Badge } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';

export default function ScoreTable() {


  return (

    <ScrollView horizontal={true}>
      <View style={styles.containerTable}>
        <Grid>
          <Col style={{width:90}}>
            <Row style={styles.FirstCell}>
              <Text style={styles.black}>Hole</Text>
              <Text style={styles.grey}>Par</Text>
            </Row>
            <Row style={styles.SecondCell}>
              <Badge badgeStyle={{ backgroundColor: "#f1c40f", height: 20, width: 8, marginRight: 5 }} />
              <Text style={styles.NameCell}>Alexis</Text>
            </Row>
            <Row style={styles.SecondCell}>
              <Badge badgeStyle={{ backgroundColor: "#FF5E57", height: 20, width: 8, marginRight: 5 }} />
              <Text style={styles.NameCell}>Edouard</Text>
            </Row>
            <Row style={styles.SecondCell}>
              <Badge badgeStyle={{ backgroundColor: "#DDA0DD", height: 20, width: 8, marginRight: 5 }} />
              <Text style={styles.NameCell}>Cyprien</Text>
            </Row>
          </Col>

          <Col style={{width:50}}>
            <Row style={styles.cell}>
              <Text style={styles.black}>1</Text>
              <Text style={styles.grey}>3</Text>
            </Row>

            <Row style={styles.cellResult}>
              <Text style={styles.black}>3</Text>
              <Text style={styles.SubCell}>2</Text>
            </Row>

            <Row style={styles.cellResult}>
              <Text style={styles.black}>2</Text>
              <Text style={styles.SubCell}>1</Text>
            </Row>

            <Row style={styles.cellResult}>
              <Text style={styles.black}>4</Text>
              <Text style={styles.SubCell}>2</Text>
            </Row>
          </Col>

          <Col style={{width:50}}>
            <Row style={styles.cell}>
              <Text style={styles.black}>2</Text>
              <Text style={styles.grey}>4</Text>
            </Row>

            <Row style={styles.cellResult}>
              <Text style={styles.black}>3</Text>
              <Text style={styles.SubCell}>3</Text>
            </Row>

            <Row style={styles.cellResult}>
              <Text style={styles.black}>2</Text>
              <Text style={styles.SubCell}>1</Text>
            </Row>

            <Row style={styles.cellResult}>
              <Text style={styles.black}>4</Text>
              <Text style={styles.SubCell}>2</Text>
            </Row>
          </Col>

        </Grid>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerTable: {
    marginTop: 20,
    padding: 0,
    backgroundColor: '#fff',
  },
  FirstCell: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'center',
  },
  SecondCell: {
    flex: 1,
    borderWidth: 1,
    alignItems: "center",
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'felx-start',
  },
  cell: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'center',
  },
  cellResult: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'center',
  },
  black: {
    fontSize:16,
    color: "black",
    fontWeight: "bold",
  },
  grey: {
    fontSize:14,
    color: "grey",
    fontWeight: "semi-bold",
  },
  NameCell: {
    fontSize:16,
    color: "black",
    fontWeight: "semi-bold",
  }, 
  SubCell : {
    fontSize:12,
    width:25,
    textAlign:'right',
    position:"absolute",
    top:13,
    left:13,
  }
});