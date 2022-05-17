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
            <Text style={{fontSize: 16 , backgroundColor:"yellow",alignSelf:"flex-end"}}>F<Text style={{fontSize: 10,  backgroundColor:"green"}}>am</Text></Text>
        
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
    marginTop:20,
    width: 400,
    padding:0,
    backgroundColor: '#fff',
  },
  cell: {
    flex:1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding:5,
    justifyContent: 'center',
  },
});