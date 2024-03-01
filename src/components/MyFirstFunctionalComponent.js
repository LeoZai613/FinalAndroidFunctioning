import {View, Text} from 'react-native';

export const MyFirstFunctionalComponent = props => {
  const {myname, myCell} = props;

  console.log(myname, myCell);

  return (
    <Text>
      this is my first functional component. {myname} {myCell}
    </Text>
  );
};

// export MyFirstFunctionalComponent;

export const MySecondFunctionalComponent = () => {
  return <Text>this is my second functional component</Text>;
};

export default MyThirdFunctionalComponent = () => {
  return <Text>this is my third functional component</Text>;
};
