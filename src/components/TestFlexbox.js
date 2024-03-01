import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const TestFlexbox = () => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flex: 4, backgroundColor: 'red'}}>
        <View
          style={{margin: 10, backgroundColor: 'white', flexDirection: 'row'}}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'blue',
            }}></View>
          <View style={{flex: 1, backgroundColor: 'grey'}}>
            <Text>Name</Text>
            <Text>Contact</Text>
            <Text>Education</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 6, backgroundColor: 'pink'}}></View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          left: 10,
          top: 300,
          backgroundColor: 'green',
          width: 70,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title="Chat"
        onPress={() => {}}>
        <Text>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestFlexbox;

const styles = StyleSheet.create({});
