import React, { useEffect, useState } from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import {Feather} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Tabs=({weather, cityChange})=>{
    const [city,setCity] = useState('');
    const handleCity=(data)=>{
        setCity(data);
    }
    useEffect(()=>{
        cityChange(city);
    },[city])

    return (
        <Tab.Navigator
            screenOptions={{
            tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'black',
            // tabBarStyle:{backgroundColor: weatherType[weather.list[0].weather[0].main].backgroundColor,},
            // headerStyle:{backgroundColor: weatherType[weather.list[0].weather[0].main].backgroundColor,},
            headerTitleAlign:'center', headerTintColor:'black',
            tabBarActiveTintColor:'white', tabBarActiveBackgroundColor:'blue',
            }}
        >
        <Tab.Screen name={"Current"} options={{
            tabBarIcon : ({focused}) =>
            <Feather name={'droplet'} size={30} color={focused? 'tomato':'black'}></Feather>
            }}>
               {()=> <CurrentWeather weatherData = {weather} CityData={handleCity}/>}
        </Tab.Screen>
        <Tab.Screen name={"Upcoming"} options={{
            tabBarIcon : ({focused}) =>
            <Feather name={'clock'} size={30} color={focused? 'tomato':'black'}></Feather>
            }}>
                {()=> <UpcomingWeather weatherData = {weather.list}/>}
        </Tab.Screen>
        </Tab.Navigator>
    )
}
export default Tabs;