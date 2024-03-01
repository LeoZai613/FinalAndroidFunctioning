import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import ThemedButton from './ThemedButton';
import ItemCell from './ItemCell';

const myButtons = ['Home'];
const dataList = [];

const TestLayout = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF', // Set background color to white
        }}>
        <Text
          style={{
            fontFamily: 'Pokemon-Classic',
            color: '#000000', // Set text color to black
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Final Project
        </Text>
      </View>
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          backgroundColor: '#FFFFFF', // Set background color to white
        }}>
        {myButtons.map(thisEl => {
          return <ThemedButton title={thisEl} key={thisEl} />;
        })}
      </View>
      <View style={{flex: 1, padding: 16}}>
        <ScrollView style={{flex: 1}}>
          {dataList.map(thisEl => {
            return <ItemCell {...thisEl} key={thisEl.textDescription} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TestLayout;
