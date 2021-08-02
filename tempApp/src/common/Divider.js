import React from 'react';
import { View, StyleSheet } from 'react-native';

function Divider(props) {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
      borderBottomColor:'#fff',
      borderBottomWidth:2,
      marginVertical:7
  }
});

export default Divider;