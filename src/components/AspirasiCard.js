import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';

export default function AspirasiCard(props) {
  const loggedIn = props.loggedIn;
  const aspirasi = props.aspirasi;
  const setListAspirasi = props.setListAspirasi;
  function handleDelete() {
    setListAspirasi(list => [
      ...list.filter(item => JSON.stringify(item) !== JSON.stringify(aspirasi)),
    ]);
    Alert.alert('Data Terhapus');
  }
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#27CCB8',
        padding: 16,
        borderRadius: 18,
        marginTop: 18,
      }}>
      <View
        style={{
          marginBottom: 9,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>
          {aspirasi.nama}
        </Text>
        <Text style={{fontWeight: 'bold', color: 'white'}}>
          {aspirasi.untuk}
        </Text>
      </View>
      <Text style={{color: 'white'}}>{aspirasi.isi}</Text>
      {JSON.stringify(loggedIn) !== '{}' && loggedIn.nama === 'Admin' && (
        <View style={{marginTop: 18}}>
          <TouchableOpacity
            style={{backgroundColor: 'white'}}
            onPress={handleDelete}>
            <Text style={{color: 'crimson', textAlign: 'center', padding: 8}}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
