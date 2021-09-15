import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () =>{
    //Create a Array of Object
    const friends = [
        {name:'Friend #1', id:'1', age:'28'},
        {name:'Friend #2', id:'2', age:'29'},
        {name:'Friend #3', id:'3', age:'27'},
        {name:'Friend #4', id:'4', age:'26'},
        {name:'Friend #5', id:'5', age:'27'},
        {name:'Friend #6', id:'6', age:'30'},
        {name:'Friend #7', id:'7', age:'28'},
    ]
    return(
            <FlatList 
                keyExtractor={friend => friend.id}
                data={friends} 
                renderItem={({item})=>{
                    return <Text>{item.name} - Age {item.age}</Text>
                }}
            />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
});

export default ListScreen;