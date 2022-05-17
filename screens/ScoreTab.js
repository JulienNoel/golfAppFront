import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Badge } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';

export default function ScoreTable() {


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
          <Row style={styles.SecondCell}>
            <Badge badgeStyle={{ backgroundColor: "#FF5E57", height: 20, width: 8, marginRight: 5 }} />
            <Text style={styles.NameCell}>Edouard</Text>
          </Row>
          <Row style={styles.SecondCell}>
            <Badge badgeStyle={{ backgroundColor: "#DDA0DD", height: 20, width: 8, marginRight: 5 }} />
            <Text style={styles.NameCell}>Cyprien</Text>
          </Row>
        </Col>
        <ScrollView horizontal={true}>
            <Col style={{ width: 50 }}>
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

            <Col style={{ width: 50 }}>
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
            <Col style={{ width: 50 }}>
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
            <Col style={{ width: 50 }}>
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
            <Col style={{ width: 50 }}>
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
            <Col style={{ width: 50 }}>
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
            <Col style={{ width: 50 }}>
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
            <Col style={{ width: 50 }}>
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
            <Col style={{ width: 50 }}>
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

        </ScrollView>

        <Col style={{ width: 90 }}>
          <Row style={styles.FirstCell}>
            <Text style={styles.black}>Total</Text>
            <Text style={styles.grey}>76</Text>
          </Row>
          <Row style={styles.SecondCell}>
            <Text style={styles.NameCell}>4</Text>
          </Row>
          <Row style={styles.SecondCell}>
            <Text style={styles.NameCell}>5</Text>
          </Row>
          <Row style={styles.SecondCell}>
            <Text style={styles.NameCell}>2</Text>
          </Row>
        </Col>

      </Grid>

    </View>

  );
}

const styles = StyleSheet.create({
  containerTable: {
    marginTop: 5,

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
    justifyContent: 'flex-start',
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
  SubCell: {
    fontSize: 12,
    width: 25,
    textAlign: 'right',
    position: "absolute",
    top: 13,
    left: 13,
  }
});