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
  return (
    <ScrollView
      style={{backgroundColor: '#E4E4E4', height: '100%', padding: 16}}>
      <FilterCard />
      <View style={{marginBottom: 64}}>
        <AspirasiCard user="Dimas" msg="FMIPA sangat keren" />
        <AspirasiCard user="Aldo" msg="Himaster gokil" />
      </View>
    </ScrollView>
  );
}
