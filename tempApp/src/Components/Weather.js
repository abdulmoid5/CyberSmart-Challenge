import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackgroundTask from 'react-native-background-task';
import Divider from '../common/Divider';

// Running backgrounnds task when app is closed
BackgroundTask.define(() => {
  getWeather();
  BackgroundTask.finish();
});

function Weather(props) {
  // initialising values to be fetched from API
  const [info, setInfo] = useState({
    icon: 'loading',
    name: 'loading',
    country: 'loading',
    desc: 'loading',
    temp: 'loadinng',
    feels_like: 'loading',
    temp_min: 'loading',
    temp_max: 'loading',
    humidity: 'loadinng',
  });

  // Used to fetch once the app reloads
  useEffect(() => {
    getWeather();
    BackgroundTask.schedule();
  }, []);

  //   API set to call at 30min interval
  setInterval(function() {
    getWeather();
  }, 1800000);

  //   Function defined to call current weather API
  const getWeather = async () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=London&appid=d26a4bec9daa067c3885aae89574b2ba&units=imperial',
    )
      .then(data => data.json())
      .then(results => {
        //   setting values to results from API
        setInfo({
          icon: results.weather[0].icon,
          name: results.name,
          country: results.sys.country,
          desc: results.weather[0].description,
          temp: results.main.temp,
          feels_like: results.main.feels_like,
          temp_min: results.main.temp_min,
          temp_max: results.main.temp_max,
          humidity: results.main.humidity,
        });
        // Storing the fetched results locally
        AsyncStorage.setItem('results', JSON.stringify(results));
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current Weather</Text>

      {/* image icon  */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://openweathermap.org/img/w/' + info.icon + '.png',
        }}
      />

      {/* Description container  */}
      <View style={styles.details}>
        <Text style={styles.location}>
          {info.name}, {info.country}
        </Text>
        <Divider />
        <Text style={styles.text}>{info.desc}</Text>
        <Text style={styles.text}>Temperature: {info.temp}°F</Text>
        <Text style={styles.text}>Feel's like: {info.feels_like}°F</Text>
        <Text style={styles.text}>
          Min:{info.temp_min}°F Max:{info.temp_max}°F
        </Text>
        <Text style={styles.text}>Humidity: {info.humidity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: '-10%',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'gray',
    width: '90%',
    height: '50%',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },

  //   h1
  heading: {
    textAlign: 'center',
    top: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },

  image: {
    resizeMode: 'contain',
    height: '50%',
    width: '50%',
  },

  //   name
  location: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },

  //   remaining details containner
  details: {
    bottom: 50,
    textAlign: 'center',
  },

  //   body text
  text: {
    fontSize: 20,
    fontWeight: '300',
    color: '#ededed',
  },
});

export default Weather;
