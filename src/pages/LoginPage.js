import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomePage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView
      style={{backgroundColor: '#E4E4E4', height: '100%', padding: 16}}>
      <Text>Email</Text>
      <TextInput
        placeholder="email"
        onChangeText={email => setFilter(email)}
        defaultValue={email}
        style={{
          borderWidth: 2,
          borderColor: 'black',
          padding: 8,
          marginBottom: 32,
        }}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={email => setFilter(email)}
        defaultValue={email}
        style={{
          borderWidth: 2,
          borderColor: 'black',
          padding: 8,
          marginBottom: 32,
        }}
      />
      <TouchableOpacity style={{backgroundColor: '#3385FF', borderRadius: 8}}>
        <Text style={{color: 'white', textAlign: 'center', padding: 16}}>
          Login
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
