import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { API_KEY } from '@env'

export const useGetCurrentWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  
  const fetchWeatherData = async () => {
    try {
      const res = require('../components/sample_response.json');
      lat ? res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      ) : require('../components/sample_response.json');
      //
      const data =res.json()
      setWeather(data)
    } catch (err) {
      setError('could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData();
    })()
  }, [lat, lon])
  return [loading, error, weather,lat, lon];
}