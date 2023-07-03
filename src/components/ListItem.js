import React from "react";
import { View, Text, StyleSheet} from "react-native";
import {Feather} from '@expo/vector-icons';
import { weatherType } from "../utils/weatherType";
import moment from "moment";

const ListItem =({dt,min,max,condition,textColor})=>{
    return (
        <View style={styles.Item}>
            <Feather name={weatherType[condition].icon} size={50} color={textColor}></Feather>
            <View style={{flexDirection:'column'}}>
                <Text style={[styles.date,{color:textColor}]}>{moment(dt).format('dddd')}</Text>
                <Text style={[styles.date,{color:textColor}]}>{moment(dt).format('h:mm:ss a')}</Text>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text style={[styles.temp,{color:textColor}]}>{min} °C</Text>
                <Text style={[styles.temp,{color:textColor}]}>{max} °C</Text>
            </View>
            <Text style={[styles.date,{color:textColor}]}>{condition}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Item : {
        flex:1,
        padding :20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent:'space-around',
        borderWidth:3,
        alignItems:'center',
    },
    temp:{
        fontSize: 17,
    },
    date:{
        fontSize: 15,
    }
})
export default ListItem;