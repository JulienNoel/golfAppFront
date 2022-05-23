import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  Switch,
} from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView as ScrollViewGH } from 'react-native-gesture-handler';
import SwipeUpDown from "react-native-swipe-up-down";
import { Badge, Overlay, Button } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome";

export default function ScorePageModel() {

  const swipeUpDownRef = useRef();
  const [countScore, setCountScore] = useState(0);
  const [countPutt, setCountPutt] = useState(0);
  const [note, onChangeNote] = useState("");
  const [numeroPage, setNumeroPage] = useState(0);
  const [tableauScore, setTableauScore] = useState(generateParcours(18));
  const [page, setPage] = useState(tableauScore[0]);
  const [score, setScore] = useState(generateScore(18, 4));
  const [scoreParcours, setScoreParcours] = useState({ scoreTotal: score.map(item => item.score).reduce((prev, curr) => prev + curr, 0), scorePar: tableauScore.map(item => item.par).reduce((prev, curr) => prev + curr, 0) })

  useEffect(() => {
    function page() {
      setPage(tableauScore[numeroPage])
    }
    page()
  }, [numeroPage]);


  function minus() {
    if (numeroPage > 0) {
      score[0].result[numeroPage].score = countScore;
      score[0].result[numeroPage].putts = countPutt;
      setCountScore(score[0].result[numeroPage - 1].score);
      setCountPutt(score[0].result[numeroPage - 1].putts);
      setNumeroPage(numeroPage - 1)
    }
  }
  const [finishPatyVisible, setfinishPatyVisible] = useState(false);
  function next() {
    if (numeroPage < 17) {
      score[0].result[numeroPage].score = countScore;
      score[0].result[numeroPage].putts = countPutt;
      setCountScore(score[0].result[numeroPage + 1].score);
      setCountPutt(score[0].result[numeroPage + 1].putts);
      setNumeroPage(numeroPage + 1)
    }
    if (numeroPage === 17) {
      setfinishPatyVisible(!finishPatyVisible);
    }
  }

  //Comptage score
  var majScoreMoins = (typeJeux) => {
    if (typeJeux === "putts") {
      if (countPutt > 0 && countScore >= countPutt) {
        setCountScore(countScore - 1);
        setCountPutt(countPutt - 1);
        score[0].result[numeroPage].score = countScore - 1;
        score[0].result[numeroPage].putts = countPutt - 1;
      }
    }
    else if (typeJeux === "score") {
      if (countScore > 0 && countScore === countPutt) {
        setCountScore(countScore - 1);
        setCountPutt(countPutt - 1);
        score[0].result[numeroPage].score = countScore - 1;
        score[0].result[numeroPage].putts = countPutt - 1;
      } else if (countScore > 0) {
        setCountScore(countScore - 1);
        score[0].result[numeroPage].score = countScore - 1;
      }
    }
    setScoreParcours({ scoreTotal: score.map(item => item.score).reduce((prev, curr) => prev + curr, 0), scorePar: tableauScore.map(item => item.par).reduce((prev, curr) => prev + curr, 0) })
  };

  var majScorePlus = (typeJeux) => {
    if (typeJeux === "putts") {
      setCountScore(countScore + 1);
      setCountPutt(countPutt + 1);
      score[0].result[numeroPage].score = countScore + 1;
      score[0].result[numeroPage].putts = countPutt + 1;
    } else if (typeJeux === "score") {
      setCountScore(countScore + 1);
      score[0].result[numeroPage].score = countScore + 1;
    }
    setScoreParcours({ scoreTotal: score.map(item => item.score).reduce((prev, curr) => prev + curr, 0), scorePar: tableauScore.map(item => item.par).reduce((prev, curr) => prev + curr, 0) })
  };
  //

  const [visible, setVisible] = useState(false); //state overlay


  const toggleOverlay = () => {
    setVisible(!visible);

  };

  const [isEnabled, setIsEnabled] = useState(false); //state switch
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  var notePP = null

  if (isEnabled) {
    notePP = <View style={{ justifyContent: "center", flexDirection: "row", alignItems: "center" }}><Switch
      trackColor={{ false: "#767577", true: "#767577" }}
      thumbColor={isEnabled ? "#f5dd4b" : "#f5dd4b"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    /><Text style={{ margin: 5 }}>Privée</Text></View>

  } else {
    notePP = <View style={{ justifyContent: "center", flexDirection: "row", alignItems: "center" }}><Switch
      trackColor={{ false: "#767577", true: "#767577" }}
      thumbColor={isEnabled ? "#f5dd4b" : "#f5dd4b"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    /><Text style={{ margin: 5 }}>Publique</Text></View>
  }

  return (
    <ImageBackground source={require("../../assets/map.png")} style={styles.div}>
      <View style={styles.infoCard}>
        <View style={{ margin: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
            Nom du parcours
          </Text>
          <Text>Par 72 - 7342 m</Text>
        </View>
        <View style={{ margin: 20, alignItems: "flex-end" }}>
          <Badge
            badgeStyle={{ backgroundColor: "#3AB795", height: 20 }}
            textStyle={{ fontWeight: "bold" }}
            value={"Par " + page.par}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            Trou {page.hole}
          </Text>
          <Text>{page.distance} m</Text>
        </View>
      </View>
      <View style={styles.navigationIcon}>
        <TouchableOpacity onPress={() => minus()}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/previous.png")}
          /></TouchableOpacity>
        <TouchableOpacity onPress={() => next()}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/next.png")}
          /></TouchableOpacity>
      </View>
      <View style={styles.badgeIcon}>
        <Badge
          badgeStyle={{
            backgroundColor: "#3AB795",
            height: 20,
            marginEnd: 20,
            marginBottom: 5,
          }}
          textStyle={{ fontWeight: "bold" }}
          value="avg score : 4,3"
        />
        <Badge
          badgeStyle={{ backgroundColor: "#3AB795", height: 20, marginEnd: 20 }}
          textStyle={{ fontWeight: "bold" }}
          value="avg score : 4,3"
        />
      </View>
      <SwipeUpDown
        ref={swipeUpDownRef}
        itemMini={(show) => (
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              onPress={show}
              style={{ fontWeight: "bold", color: "#3AB795", fontSize: 20 }}
            >Score</Text>

          </View>
        )}
        itemFull={(close) => (
          <ScrollView>
            {/** To use scrollview please add TouchableWithoutFeedback */}
            <TouchableWithoutFeedback>
              <View>
                <TouchableOpacity onPress={close}>
                  <View style={{ alignItems: "center", height: 40 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#3AB795",
                        fontSize: 20,
                        margin: 10
                      }}
                    >
                      Score
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.main}>

                  <Overlay isVisible={finishPatyVisible} onBackdropPress={next} overlayStyle={styles.overlayScore}>
                    <View style={{ flex: 1, justifyContent: 'space-between', width: "80%", flexDirection: "columns" }}>
                      <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10, textAlign: "center" }}>Récapitulatif de la partie :</Text>
                      </View>
                      <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 35, textAlign: "center" }}>{scoreParcours.scoreTotal}</Text>
                        <Badge
                          badgeStyle={{
                            backgroundColor: "#3AB795",
                            height: 20,
                          }}
                          textStyle={{ fontWeight: "bold", fontSize: 12 }}
                          value={"+ " + scoreParcours.scorePar + " points"}
                        />
                      </View>
                      <Button title="Valider la partie"
                        onPress={next}
                        buttonStyle={{ backgroundColor: '#3AB795' }}
                      />
                    </View>
                  </Overlay>


                  <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay}>
                    <View style={{ flex: 1, justifyContent: 'space-between', width: "80%", flexDirection: "columns" }}>
                      <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>Nouvelle note</Text>
                      </View>

                      <TextInput onChangeText={onChangeNote}
                        value={note}
                        multiline={true}
                        placeholder="Titre"
                        style={styles.inputTitreOverlay}
                      />
                      <TextInput onChangeText={onChangeNote}
                        value={note}
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Note"
                        style={styles.inputTextOverlay}
                      />
                      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        {notePP}
                        <Button title="Valider"
                          onPress={toggleOverlay}
                          buttonStyle={{ backgroundColor: '#3AB795' }}
                        />
                      </View>
                    </View>
                  </Overlay>
                  {ScoreTable(score, scoreParcours.scoreTotal, scoreParcours.scorePar)}
                  <View style={{ flex: 1, marginTop: 10, flexDirection: "row" }}>
                    <Badge
                      badgeStyle={{
                        backgroundColor: "#3AB795",
                        height: 20,
                        margin: 5,
                      }}
                      textStyle={{ fontWeight: "bold" }}
                      value="0 note Privée"
                      onPress={() => console.log('note publique')}
                    />
                    <Badge
                      badgeStyle={{
                        backgroundColor: "#3AB795",
                        height: 20,
                        margin: 5,
                      }}
                      textStyle={{ fontWeight: "bold" }}
                      value="13 notes Publique"
                      onPress={() => console.log('note privée')}
                    />
                  </View>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Badge
                      badgeStyle={{
                        backgroundColor: "#f1c40f",
                        height: 20,
                        margin: 5,
                      }}
                      textStyle={{ fontWeight: "bold" }}
                      value="Créer une note"
                      onPress={toggleOverlay}
                    />
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ flex: 1, alignItems: "center", marginTop: 20 }}
                    >
                      <Text style={{ fontWeight: "bold" }}>SCORE</Text>
                      <View style={styles.score}>
                        <Icon
                          raised
                          name="minus-circle"
                          size={50}
                          type="font-awesome"
                          color="#3AB795"
                          onPress={() => { majScoreMoins("score") }}
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
                          onPress={() => { majScorePlus("score") }}
                        />
                      </View>
                    </View>

                    <View
                      style={{ flex: 1, alignItems: "center", marginTop: 20 }}
                    >
                      <Text style={{ fontWeight: "bold" }}>PUTTS</Text>
                      <View style={styles.score}>
                        <Icon
                          raised
                          name="minus-circle"
                          size={50}
                          type="font-awesome"
                          color="#3AB795"
                          onPress={() => { majScoreMoins("putts") }}
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
                          onPress={() => { majScorePlus("putts") }}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.navigationIcon}>
                    <TouchableOpacity onPress={() => minus()}>
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("../../assets/previous.png")}
                      /></TouchableOpacity>

                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Trou n° {page.hole}
                    </Text>
                    <TouchableOpacity onPress={() => next()}>
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("../../assets/next.png")}
                      /></TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        )}
        onShowMini={() => console.log("mini")}
        onShowFull={() => console.log("full")}
        extraMarginTop={90}
        disableSwipeIcon
        disablePressToShow={true} // Press item mini to show full
        style={{ backgroundColor: "white" }} // style for swipe
        swipeHeight={80}
      />
    </ImageBackground>
  );
}


