import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, memo} from 'react';

import styles from './styles';

const PersonalInfo = props => {
  console.log('Personal info got rerendered');

  const [userFirstName, setUserFirstName] = useState(props.firstName);
  const [userLastName, setUserLastName] = useState(props.lastName);

  return (
    <>
      <TextInput
        value={userFirstName}
        onChangeText={changedText => {
          setUserFirstName(changedText);
        }}
        placeholder="First Name"
        style={styles.textinput}
      />
      <TextInput
        value={userLastName}
        onChangeText={ct => {
          setUserLastName(ct);
        }}
        placeholder="Last Name"
        style={styles.textinput}
      />
    </>
  );
};

export default memo(PersonalInfo);
