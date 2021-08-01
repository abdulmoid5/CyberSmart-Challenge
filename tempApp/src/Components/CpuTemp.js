import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CircularBar from '../common/CircularBar';

function CpuTemp(props) {
  const [data, setData] = useState([]);


  
  //   setInterval(function() {
  //     cpuTemp();
  //   }, 2000);

  //   async function cpuTemp() {
  //     fetch('http://localhost:3000/cputemp')
  //       .then(response => response.json())
  //       .then(json => setData(json))
  //       .catch(error => console.error(error))
  //       .finally(() => setLoading(false));
  //   }

  return (
    <View style={styles.container}>
      {/* //Temperature figs fetching from node server */}
      <Text style={styles.heading}>Cpu Current Temperature</Text>
      <CircularBar />

      <View style={styles.tempContainer}>
        <Text style={styles.text}>Main</Text>
        <Text style={styles.text}>Cores</Text>
        <Text style={styles.text}>Max</Text>
      </View>
      <Text style={styles.disclaimer}>The temperatures are defined in °C</Text>
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
