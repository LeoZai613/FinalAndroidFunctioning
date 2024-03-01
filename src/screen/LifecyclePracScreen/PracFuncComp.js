import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState, memo} from 'react';

const PracFuncComp = props => {
  const [dateTime, setDateTime] = useState(Date.now());
  let someCounter = 0;

  useEffect(() => {
    console.log('this is useeffect a.k.a componentdidmount');
  }, []);

  useEffect(() => {
    console.log('this is useeffect a.k.a componentdidupdate');
  }, [props.firstProp]);

  useEffect(() => {
    console.log('this is useeffect a.k.a componentdidupdate');
  }, [props.secondProp]);

  console.log('functional component got rerendered');

  return (
    <View style={{backgroundColor: 'blue'}}>
      <Text>PracFuncComp</Text>
      <Text>{props.firstProp}</Text>
      <Text>My Counter: {someCounter}</Text>
      <Button
        title={'Increment'}
        onPress={() => {
          someCounter = someCounter + 1;

          console.log(someCounter);

          // this.setState({datetime: Date.now()});
          setDateTime(Date.now());
        }}
      />
    </View>
  );
};

export default memo(PracFuncComp, (prevProps, nextProps) => {
  return prevProps.firstProp === nextProps.firstProp;
});

const styles = StyleSheet.create({});
