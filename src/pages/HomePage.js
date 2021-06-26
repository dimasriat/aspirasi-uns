import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import FilterCard from './../components/FilterCard';
import AspirasiCard from './../components/AspirasiCard';

export default function HomePage(props) {
  const listAspirasi = props.listAspirasi;
  const setListAspirasi = props.setListAspirasi;
  const loggedIn = props.loggedIn;
  const [filter, setFilter] = useState('');
  return (
    <ScrollView
      style={{backgroundColor: '#E4E4E4', height: '100%', padding: 16}}>
      <FilterCard filter={filter} setFilter={setFilter} />
      <View style={{marginBottom: 64}}>
        {filter === ''
          ? listAspirasi.map(a => (
              <AspirasiCard
                key={a.isi}
                aspirasi={a}
                loggedIn={loggedIn}
                setListAspirasi={setListAspirasi}
              />
            ))
          : listAspirasi
              .filter(a => a['untuk'].toLowerCase() === filter.toLowerCase())
              .map(a => (
                <AspirasiCard
                  key={a.isi}
                  aspirasi={a}
                  loggedIn={loggedIn}
                  setListAspirasi={setListAspirasi}
                />
              ))}
      </View>
    </ScrollView>
  );
}
