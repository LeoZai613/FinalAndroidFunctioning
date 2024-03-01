import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth'; // Import Firebase Auth
import firestore from '@react-native-firebase/firestore'; // Import Firestore

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); // Default role is customer

  const handleSignup = async () => {
    try {
      // Create user with email and password
      await auth().createUserWithEmailAndPassword(email, password);

      // Save user role to Firestore or any other database
      // Here you would save the user's email, password, and role information
      // For simplicity, let's assume you have a Firestore collection named "users"
      await firestore().collection('users').doc(email).set({
        email,
        password,
        role,
      });

      // Navigate to the appropriate screen based on the role
      navigation.navigate(
        role === 'customer' ? 'CustomerScreen' : 'EmployeeScreen',
      );
    } catch (error) {
      console.error('Signup failed:', error.message);
      alert('Failed to create user. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter Email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter Password"
        secureTextEntry
        style={styles.input}
      />
      {/* Role selection options */}
      <View style={styles.roleSelection}>
        <Text style={styles.roleLabel}>Select Role:</Text>
        <TouchableOpacity
          style={[
            styles.roleButton,
            role === 'customer' && styles.selectedRole,
          ]}
          onPress={() => setRole('customer')}>
          <Text style={styles.roleButtonText}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.roleButton,
            role === 'employee' && styles.selectedRole,
          ]}
          onPress={() => setRole('employee')}>
          <Text style={styles.roleButtonText}>Employee</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: 'black', // text color
  },
  signupButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  roleSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  roleLabel: {
    color: 'black',
    marginRight: 10,
  },
  roleButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  roleButtonText: {
    color: 'white',
  },
  selectedRole: {
    backgroundColor: 'green',
  },
});

export default SignupScreen;
