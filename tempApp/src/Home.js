import React from 'react';
import {View, StyleSheet} from 'react-native';
import CpuTemp from './Components/CpuTemp';
import Weather from './Components/Weather';

function Home(props) {
  return (
    <View style={styles.container}>
      <CpuTemp />
      <Weather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
  },
});

export default Home;
