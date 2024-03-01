import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import Component3 from './C3';

const c2 = () => {
  console.log('Component2');
  return (
    <View style={{backgroundColor: 'blue', margin: 5}}>
      <Text>Component 2</Text>
      <Component3 />
    </View>
  );
};

export default memo(c2);

const styles = StyleSheet.create({});