function generateParcours(LongueurTrou) {
  var tableauScore = []
  for (var i = 1; i <= LongueurTrou; i++) {
    var score = {};
    score.hole = i;
    score.par = Math.floor(Math.random() * (0 + 7));
    score.distance = Math.floor(Math.random() * (0 + 200));
    score.img = "../../assets/MapType.png"
    tableauScore.push(score)
  }

  return tableauScore
}

function generateScore(LongueurTrou, nombreJoueur) {
  var tableauScoreJoueur = []
  for (var j = 1; j <= nombreJoueur; j++) {
    var ObjectScore = {}
    ObjectScore.name = "Julien" + j
    var tableauScore = []
    for (var i = 1; i <= LongueurTrou; i++) {
      var score = {};
      score.score = 0;
      score.putts = 0;
      tableauScore.push(score)
    }
    ObjectScore.result = tableauScore
    tableauScoreJoueur.push(ObjectScore)
  }
  return tableauScoreJoueur
}

function ScoreTable(tableauScore, scoreTotal, scorePar) {
  var nombreTrou = 18;
  var tableauColor = ["#f1c40f", "#FF5E57", "#DDA0DD", "#9f957d"]
  var score = []
  var totalScore=[12,23,35]

  for (const element of tableauScore) {
    var ScoreTab = element.result.map((element, index) => {
      return (
        <TouchableWithoutFeedback key={index}>
          <Col style={{ width: 50 }}>
            <Row style={styles.cellResult}>
              <Text style={styles.black}>{element.score}</Text>
              <Text style={styles.SubCell}>{element.putts}</Text>
            </Row>
          </Col>
        </TouchableWithoutFeedback>
      )
    })
    score.push(ScoreTab)
  }

  var NameTab = tableauScore.map((element, index) => {
    var css = { backgroundColor: tableauColor[index], height: 20, width: 8, marginRight: 5 }
    return (
      <Row style={styles.SecondCell}>
        <Badge badgeStyle={css} />
        <Text style={styles.NameCell}>{element.name}</Text>
      </Row>
    )
  })

  var ParcoursData = generateParcours(18).map((element, index) => {
    console.log(element.score)
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

  var total = totalScore.map((element, index) => {
    return (
        <Row style={styles.SecondCellLast}>
          <Text style={styles.ScoreCell}>{element}</Text>
        </Row>
    )
  })

  
  return (
    <View style={styles.containerTable}>
      <Grid>
        <Col style={{ width: 90 }}>
          <Row style={styles.FirstCell}>
            <Text style={styles.black}>Hole</Text>
            <Text style={styles.grey}>Par</Text>
          </Row>
          {NameTab}
        </Col>

        <ScrollViewGH horizontal={true}>
          <Col>
            <Row>{ParcoursData}</Row>
            {score.map((element, index) => { return (<Row>{element}</Row>) })}
          </Col>
        </ScrollViewGH>
        <Col style={{ width: 60 }}>
        < Row style={styles.FirstCellLast} >
          <Text style={styles.black}>Total</Text>
          <Text style={styles.grey}>{scorePar}</Text>
        </Row >
        {total}
        </Col>

      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    justifyContent: "space-between",
  },
  infoCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  navigationIcon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badgeIcon: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: "20%",
  },
  main: {
    flex: 1,
    justifyContent: "space-between",
  },
  note: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "red",
  },
  score: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  middleScore: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#86BAA1",
  },
  overlay: {
    alignItems: "center",
    width: '70%',
    height: "40%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  overlayScore: {
    alignItems: "center",
    width: '70%',
    height: "30%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  inputTitreOverlay: {
    padding: 5,
    minHeight: "10%",
    maxHeight: "10%",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "grey",
    overflow: "scroll",
  },
  inputTextOverlay: {
    padding: 5,
    minHeight: "50%",
    maxHeight: "50%",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "grey",
    overflow: "scroll",
  },
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


