import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CircularBar from '../common/CircularBar';
import tempApi from '../api/Temps';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CpuTemp(props) {
  const [data, setData] = useState([]);

  // Used to fetch once the app reloads
  useEffect(() => {
    loadTemps();
  }, []);

  //   API set to call at 30min interval
  setInterval(function() {
    loadTemps();
  }, 1800000);

  //   Function defined to call cpuTemperature API
  loadTemps = async () => {
    const response = await tempApi.getTemps();
    setData(response.data);
    // Storing the fetched results locally
    AsyncStorage.setItem('data', JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CPU Temperature</Text>
      {/* //Temperature figs fetching from node server */}
      <CircularBar text1={data.main} text2={data.cores} text3={data.max} />

      <View style={styles.tempContainer}>
        <Text style={styles.text}>Main</Text>
        <Text style={styles.text}>Cores</Text>
        <Text style={styles.text}>Max</Text>
      </View>
      <Text style={styles.disclaimer}>The temperatures are defined in °F</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  //  cpu temperature card
  container: {
    marginVertical: '20%',
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

  //   text descriptions container
  elements: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  //   h1
  heading: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000947',
  },

  //   static descriptions
  text: {
    fontSize: 16,
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#000e6b',
  },

  //   Dynamic tempContainer
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  //   card bottom text
  disclaimer: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 10,
    fontWeight: '500',
  },
});

export default CpuTemp;
