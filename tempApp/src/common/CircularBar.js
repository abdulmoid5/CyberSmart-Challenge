import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

function CircularBar(props) {
  return (
    <View style={styles.container}>
      <ProgressCircle
        percent={70}
        radius={40}
        borderWidth={8}
        color="red"
        shadowColor="#ededed"
        bgColor="#fff">
        {/* <Text style={{ fontSize: 18 }}>{data.main}</Text> */}
      </ProgressCircle>
      <ProgressCircle
        percent={52}
        radius={40}
        borderWidth={8}
        color="green"
        shadowColor="#ededed"
        bgColor="#fff">
        {/* <Text style={{ fontSize: 18 }}>{data.cores}</Text> */}
      </ProgressCircle>
      <ProgressCircle
        percent={63}
        radius={40}
        borderWidth={8}
        color="#3399FF"
        shadowColor="#ededed"
        bgColor="#fff">
        {/* <Text style={{ fontSize: 18 }}>{data.max}</Text> */}
      </ProgressCircle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CircularBar;
