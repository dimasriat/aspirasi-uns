import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const registeredAccount = [
  {nama: 'Dimas', email: 'dimas@role.com', password: '12345'},
  {nama: 'Aldo', email: 'aldo@role.com', password: '12345'},
  {nama: 'Angga', email: 'angga@role.com', password: '12345'},
  {nama: 'Arkan', email: 'arkan@role.com', password: '12345'},
  {nama: 'Admin', email: 'admin@role.com', password: '12345'},
];

export default function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setLoggedIn = props.setLoggedIn;
  const setCurrentPage = props.setCurrentPage;

  const handleLogin = function () {
    let found = false;
    for (let account of registeredAccount) {
      if (email === account.email && password === account.password) {
        found = true;
        Alert.alert('Hai ' + account.nama);
        setLoggedIn(loggedIn => ({...account}));
        setCurrentPage('HOME');
        break;
      }
    }
    if (!found) {
      Alert.alert('Akun tidak ditemukan');
    }
  };

  return (
    <ScrollView
      style={{backgroundColor: '#E4E4E4', height: '100%', padding: 16}}>
      <Text>Email</Text>
      <TextInput
        placeholder="email"
        onChangeText={email => setEmail(email)}
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
        onChangeText={password => setPassword(password)}
        defaultValue={password}
        style={{
          borderWidth: 2,
          borderColor: 'black',
          padding: 8,
          marginBottom: 32,
        }}
      />
      <TouchableOpacity
        style={{backgroundColor: '#3385FF', borderRadius: 8}}
        onPress={handleLogin}>
        <Text style={{color: 'white', textAlign: 'center', padding: 16}}>
          Login
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
