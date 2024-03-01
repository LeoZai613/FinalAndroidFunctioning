import {Button, Text, View} from 'react-native';
import React, {Component, PureComponent} from 'react';
import _ from 'lodash';

export class PracClassComp extends Component {
  someCounter = 0;

  constructor(props) {
    super(props);

    this.state = {
      datetime: Date.now(),
    };

    console.log('this is constructor');
  }

  componentDidMount() {
    console.log('this is componentdidmount');

    //user profile feature
    //score card api calls
    //settings api calls
    //whatever features api calls
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('this is shouldcomponentupdate');
    // console.log(nextProps);
    return false;
    // return !_.isEqual(nextProps, this.props);
    // return nextProps.firstProp !== this.props.firstProp;
    // return (
    //   nextProps.userObject.addressObject.streetNumber !==
    //   this.props.userObject.addressObject.streetNumber
    // );
  }

  componentDidUpdate(prevProps) {
    console.log('this is componentdidupdate');

    //u checking your props changes in user object
    //u checking your props changes in your settings object
    //u checking your props changes in your scorecard object

    // console.log(prevProps);
    // console.log(this.props);

    // if (!_.isEqual(prevProps.changedTextVal, this.props.changedTextVal)) {
    //   console.log('changedTextVal has changed');
    //   //invoke some api
    // }

    // if (
    //   !_.isEqual(
    //     prevProps.anotherChangedTextVal,
    //     this.props.anotherChangedTextVal,
    //   )
    // ) {
    //   console.log('anotherChangedTextVal has changed');
    //   //invoke some other api
    // }
  }

  render() {
    // console.log('this is render');

    return (
      <View style={{backgroundColor: 'yellow'}}>
        <Text>PracClassComp</Text>
        <Text>{this.props.firstProp}</Text>
        <Text>My Counter: {this.someCounter}</Text>
        <Button
          title={'Increment'}
          onPress={() => {
            this.someCounter = this.someCounter + 1;

            console.log(this.someCounter);

            this.setState({datetime: Date.now()});
          }}
        />
      </View>
    );
  }
}

export default PracClassComp;
