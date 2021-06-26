import React from 'react';
import {View, Text} from 'react-native';

export default function Header(props) {
  return (
    <View
      style={{
        width: '100%',
        padding: 16,
        backgroundColor: '#27CCB8',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        borderStyle: 'solid',
      }}>
      <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
        Aspirasi UNS
      </Text>
    </View>
  );
}
