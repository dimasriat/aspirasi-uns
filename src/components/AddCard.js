import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';

export default function AddCard(props) {
  const [untuk, setUntuk] = useState('');
  const [isi, setIsi] = useState('');
  const loggedIn = props.loggedIn;
  const setListAspirasi = props.setListAspirasi;
  const setCurrentPage = props.setCurrentPage;
  const handleClick = function () {
    setListAspirasi(list => [
      ...list,
      {
        untuk: untuk,
        isi: isi,
        nama: loggedIn.nama,
      },
    ]);

    Alert.alert('Aspirasi Diterima');
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
        Tambah Aspirasi
      </Text>
      <Text style={{fontWeight: 'bold', color: 'white', marginVertical: 8}}>
        Untuk
      </Text>
      <TextInput
        style={{
          backgroundColor: '#2154A3',
          color: 'white',
          width: '100%',
          padding: 4,
          marginBottom: 18,
        }}
        placeholder="insert text here..."
        placeholderTextColor="white"
        onChangeText={untuk => setUntuk(untuk)}
        defaultValue={untuk}
      />
      <Text style={{fontWeight: 'bold', color: 'white', marginVertical: 8}}>
        Isi Aspirasi
      </Text>
      <TextInput
        style={{
          backgroundColor: '#2154A3',
          color: 'white',
          width: '100%',
          marginBottom: 18,
        }}
        multiline={true}
        numberOfLines={4}
        placeholder="insert text here..."
        placeholderTextColor="white"
        onChangeText={isi => setIsi(isi)}
        defaultValue={isi}
      />
      <TouchableOpacity
        style={{backgroundColor: 'white'}}
        onPress={handleClick}>
        <Text style={{color: '#3385FF', textAlign: 'center', padding: 8}}>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}
