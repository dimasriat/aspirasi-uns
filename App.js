import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import Header from './src/components/Header';
import Navbar from './src/components/Navbar';
import HomePage from './src/pages/HomePage';
import LoginPage from './src/pages/LoginPage';
import AddPage from './src/pages/AddPage';
import ProfilePage from './src/pages/ProfilePage';

export default function App(props) {
  const [currentPage, setCurrentPage] = useState('HOME');
  const [listAspirasi, setListAspirasi] = useState([
    {nama: 'Aldo', isi: 'pepohonannya rindang sekali', untuk: 'FMIPA'},
    {nama: 'Arkan', isi: 'prokernya bagus-bagus', untuk: 'HIMASTER'},
  ]);
  const [loggedIn, setLoggedIn] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      setTimeout(() => {
        setLoading(t => false);
      }, 1000),
    [],
  );

  return loading ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight:'bold', fontSize: 36}}>Aspirasi</Text>
      <Text style={{fontWeight:'bold', fontSize: 36}}>UNS</Text>
    </View>
  ) : (
    <View style={{flex: 1}}>
      <Header />
      {currentPage === 'HOME' && (
        <HomePage
          loggedIn={loggedIn}
          listAspirasi={listAspirasi}
          setListAspirasi={setListAspirasi}
        />
      )}
      {currentPage === 'LOGIN' && (
        <LoginPage
          setCurrentPage={setCurrentPage}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      )}
      {currentPage === 'ADD' && (
        <AddPage
          setListAspirasi={setListAspirasi}
          loggedIn={loggedIn}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === 'PROFILE' && (
        <ProfilePage
          loggedIn={loggedIn}
          setCurrentPage={setCurrentPage}
          setLoggedIn={setLoggedIn}
        />
      )}
      <Navbar setCurrentPage={setCurrentPage} loggedIn={loggedIn} />
    </View>
  );
}
