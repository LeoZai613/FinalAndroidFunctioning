import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useUserContext} from '../../contexts/UserContext';

const C5 = () => {
  //   const user = useContext(UserContext);
  const user = useUserContext();

  console.log('Component5');
  return (
    <View style={{backgroundColor: 'pink', margin: 5}}>
      <Text>Component 5</Text>
      <Text>{`Hello ${user} again!`}</Text>
    </View>
  );
};

export default C5;

const styles = StyleSheet.create({});
