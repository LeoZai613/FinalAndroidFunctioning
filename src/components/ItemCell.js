import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ItemCell = props => {
  const {image, textDescription, buttonText} = props;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={{uri: image}} />
      </View>
      <View style={styles.textContainer}>
        <Text>{textDescription}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCell;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    backgroundColor: 'white',
    margin: 7,
    padding: 10,
  },
  imageContainer: {flex: 1},
  imageStyle: {flex: 1},
  textContainer: {flex: 1, marginTop: 10},
  buttonContainer: {height: 50},
  buttonStyle: {
    flex: 1,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
