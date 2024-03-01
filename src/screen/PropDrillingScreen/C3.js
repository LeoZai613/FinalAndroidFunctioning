import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Component4 from './C4';

const C3 = () => {
  console.log('Component3');
  return (
    <View style={{backgroundColor: 'green', margin: 5}}>
      <Text>Component 3</Text>
      <Component4 />
    </View>
  );
};

export default C3;

const styles = StyleSheet.create({});
