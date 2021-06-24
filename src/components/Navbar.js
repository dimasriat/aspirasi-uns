import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

function Btn(props) {
  const style =
    props.current === true
      ? {fontSize: 14, fontWeight: 'bold', color: 'white'}
      : {fontSize: 14, color: 'white'};
  const setCurrentPage = props.setCurrentPage;
  const handlePress = function() {
    setCurrentPage(props.id)
  }
  return (
    <TouchableOpacity
      style={{padding: 16}}
      onPress={handlePress}>
      <Text style={style}>{props.children}</Text>
    </TouchableOpacity>
  );
}

export default function Navbar(props) {
  const setCurrentPage = props.setCurrentPage;
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 16,
        backgroundColor: '#27CCB8',
        borderTopColor: 'white',
        borderTopWidth: 1,
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <Btn id="HOME" setCurrentPage={setCurrentPage}>
        Browse
      </Btn>
      <Btn id="LOGIN" setCurrentPage={setCurrentPage}>
        Log In
      </Btn>
    </View>
  );
}
