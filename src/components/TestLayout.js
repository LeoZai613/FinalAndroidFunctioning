// TestLayout.js
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import ThemedButton from './ThemedButton';
import ItemCell from './ItemCell';

const myButtons = ['Home'];
// Removed the textDescription from dataList
const dataList = [];

const TestLayout = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcAR_PUrrsp3GYmPyMD4DuqabPiyjT1UhL74cTHVL_dPRINVVEsIiYGJKRSJwpQ_O0J0&usqp=CAU',
      }}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
        <View
          style={{
            height: 70,
            backgroundColor: 'rgba(128, 0, 128, 0.8)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Apply the custom font inline */}
          <Text
            style={{
              fontFamily: 'Pokemon-Classic',
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Pokedex
          </Text>
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: 'rgba(211, 211, 211, 0.5)',
            flexDirection: 'row',
          }}>
          {myButtons.map(thisEl => {
            return <ThemedButton title={thisEl} key={thisEl} />;
          })}
        </View>
        <View style={{flex: 1, backgroundColor: 'transparent', padding: 16}}>
          {/* Removed the image and related text */}
          <ScrollView style={{flex: 1}}>
            {dataList.map(thisEl => {
              return <ItemCell {...thisEl} key={thisEl.textDescription} />;
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TestLayout;
