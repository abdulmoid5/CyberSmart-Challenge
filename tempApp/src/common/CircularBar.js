import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

function CircularBar({text1, text2, text3}) {
  return (
    <View style={styles.container}>
      <ProgressCircle
        percent={60}
        radius={40}
        borderWidth={8}
        color="red"
        shadowColor="#ededed"
        bgColor="#fff">
        <Text style={{fontSize: 18}}>{text1}</Text>
      </ProgressCircle>
      <ProgressCircle
        percent={52}
        radius={40}
        borderWidth={8}
        color="green"
        shadowColor="#ededed"
        bgColor="#fff">
        <Text style={{fontSize: 18}}>{text2}</Text>
      </ProgressCircle>
      <ProgressCircle
        percent={58}
        radius={40}
        borderWidth={8}
        color="#3399FF"
        shadowColor="#ededed"
        bgColor="#fff">
        <Text style={{fontSize: 18}}>{text3}</Text>
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
