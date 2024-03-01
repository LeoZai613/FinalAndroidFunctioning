import {Text, StyleSheet, View, TextInput} from 'react-native';
import React, {Component} from 'react';

class UserProfileComponentC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userFirstName: props.firstName,
      userLastName: props.lastName,
      userCell: props.cell,
      userEmail: props.email,
      userCity: props.city,
      userCountry: props.country,
    };
  }

  render() {
    console.log('USER PROFILE CLASS COMPONENT GOT RERENDERED');

    const {
      userFirstName,
      userLastName,
      userCell,
      userEmail,
      userCity,
      userCountry,
    } = this.state;

    return (
      <View>
        <TextInput
          value={userFirstName}
          onChangeText={changedText => {
            this.setState({userFirstName: changedText});
          }}
          placeholder="Last Name"
        />
        <TextInput
          value={userLastName}
          onChangeText={changedText => {
            this.setState({userLastName: changedText});
          }}
          placeholder="Cell"
        />
        <TextInput
          value={userCell}
          onChangeText={ct => {
            this.setState({userCell: ct});
          }}
          placeholder="Email"
        />
        <TextInput
          value={userEmail}
          onChangeText={ct => {
            this.setState({userEmail: ct});
          }}
          placeholder="City"
        />
        <TextInput
          value={userCity}
          onChangeText={changedText => {
            this.setState({userCity: changedText});
          }}
          placeholder="Country"
        />
        <TextInput
          value={userCountry}
          onChangeText={changedText => {
            this.setState({userCountry: changedText});
          }}
          placeholder="Country"
        />
      </View>
    );
  }
}

export default UserProfileComponentC;

const styles = StyleSheet.create({});
