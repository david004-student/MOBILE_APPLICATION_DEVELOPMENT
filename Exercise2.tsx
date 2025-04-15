import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const Exercise2 = () => {
  const Maps = () => {
    const address = 'Sangihe';
    const url = `https://maps.app.goo.gl/KQKgGBqYWu3mb6px5`;

    Linking.openURL(url);
  };
  return(
    <View style={style.Main_Container}>
      <View style={style.Container1}>
        <Image
          style={style.img1}
          source={{
            uri: 'https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/a0e938ea-94a1-4ebb-59d3-e8c86a885300/avatarhd',
          }}
        />
        <View style={style.textContainerprofile}>
          <Text style={style.textprofile}>David</Text>
          <Text style={style.textprofile2}>Umur: 20</Text>
          <Text style={style.textprofile2}>Alamat: Asrama Crystasdfasdfadsadfaf</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.aboutcontainer}>
          <Text style={style.About}>ABOUT</Text>
          <Text style={style.abouttxt}>Prodi : Informatika</Text>
          <Text style={style.abouttxt}>SMA : SMA Advent Klabat Manado</Text>
          <TouchableOpacity onPress={Maps}>
            <Text style={style.abouttxtmap}>Asal: Sangihe 📍</Text>
          </TouchableOpacity>
        </View>
        <View style={style.portofoliocontainer}>
          <Text style={style.About}>Portofolio</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={style.porto}>
              <Image
                style={style.imgporto}
                source={require('./assets/javascript-39396.png')}
              />
              <Image
                style={style.imgportophp}
                source={require('./assets/php.png')}
              />
              <Image
                style={style.imgporto}
                source={{
                  uri: 'https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png',
                }}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Exercise2;

const style = StyleSheet.create({
  imgportophp: {
    resizeMode: 'contain',
    width: 130,
    height: 120,
    marginTop: 20,
    marginLeft: 30,
  },

  imgporto: {
    height: 170,
    width: 170,
    resizeMode: 'contain',
  },
  portofoliocontainer: {
    borderTopEndRadius: 50,
    borderBottomStartRadius: 50,
    backgroundColor: '#545454',
    marginTop: 50,
    alignItems: 'center',
    paddingTop: 15,
    flexDirection: 'column',
    gap: 10,
  },

  porto: {
    flexDirection: 'row',
    gap: 10,
  },
  aboutcontainer: {
    alignItems: 'center',
    paddingTop: 15,
    flexDirection: 'column',
    gap: 10,
  },

  abouttxtmap: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    backgroundColor: 'blue',
    borderRadius: 20,
  },

  abouttxt: {
    color: 'white',
    fontSize: 15,
  },

  About: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  Container1: {
    backgroundColor: '#727272',
    shadowColor: 'white',
    elevation: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  textprofile2: {
    color: 'white',
    fontSize: 15,
  },

  textContainerprofile: {
    flexDirection: 'column',
  },

  Main_Container: {
    backgroundColor: '#808080',
    flex: 1,
  },

  img1: {
    height: 100,
    width: 100,
    borderRadius: 10000,
    margin: 20,
    marginBottom: 10,
  },

  textprofile: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
    paddingBottom: 15,
  },
});
