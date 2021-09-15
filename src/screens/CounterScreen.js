import React, {useState} from "react";
import {View, Button, Text} from "react-native";

const CounterScreen = () =>{
    const [counter, setCounter] = useState(0);
    return(
        <View>
            <Button title="Increment" onPress={()=>{setCounter(counter+1)}} />
            <Button title="Decrement" onPress={()=>{setCounter(counter-1)}}/>
            <Text>Count : {counter}</Text>
        </View>
    );
}

export default CounterScreen;