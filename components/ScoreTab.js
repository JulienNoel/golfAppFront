import React, {useEffect,useState} from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Badge } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView as ScrollViewGH} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

export default function ScoreTable() {
  var nombreTrou = 18;
  var nombreJoueur = 1;
  var tableauColor = ["#f1c40f", "#FF5E57", "#DDA0DD", "#9f957d"]

  var ParcoursData = generateParcours(nombreTrou).map((element, index) => {
    return (
      <TouchableWithoutFeedback key={index}>
        <Col style={{ width: 50 }}>
          <Row style={styles.cell}>
            <Text style={styles.black}>{element.hole}</Text>
            <Text style={styles.grey}>{element.par}</Text>
          </Row>
        </Col>
      </TouchableWithoutFeedback>
    )
  })

      var ScoreTab = generateScore(nombreTrou).map((element, index) => {
        return (
          <TouchableWithoutFeedback key={index}>
            <Col style={{ width: 50 }}>
              <Row style={styles.cellResult}>
                <Text style={styles.black}>{element.score}</Text>
                <Text style={styles.SubCell}>{element.putts}</Text>
              </Row>
            </Col>
          </TouchableWithoutFeedback>
        )})


  return (

    <View style={styles.containerTable}>
      <Grid>
        <Col style={{ width: 90 }}>
          <Row style={styles.FirstCell}>
            <Text style={styles.black}>Hole</Text>
            <Text style={styles.grey}>Par</Text>
          </Row>
          <Row style={styles.SecondCell}>
            <Badge badgeStyle={{ backgroundColor: "#f1c40f", height: 20, width: 8, marginRight: 5 }} />
            <Text style={styles.NameCell}>Alexis</Text>
          </Row>
        </Col>

        <ScrollViewGH horizontal={true}>
          <Col>
            <Row>{ParcoursData}</Row>
            <Row>{ScoreTab}</Row>
          </Col>
        </ScrollViewGH>

        <Col style={{ width: 60 }}>
          <Row style={styles.FirstCellLast}>
            <Text style={styles.black}>Total</Text>
            <Text style={styles.grey}>76</Text>
          </Row>
          <Row style={styles.SecondCellLast}>
            <Text style={styles.ScoreCell}>4</Text>
          </Row>

        </Col>
      </Grid>
    </View>

  );
}
function generateParcours(LongueurTrou) {
  var tableauScore = []
  for (var i = 1; i <= LongueurTrou; i++) {
    var score = {};
    score.hole = i;
    score.par = Math.floor(Math.random() * (0 + 7));
    tableauScore.push(score)
  }
  return tableauScore
}

function generateScore(LongueurTrou) {
  var tableauScore = []
  for (var i = 1; i <= LongueurTrou; i++) {
    var score = {};
    score.score = Math.floor(Math.random() * (0 + 7));
    score.putts = Math.floor(Math.random() * (1 + 7));
    tableauScore.push(score)
  }
  return tableauScore
}

const styles = StyleSheet.create({
  containerTable: {
    marginTop: 5,
    height: 220,
  },
  FirstCell: {
    flex: 1,
    height: "20%",
    flexDirection: "column",
    justifyContent: "center",
    borderRightWidth: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
  },
  FirstCellLast: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    height: "20%",
    borderWidth: 1,
    borderLeftWidth: 5,
    borderColor: '#ddd',
    padding: 5,
    alignItems: 'flex-end',
  },
  SecondCell: {
    flex: 1,
    borderWidth: 1,
    height: "20%",
    borderRightWidth: 5,
    alignItems: "center",
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'flex-start',
  },
  SecondCellLast: {
    flex: 1,
    borderWidth: 1,
    height: "20%",
    borderLeftWidth: 5,
    alignItems: "center",
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'flex-end',
  },
  cell: {
    flex: 1,
    height: "20%",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'center',
  },
  cellResult: {
    flex: 1,
    height: "20%",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'center',
  },
  black: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  grey: {
    fontSize: 14,
    color: "grey",
    fontWeight: "400",
  },
  NameCell: {
    fontSize: 16,
    color: "black",
    fontWeight: "400",
  },
  ScoreCell: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  SubCell: {
    fontSize: 12,
    width: 25,
    textAlign: 'right',
    position: "relative",
    top: -5,
    left: 5,
  }
});