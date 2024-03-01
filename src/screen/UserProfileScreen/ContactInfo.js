import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, memo} from 'react';

import styles from './styles';

const ContactInfo = props => {
  console.log('contact info got rerendered');

  const [userCell, setUserCell] = useState(props.cell);
  const [userEmail, setUserEmail] = useState(props.email);

  return (
    <>
      <TextInput
        value={userCell}
        onChangeText={ct => {
          setUserCell(ct);
        }}
        placeholder="Cell No"
        style={styles.textinput}
      />
      <TextInput
        value={userEmail}
        onChangeText={ct => {
          setUserEmail(ct);
        }}
        placeholder="Email"
        style={styles.textinput}
      />
    </>
  );
};

export default memo(ContactInfo);
