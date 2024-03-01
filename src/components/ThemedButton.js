import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ThemedButton = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 3,
  },
  text: {color: 'orange'},
});
