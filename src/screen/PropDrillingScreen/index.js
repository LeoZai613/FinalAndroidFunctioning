import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, createContext, useContext, memo} from 'react';
import Component1 from './C1';
// const UserContext = createContext();

const PropDrillingScreen = () => {
  return (
    <View>
      <Text>index</Text>
      <Component1 />
    </View>
  );
};

export default PropDrillingScreen;

const styles = StyleSheet.create({});
