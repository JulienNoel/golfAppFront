import React, { useState, useEffect } from 'react';
import { StyleSheet,View,Text  } from 'react-native';

import {} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ScoreScreen() {

    return (
        <View style={styles.container}>
            <Text>Score</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


