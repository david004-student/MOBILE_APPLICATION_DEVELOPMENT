import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

const Exercise3 = () => {
  const [title, setTitle] = useState('Welcome!!!');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = () => {
    setTitle('Selamat Datang');
    console.log(name);
    console.log(username);
    console.log(email);
    console.log(address);
    console.log(number);
  };

  return (
    <View style={style.background}>
      <View style={style.maincontainer}>
        <Text style={style.textwelcome2}>{title}</Text>
        <Input
        textwelcome = "Name"
        input="masukkan nama lengkap anda"
        onChangeText={e => setName(e)}
        />
        <Input
        textwelcome = "Username"
        input="masukkan username anda"
        onChangeText={e => setUsername(e)}
        />
        <Input
        textwelcome = "Email"
        input="masukkan email anda"
        onChangeText={e => setEmail(e)}
        />
        <Input
        textwelcome = "Address"
        input="masukkan alamat anda"
        onChangeText={e => setAddress(e)}
        />
        <Input
        textwelcome = "Phone Number"
        input="masukkan Nomor telepon"
        onChangeText={e => setNumber(e)}
        keyboardType="numeric"
        />


        <View style={style.buttoncontainer}>
          <Button textsignin="Register" onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

export default Exercise3;

const style = StyleSheet.create({
  textsignin: {
    alignSelf: 'center',
    color: '#fff5ee',
    fontSize: 30,
    fontWeight: '800',
  },
  buttoncontainer: {
    gap: 7,
  },
  datainput: {
    paddingTop: 110,
  },
  textwelcome2: {
    color: '#621B21',
    fontSize: 30,
    fontWeight: '900',
  },

  maincontainer: {
    alignItems: 'center',
    marginTop: 50,
    margin: 25,
    backgroundColor: '#fff5ee',
    width: 350,
    height: 760,
    borderRadius: 25,
  },
  background: {
    backgroundColor: '#621B21',
    flex: 1,
  },
});
