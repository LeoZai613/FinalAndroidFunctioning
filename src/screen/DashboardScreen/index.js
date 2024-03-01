import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  Button,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import {Buffer} from 'buffer'; // Import Buffer for base64 encoding

const Dashboard = ({navigation}) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const publicKey =
      '795aff7b244ea2c753ab1ace46edff443e706c972caae005e8bd908f8436711c';

    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=151',
          {
            // Configure SSL pinning
            httpsAgent: {
              key: Buffer.from(publicKey, 'hex').toString('base64'),
            },
          },
        );

        const promises = response.data.results.map(async pokemon => {
          const pokemonInfo = await axios.get(pokemon.url, {
            // Configure SSL pinning
            httpsAgent: {
              key: Buffer.from(publicKey, 'hex').toString('base64'),
            },
          });
          return pokemonInfo.data;
        });

        const pokemonDetails = await Promise.all(promises);
        setPokemonData(pokemonDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  const handleLogout = () => {
    // Assuming you have a navigation system in place and 'Home' is the route name for your home screen
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://w0.peakpx.com/wallpaper/204/837/HD-wallpaper-gengar-ghost-pokemon.jpg',
      }}
      style={{flex: 1, padding: 20}}>
      <View>
        <Button title="Logout" onPress={handleLogout} />
        <FlatList
          data={pokemonData}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                padding: 20,
                marginBottom: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: 'white',
                  fontFamily: 'Pokemon-Classic',
                  marginBottom: 5,
                }}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
              <Image
                source={{uri: item.sprites.front_default}}
                style={{width: 120, height: 120, marginBottom: 10}}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Pokemon-Classic',
                }}>
                Type:{' '}
                {item.types.map(typeInfo => typeInfo.type.name).join(', ')}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Pokemon-Classic',
                }}>
                Abilities:{' '}
                {item.abilities
                  .map(abilityInfo => abilityInfo.ability.name)
                  .join(', ')}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Pokemon-Classic',
                }}>
                Moves:{' '}
                {item.moves
                  .slice(0, 4)
                  .map(moveInfo => moveInfo.move.name)
                  .join(', ')}
              </Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Dashboard;
