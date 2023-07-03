import React from "react";
import { Text,StyleSheet, View } from "react-native";
import {Feather } from "@expo/vector-icons";

const IconText =(props)=>{
    const {iconName, iconColor, iconText} = props;
    return (
        <View style={styles.icon}>
        <Feather name={iconName} size={35} color={iconColor}></Feather>
        <Text style={styles.text}>{iconText}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        // color:"white",
        fontSize: 25,
    },
    icon:{
        // flex:1,
        flexDirection:"row",
    }
})
export default IconText;