import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState, memo} from 'react';

import styles from './styles';

const LocationInfo = props => {
  console.log('location info got rerendered');

  const [userCity, setUserCity] = useState(props.city);
  const [userCountry, setUserCountry] = useState(props.country);

  return (
    <>
      <TextInput
        value={userCity}
        onChangeText={ct => {
          setUserCity(ct);
        }}
        placeholder="City"
        style={styles.textinput}
      />
      <TextInput
        value={userCountry}
        onChangeText={ct => {
          setUserCountry(ct);
        }}
        placeholder="Country"
        style={styles.textinput}
      />

      <Button
        title={'Just for usecase'}
        onPress={() => {
          props.onTestBtnTap();
        }}
      />
    </>
  );
};

export default memo(LocationInfo);
