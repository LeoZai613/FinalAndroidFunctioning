// redux/sagas.js
import {all} from 'redux-saga/effects';
import {watchPokemonData} from './sagas/pokemonSaga';

export default function* rootSaga() {
  yield all([
    watchPokemonData(),
    // Add more sagas here if needed
  ]);
}
