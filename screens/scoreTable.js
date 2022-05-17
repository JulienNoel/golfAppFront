import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';

export default function ScoreTable() {


  return (

    <ScrollView horizontal={true}>
    <View style={styles.containerTable}>
      <Grid>
        <Col size={50}>
          <Row style={styles.cell}>
            <Text>A</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>B</Text>
          </Row>
                    
        </Col>

        <Col size={50}>
        <Row style={styles.cell}>
            <Text>E</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>F</Text>
          </Row>
          
          
        </Col>

        <Col size={50}>
        <Row style={styles.cell}>
            <Text>1</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>2</Text>
          </Row>
          
        </Col>

        <Col size={50}>
        <Row style={styles.cell}>
            <Text>3</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>4</Text>
          </Row>
          
        </Col>
        <Col size={50}>
        <Row style={styles.cell}>
            <Text>5</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>6</Text>
          </Row>
          
        </Col>

        <Col size={50}>
        <Row style={styles.cell}>
            <Text>7</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>8</Text>
          </Row>
          
        </Col>

        <Col size={50}>
        <Row style={styles.cell}>
            <Text>7</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>8</Text>
          </Row>
          
        </Col>
      </Grid>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerTable: {
    width: 600,
    height: 300,
    padding: 16,
    paddingTop: 100,
    backgroundColor: '#fff',
  },

  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
});