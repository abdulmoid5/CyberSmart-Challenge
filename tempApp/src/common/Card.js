import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

function Card(props) {
  return <View style={styles.container}>
  <Text>Hey</Text>
  </View>;
}

const styles = StyleSheet.create({
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
});

export default Card;
