import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';

export default function FilterCard(props) {
  const [filter, setFilter] = useState('');
  const handleClick = function () {
    Alert.alert(filter + '!');
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
        Filter
      </Text>
      <TextInput
        style={{
          backgroundColor: '#2154A3',
          color: 'white',
          width: '100%',
          padding: 4,
          marginVertical: 18,
        }}
        placeholder="insert text here..."
        placeholderTextColor="white"
        onChangeText={filter => setFilter(filter)}
        defaultValue={filter}
      />
      <TouchableOpacity
        style={{backgroundColor: 'white'}}
        onPress={handleClick}>
        <Text style={{color: '#3385FF', textAlign: 'center', padding: 8}}>
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
}
