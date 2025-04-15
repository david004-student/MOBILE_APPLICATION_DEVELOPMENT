import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer}></View>
      <View style={styles.greenContainer}></View>
      <View style={styles.blueContainer}></View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  redContainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  blueContainer: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    marginTop: 400,
  },
  greenContainer: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    marginTop: 200,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
