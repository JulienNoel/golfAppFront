import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity,
    TouchableWithoutFeedback, ScrollView
} from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';

import { Badge } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
    const swipeUpDownRef = useRef();
    return (
        <ImageBackground source={require('../assets/map.png')} style={styles.div}>
            <View style={styles.infoCard}>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 5 }}>Nom du parcours</Text>
                    <Text>Par 72 - 7342 m</Text>
                </View>
                <View style={{ margin: 20, alignItems: 'flex-end' }}>
                    <Badge
                        badgeStyle={{ backgroundColor: "#3AB795", height: 20 }}
                        textStyle={{ fontWeight: 'bold' }}
                        value="Par 4"
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5, marginBottom: 5 }}>Trou 1</Text>
                    <Text>320 m</Text>
                </View>
            </View>
            <View style={styles.navigationIcon}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../assets/previous.png')}
                />
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../assets/next.png')}
                />
            </View>
            <View style={styles.badgeIcon}>
                <Badge
                    badgeStyle={{ backgroundColor: "#3AB795", height: 20, marginEnd: 20, marginBottom: 5 }}
                    textStyle={{ fontWeight: 'bold' }}
                    value="avg score : 4,3"
                />
                <Badge
                    badgeStyle={{ backgroundColor: "#3AB795", height: 20, marginEnd: 20 }}
                    textStyle={{ fontWeight: 'bold' }}
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
                        <Text onPress={show} style={{ fontWeight: 'bold', color: "white", fontSize: 20 }}>Score</Text>
                    </View>
                )}
                itemFull={(close) => (
                    <ScrollView>
                        {/** To use scrollview please add TouchableWithoutFeedback */}
                        <TouchableWithoutFeedback>
                            <View>
                                <TouchableOpacity onPress={close}>
                                    <View style={{ alignItems: "center", height: 30 }}>
                                        <Text style={{ fontWeight: 'bold', color: "white", fontSize: 20 }}>Score</Text>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        backgroundColor: "blue",
                                        height: 200,
                                    }}
                                />
                                <View
                                    style={{
                                        backgroundColor: "yellow",
                                        height: 200,
                                    }}
                                />
                                <View
                                    style={{
                                        backgroundColor: "pink",
                                        height: 200,
                                    }}
                                />
                                <View
                                    style={{
                                        backgroundColor: "red",
                                        height: 200,
                                    }}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                )}
                onShowMini={() => console.log("mini")}
                onShowFull={() => console.log("full")}
                extraMarginTop={90}
                disableSwipeIcon
                disablePressToShow={true} // Press item mini to show full
                style={{ backgroundColor: "#3AB795" }} // style for swipe
                swipeHeight={80}
            />
        </ImageBackground>
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
        alignItems: 'center',
    },
    badgeIcon: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 40,
    }
});


