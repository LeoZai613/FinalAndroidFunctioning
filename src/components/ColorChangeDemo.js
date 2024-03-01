import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const ColorChangeDemoF = props => {
  const [bgColor, setBGColor] = useState(props.backgroundColor);

  return (
    <View style={{backgroundColor: bgColor}}>
      <Text>ColorChangeDemo Functional</Text>

      <Button
        title={'Change to Blue'}
        onPress={() => {
          setBGColor('blue');
        }}
      />

      <Button
        title={'Change to Orange'}
        onPress={() => {
          setBGColor('orange');
        }}
      />
      {props.children}
    </View>
  );
};

class ColorChangeDemoC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {backgroundColor: props.backgroundColor};
  }

  render() {
    const {backgroundColor} = this.state;

    return (
      <View style={{backgroundColor: backgroundColor}}>
        <Text>ColorChangeDemo Class</Text>

        <Button
          title={'Change color to Yellow'}
          onPress={() => {
            this.setState({backgroundColor: 'yellow'});
          }}
        />
        <Button
          title={'Change color to Pink'}
          onPress={() => {
            this.setState({backgroundColor: 'pink'});
          }}
        />
        <View>{this.props.children}</View>
      </View>
    );
  }
}

export {ColorChangeDemoF, ColorChangeDemoC};
