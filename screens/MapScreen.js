import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import {Input, Badge, Card, Text, ListItem, Avatar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MapScreen() {

    const [pseudo, setPseudo] = useState('');

    let listGolf = [
        {
            name: "Mon beau golf",
            distance: 41,
            address: "Sur le parking des anges"
        },
        {
            name: "Mon magnifique golf",
            distance: 56,
            address: "En haut de la tour Eiffel"
        },{
            name: "Le golf de l'extrême",
            distance: 26,
            address: "Pas loin de chez mon pote Louis"
        },{
            name: "Mon très beau golf",
            distance: 78,
            address: "Dans les nuages"
        }
    ]

    var inputSearchGolf =
          <Input
            containerStyle = {{marginTop: 30, marginBottom: 5, width: '70%'}}
            inputStyle={{marginLeft: 10}}
            placeholder='Recherche de golf'
            leftIcon={
                <Icon
                name='search'
                size={24}
                color="#3AB795"
                />
            }
            onChangeText={(val) => setPseudo(val)}
        />

    // var golfCards = listGolf.map((data, i) => {
    //     return (
    //       <Card key={i}>
    //         <Card.Title>{data.name}</Card.Title>
    //         <Card.Image
    //           style={{ width: '10%', height: 17, marginBottom: 10 }}
    //           source={require('../assets/golf-icon.jpg')}
    //         />
    //         <Text>{data.distance} km - {data.address} </Text>
    //       </Card>
    //     );
    //   });


    var golfCards = listGolf.map((l, i) => {
        return (
          <ListItem key={i}>
            <Avatar source={require('../assets/golf-icon.jpg')} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.distance} km - {l.address}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
    });


    return (
        <View style={styles.container}>
            <View style={{display: 'flex', alignItems: 'center'}}>
            {inputSearchGolf}
            </View>
            <View style={styles.filters}>
                <Badge status="success" value='filter 1'/>
                <Badge status="success" value='filter 2'/>
                <Badge status="success" value='filter 3'/>
            </View>
            <ScrollView style ={{flex: 1, marginTop: 50}}>
            {golfCards}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    filters: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});


