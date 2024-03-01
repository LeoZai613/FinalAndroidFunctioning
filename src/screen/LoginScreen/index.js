import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  const navigateToChat = () => {
    navigation.navigate('ChatScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <TouchableOpacity onPress={navigateToChat} style={styles.chatButton}>
        <Text style={styles.buttonText}>Go to Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  chatButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default UserProfileScreen;
