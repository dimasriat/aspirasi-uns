import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function AspirasiCard(props) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#27CCB8',
        padding: 16,
        borderRadius: 18,
        marginTop: 18,
      }}>
      <Text style={{color: 'white', fontWeight: 'bold', marginBottom: 9}}>
        {props.user}
      </Text>
      <Text style={{color: 'white'}}>{props.msg}</Text>
    </View>
  );
}
