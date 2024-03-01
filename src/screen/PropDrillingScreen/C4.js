import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Component5 from './C5';

const C4 = () => {
  console.log('Component4');
  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <Text>Component 4</Text>
      <Component5 />
    </View>
  );
};

export default C4;

const styles = StyleSheet.create({});
