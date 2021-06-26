import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import AddCard from './../components/AddCard';

export default function AddPage(props) {
  const setListAspirasi = props.setListAspirasi;
  const loggedIn = props.loggedIn;
  const setCurrentPage = props.setCurrentPage;
  return (
    <ScrollView
      style={{backgroundColor: '#E4E4E4', height: '100%', padding: 16}}>
      <AddCard setListAspirasi={setListAspirasi} loggedIn={loggedIn}
        setCurrentPage={setCurrentPage}/>
    </ScrollView>
  );
}
