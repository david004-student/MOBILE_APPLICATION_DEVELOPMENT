import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Exercise7 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(res => setUsers(res.data.data))
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <ScrollView>
        {users.map(item => (
          <View key={item.id} style={styles.profileContainer}>
            <View style={styles.card}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.name}>
                  {item.last_name}{' '}
                  <Text style={styles.name2}>{item.first_name}</Text>
                </Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileContainer: {
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name2: {
    fontWeight: 'normal',
  },
  email: {
    fontSize: 15,
  },
});
