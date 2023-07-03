import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground} from 'react-native';
import {Feather} from '@expo/vector-icons';
import RawText from '../components/RawText';
import {weatherType} from '../utils/weatherType';
import IconText from "../components/IconText";
import SearchBar from '../components/SearchBar';

const CurrentWeather = ({weatherData, CityData}) => {
  const {temp,feels_like,temp_min,temp_max} = weatherData?.list[0].main;
  const condition = weatherData?.list[0].weather[0]?.main
  const {name,country,population} = weatherData.city;

  const [searchQuery, setSearchQuery] = useState("");
  
  const handleQuery =(data)=>{
    setSearchQuery(data);
  }
  useEffect(()=>{
    CityData(searchQuery);
  },[searchQuery])

  return (
    <SafeAreaView style={styles.wrapper}> 
      <ImageBackground
          source={weatherType[condition]?.backgroundImage} 
          style={styles.image}>
        
        <View style={styles.container}>
          <SearchBar onQuery={handleQuery}></SearchBar>
          <View style={styles.Location}>
            <Text style={styles.location}>{name} </Text>
            <Text style={styles.location}>{`(${country})`}</Text>
          </View>
          <IconText iconName='user' iconText={population}/>
          <Text style = {styles.header}> Current Weather</Text>
          <Feather name={weatherType[condition]?.icon} size={50} color="black"></Feather>
          <RawText msg1={`Temperature : ${temp} °C`} msg2={`Feels like: ${feels_like} °C`} style1={styles.tempStyles} style2={styles.feels}/>
          <View style={styles.highlow}>
            <RawText msg1={`High : ${temp_max} °C`} msg2={`Low : ${temp_min} °C`} style1={styles.highlow} style2={styles.highlow}/>
          </View>

          <View style={styles.container2}>
            <RawText msg1={`${weatherData.list[0].weather[0]?.description}`} msg2={weatherType[condition]?.message} style1={styles.message} style2={styles.message}/>
          </View>
        </View>

      </ImageBackground>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  image:{
    flex:1,
  },
  container: {
    flex:1,
    alignItems: 'center',
  },
  header: {
    fontSize: 35,
  },
  tempStyles: {
    color:"black",
    fontSize: 30,
    alignSelf:"center",
  },
  feels:{
    color: "black", fontSize: 28, alignSelf:'center',
  },
  highlow : {
    flexDirection: 'row',
    color: "black",
    fontSize:28,
  },
  message:{
    fontSize:20,
    color: "black",
  },
  container2: {
    flex:1,
    paddingLeft:10,
    paddingBottom: 10,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
  location:{
    fontSize: 35,
  },
  Location:{
      flexDirection:"row",
  },
});

export default CurrentWeather;