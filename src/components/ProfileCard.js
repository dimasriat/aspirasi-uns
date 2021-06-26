import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';

export default function ProfileCard(props) {
  const loggedIn = props.loggedIn;
  const setCurrentPage = props.setCurrentPage;
  const setLoggedIn = props.setLoggedIn;
  const handleClick = function () {
    setLoggedIn({});

    Alert.alert('Berhasil Log Out');
    setCurrentPage('HOME');
  };
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#3385FF',
        padding: 16,
        borderRadius: 18,
      }}>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'white',
        }}>
        Profil
      </Text>
      <Text style={{fontWeight: 'bold', color: 'white', marginVertical: 8}}>
        Nama: {loggedIn.nama}
      </Text>
      <Text style={{fontWeight: 'bold', color: 'white', marginVertical: 8}}>
        Email: {loggedIn.email}
      </Text>
      <TouchableOpacity
        style={{backgroundColor: 'white'}}
        onPress={handleClick}>
        <Text style={{color: 'crimson', textAlign: 'center', padding: 8}}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
