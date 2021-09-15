import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () =>{
    return(
        <View>
            <ImageDetail title="Forest" image={require('../../assets/forest.jpg')} score={9} />
            <ImageDetail title="Mountain" image={require('../../assets/mountain.jpg')} score={6} />
            <ImageDetail title="Beach" image={require('../../assets/beach.jpg')} score={7} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;