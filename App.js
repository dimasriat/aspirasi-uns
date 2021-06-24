import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import Header from './src/components/Header';
import Navbar from './src/components/Navbar';
import HomePage from './src/pages/HomePage';
import LoginPage from './src/pages/LoginPage';

export default function App(props) {
  const [pages, setPages] = useState({
    HOME: <HomePage />,
    LOGIN: <LoginPage />,
  });
  const [currentPage, setCurrentPage] = useState('HOME');
  return (
    <View style={{flex: 1}}>
      <Header />
      {pages[currentPage]}
      <Navbar setCurrentPage={setCurrentPage} />
    </View>
  );
}
