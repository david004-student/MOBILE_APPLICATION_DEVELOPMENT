import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const Input = ({ textwelcome, input, value, onChangeText, keyboardType = 'default' }) => {
  return (
    <View>
      <Text style={styles.textwelcome}>{textwelcome}</Text>
      <TextInput 
        placeholder={input}
        style={styles.input}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    width: 300,
    marginBottom: 25,
  },
  textwelcome: {
    color: '#621B21',
    fontSize: 30,
    fontWeight: '900',
  },
});
