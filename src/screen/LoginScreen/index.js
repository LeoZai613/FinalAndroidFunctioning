import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    auth().signOut();
  }, []);

  const loginUser = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('UserProfile');
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleFacebookLogin = async accessToken => {
    try {
      const credential = auth.FacebookAuthProvider.credential(accessToken);
      await auth().signInWithCredential(credential);
      navigation.navigate('UserProfile');
    } catch (error) {
      console.error('Firebase login error:', error);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
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
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={loginUser}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('Facebook login error:', error);
          } else if (result.isCancelled) {
            console.log('Facebook login was cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              if (data) {
                handleFacebookLogin(data.accessToken.toString());
              }
            });
          }
        }}
        onLogoutFinished={() => console.log('User logged out')}
      />
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
  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  loginButton: {
    backgroundColor: 'blue',
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
  forgotPassword: {
    marginTop: 10,
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default LoginScreen;
