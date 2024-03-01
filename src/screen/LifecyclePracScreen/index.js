import {Text, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import PracClassComp from './PracClassComp';
import PracFuncComp from './PracFuncComp';

export class LifecyclePracScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: '',
      anotherTextValue: '',
    };
  }

  render() {
    return (
      <View>
        <Text>index</Text>
        <TextInput
          value={this.state.textValue}
          onChangeText={ct => {
            this.setState({textValue: ct});
          }}
          placeholder="text value"
        />
        <TextInput
          value={this.state.anotherTextValue}
          onChangeText={ct => {
            this.setState({anotherTextValue: ct});
          }}
          placeholder="another Text Value"
        />
        <PracClassComp
          firstProp={this.state.textValue}
          secondProp={this.state.anotherTextValue}
        />
        <PracFuncComp
          firstProp={this.state.textValue}
          secondProp={this.state.anotherTextValue}
        />
      </View>
    );
  }
}

export default LifecyclePracScreen;
