import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

const UserControl = props => {
  useEffect(() => {
    console.log('useeffect with first case');
  }, []);

  useEffect(() => {
    console.log('HEY! first name just got changed');
  }, [props.firstName]);

  useEffect(() => {
    console.log('HEY! last name just got changed');
  }, [props.lastName]);

  useEffect(() => {
    console.log('fourth one got run');
  });

  console.log('usercontrol got rerendered');

  const {firstName, lastName, changePropPassing} = props;

  return (
    <View style={{backgroundColor: 'pink'}}>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>

      <TouchableOpacity
        onPress={() => {
          changePropPassing('Firdous', 'Ali');
        }}>
        <Text>Change the props value</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserControl;

const styles = StyleSheet.create({});
