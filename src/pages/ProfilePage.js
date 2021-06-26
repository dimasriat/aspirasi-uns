import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import ProfileCard from './../components/ProfileCard';

export default function ProfilePage(props) {
  const setListAspirasi = props.setListAspirasi;
  const loggedIn = props.loggedIn;
  const setCurrentPage = props.setCurrentPage;
  const setLoggedIn = props.setLoggedIn;
  return (
    <ScrollView
      style={{backgroundColor: '#E4E4E4', height: '100%', padding: 16}}>
      <ProfileCard
        loggedIn={loggedIn}
        setCurrentPage={setCurrentPage}
        setLoggedIn={setLoggedIn}
      />
    </ScrollView>
  );
}
