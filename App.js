import React,{useEffect, useState} from 'react';
import { ActivityIndicator, Button, StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import ErrorItem from './src/components/ErrorItem';
import { useGetCurrentWeather } from './src/hooks/useGetCurrentWeather';
import { API_KEY } from '@env'


const App = () => {
    
    const [Loading1, Error1, Weather1, Lat1, Lon1] = useGetCurrentWeather();

    const [loading,setLoading] = useState(Loading1)
    const [error,setError] = useState(Error1)
    const [weather,setWeather] = useState(Weather1)
    
    const initial_city = Weather1?.city?.name;

    const [city,setCity] = useState(initial_city);

    const handleCity =(data)=>{
    //   console.log(data);
      data? setCity(data):initial_city;
    }
    const [lat,setLat] = useState(Lat1)
    const [lon,setLon] = useState(Lon1)
    
    useEffect(()=>{
      ;(async () => {
        try{
          const response = require('./src/components/sample_response3.json');
          city ? response = fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`) : require('./src/components/sample_response3.json')
          
          response= response.json()
          
          setLat(data[0].lat);
          setLon(data[0].lon);
        }
        catch (err) {
          setError('could not fetch location');
        }
        finally {
            setLoading(false);
        }
      })()
    },[city])

    useEffect(()=>{
      console.log(lat,lon)
      ;(async () => {
      try {
        const res = require('./src/components/sample_response2.json');
        lat? res = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          ) : require('./src/components/sample_response2.json');
        const data = await res.json()
        setWeather(data);
      }
      catch (err) {
          setError('could not fetch weather');
      }
      finally {
          setLoading(false);
      }
    })()
    },[city,lat,lon])

    if (weather && weather.list && !loading){
        return (
            <NavigationContainer>
                <Tabs weather={weather} cityChange={handleCity}/>
            </NavigationContainer>
        )
    }
    return (
        <View style={styles.container}>
          {error? (<ErrorItem/>) : (<ActivityIndicator size='large' color='blue'/>)}
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})
export default App;