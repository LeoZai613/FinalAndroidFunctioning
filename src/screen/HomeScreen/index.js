// HomePageScreen.js
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TestLayout from '../../components/TestLayout';
import styles from './styles';

const HomePageScreen = props => {
  const {navigation, route} = props;

  useEffect(() => {
    if (route.params) {
      console.log(route.params);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <TestLayout />
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            sessionName: 'React Native',
            BatchNumber: 5,
          });
        }}
        style={styles.button1}>
        <Text>Navigate Details Screen</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity
        onPress={() => {
          navigation.push('Details');
        }}
        style={styles.button1}>
        <Text>Push Details Screen</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate('LifecyclePrac');
        }}
        style={styles.button1}>
        <Text>LifecyclePrac</Text>
      </TouchableOpacity> */}

      {/* Added button to navigate to Signup screen */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signup');
        }}
        style={styles.button1}>
        <Text>Sign Up</Text>
      </TouchableOpacity>

      {/* Added button to navigate to Login screen */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.button1}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePageScreen;
