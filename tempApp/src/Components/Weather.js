import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Weather(props) {
  const [info, setInfo] = useState({
    name: 'loading',
    temp: 'loadinng',
    feels_like: 'loading',
    temp_min: 'loading',
    temp_max: 'loading',
    humidity: 'loadinng',
    desc: 'loading',
    icon: 'loading',
  });

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=London&appid=d26a4bec9daa067c3885aae89574b2ba&units=metric',
    )
      .then(data => data.json())
      .then(results => {
        setInfo({
          name: results.name,
          temp: results.main.temp,
          temp_min: results.main.temp_min,
          temp_max: results.main.temp_max,
          feels_like: results.main.feels_like,
          humidity: results.main.humidity,
          desc: results.weather[0].description,
          icon: results.weather[0].icon,
        });
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current Weather</Text>

      <Image
        style={styles.image}
        source={{
          uri: 'https://openweathermap.org/img/w/' + info.icon + '.png',
        }}
      />
      <Text style={styles.text}>{info.name}</Text>
      <Text style={styles.text}>{info.desc}</Text>

      <Text style={styles.text}>{info.temp}</Text>
      <Text style={styles.text}>{info.feels_like}</Text>
      <Text style={styles.text}>
        {info.temp_min}/{info.temp_max}
      </Text>
      <Text style={styles.text}>{info.humidity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: '10%',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '90%',
    height: '30%',

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
    paddingTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000947',
  },

  image: {
    resizeMode: 'contain',
    height: '50%',
    width: '50%',
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000947',
  },
});

export default Weather;
