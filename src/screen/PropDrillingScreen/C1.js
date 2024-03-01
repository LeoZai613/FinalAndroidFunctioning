import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Component2 from './C2';
import {UserContextProvider} from '../../contexts/UserContext';

const C1 = () => {
  const [user, setUser] = useState('Jesse Hall');

  console.log('Component1');

  return (
    <View style={{backgroundColor: 'red', margin: 5}}>
      <Text>{`Hello ${user}!`}</Text>
      <TextInput
        value={user}
        onChangeText={ct => {
          setUser(ct);
        }}
        placeholder="User"
        style={{backgroundColor: 'white', height: 60, margin: 5}}
      />
      <UserContextProvider value={user}>
        <Component2 />
      </UserContextProvider>
    </View>
  );
};

export default C1;

const styles = StyleSheet.create({});
