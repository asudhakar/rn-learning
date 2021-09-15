import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button 
        title="Go to Components Demo"
        onPress={()=>{console.log('Called Go to Components Demo')}}
      />
      <TouchableOpacity onPress={()=>console.log("List Demo")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
