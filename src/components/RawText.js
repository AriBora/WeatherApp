import React from "react";
import { Text, View } from "react-native";

const RawText=(props)=>{
    const {msg1,msg2,style1,style2} = props;
    return (
        <View>
        <Text style={style1}>{msg1}</Text>
        <Text style={style2}>{msg2}</Text>
        </View>
    )
}

export default RawText;