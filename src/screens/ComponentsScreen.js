import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
    const name = "Sudhakar";
    return (
        <View>
            <Text style={styles.greetingStyle}>Getting started with React Native!</Text>
            <Text style={styles.textStyle}>My Name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    greetingStyle:{
        fontSize: 45
    },
    textStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;