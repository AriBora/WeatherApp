import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const ErrorItem = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>Something went wrong!!</Text>
            <Feather name={'frown'} size={50} color={'red'}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    errorMessage:{
        fontSize:30,
        color:'red',
        marginHorizontal:10,
        textAlign:'center',
    }
})
export default ErrorItem;