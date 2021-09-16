import React, {useState} from "react";
import {View, Text,  Button, StyleSheet} from "react-native";

const ColorCounter = ({name, onIncrease, onDecrease}) =>{
    return(
        <View>
            <Text>{name}</Text>
            <Button title={`More ${name}`} onPress={onIncrease} />
            <Button title={`Less ${name}`} onPress={onDecrease} />
        </View>
    );
};


export default ColorCounter