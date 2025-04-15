import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cykacontainer}>
      <View style={styles.redContainer}></View>
      <View style={styles.greenContainer}></View>
      <View style={styles.blueContainer}></View>
      </View>
      <Image style={styles.img2} source={require('./assets/logo-with-motto-3.png')} />
      <View style={styles.cykacontainer2}>
      <View style={styles.redContainer}></View>
      <View style={styles.greenContainer}></View>
      <View style={styles.blueContainer}></View>
      </View>
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
    img2: {
        alignSelf: 'center',
        width: 390,
        height: 200,
        resizeMode: 'contain',
    },
    cykacontainer2: {
        padding: 20,
        paddingLeft: 10,
        alignItems: 'center',
        height: 130,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'blue',

    },
    cykacontainer: {
        padding: 20,
        paddingLeft: 10,
        gap: 20,
        alignItems: 'center',
        height: 130,
        flexDirection: 'row',
        backgroundColor: 'red',
    },
  redContainer: {
    backgroundColor: 'black',
    height: 75,
    width: 75,
  },
  blueContainer: {
    backgroundColor: 'black',
    height: 75,
    width: 75,
  },
  greenContainer: {
    backgroundColor: 'yellow',
    height: 75,
    width: 75,
  },
  container: {
    gap: 200,
    flex: 1,
    flexDirection: 'column',
  },
});
