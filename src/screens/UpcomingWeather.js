import React,{useState, useEffect} from "react";
import { SafeAreaView, StyleSheet,Text,View ,ImageBackground, FlatList, TouchableOpacity } from "react-native";
import ListItem from "../components/ListItem";
import { weatherType } from "../utils/weatherType";

const UpcomingWeather = ({weatherData})=>{
    const [condition,setCondition] = useState(weatherData[0]?.weather[0]?.main);
    const [textColor, setTextColor] = useState(weatherType[condition]?.color);
    useEffect(() => {
        setTextColor(weatherType[condition]?.color);
    },[condition]);
    return (
        <SafeAreaView style={styles.wrapper}>
            <ImageBackground
                source={weatherType[condition]?.backgroundImage}
                style={styles.image}
            >
            <View style={styles.container}>
            <Text style={[styles.header,{color:textColor}]}>Upcoming Weather</Text>
            </View>
            <FlatList
                data = {weatherData}
                renderItem = {({item}) => 
                    <TouchableOpacity onPress={()=>
                        {
                            setCondition(item.weather[0]?.main);
                        }
                    }>
                        <ListItem dt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} condition={item.weather[0].main} textColor={textColor}/>
                    </TouchableOpacity>}
                keyExtractor={item=>item.dt}
            /> 
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    wrapper:{
        flex:1,
    },
    image:{
        flex:1,
    },
    container:{
        alignItems:'center',
    },
    header: {
        fontSize: 30,
    },
})
export default UpcomingWeather;