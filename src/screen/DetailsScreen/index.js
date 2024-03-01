import React, {useState} from 'react';
import {View, Text, Button, TextInput, FlatList, Modal} from 'react-native';
import styles from './styles';
import UserControl from './UserControl';

const DetailsScreen = ({navigation, route}) => {
  const {sessionName, BatchNumber} = route.params;
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [savedPokemonName, setSavedPokemonName] = useState('');
  const [savedPokemonInfo, setSavedPokemonInfo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'pink',
          margin: 5,
          height: 70,
          borderRadius: 8,
        }}>
        <Text>{item.carName}</Text>
      </View>
    );
  };

  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            width: 300,
            height: 500,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey',
          }}>
          <View>
            <Text>Test Modal</Text>
            <Text>Sample text</Text>
          </View>
          <Button
            title={'Hide Modal'}
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    );
  };

  const renderFlatList = () => {
    return (
      <FlatList
        data={[
          {carName: 'Alakazam'},
          {carName: 'Gengar'},
          {carName: 'Hypno'},
          {carName: 'Arcanine'},
          {carName: savedPokemonName},
        ]}
        renderItem={renderItem}
      />
    );
  };

  return (
    <View>
      <UserControl
        firstName={fName}
        lastName={lName}
        changePropPassing={(newFirstName, newLastName) => {
          setFName(newFirstName);
          setLName(newLastName);
        }}
      />

      <TextInput
        value={fName}
        placeholder="Favorite Pokemon"
        onChangeText={ct => {
          setFName(ct);
        }}
      />
      <TextInput
        value={lName}
        placeholder="Pokemon Info"
        onChangeText={ct => {
          setLName(ct);
        }}
      />

      <Text>Place your favorite Pokemon's name and info here ^__^</Text>

      <Button
        title={'Save Pokemon Name and Info'}
        onPress={() => {
          setSavedPokemonName(fName);
          setSavedPokemonInfo(lName);
        }}
      />

      <Text>Saved Pokemon Name: {savedPokemonName}</Text>
      <Text>Saved Pokemon Info: {savedPokemonInfo}</Text>

      {/* Rest of the code remains the same */}
    </View>
  );
};

export default DetailsScreen;
