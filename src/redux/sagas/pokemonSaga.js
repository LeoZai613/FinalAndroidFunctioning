// redux/sagas/pokemonSaga.js
import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_POKEMON_DATA_REQUEST,
  fetchPokemonDataSuccess,
  fetchPokemonDataFailure,
} from '../actions';

function* fetchPokemonData() {
  try {
    const response = yield call(
      axios.get,
      'https://pokeapi.co/api/v2/pokemon?limit=151',
    );
    yield put(fetchPokemonDataSuccess(response.data.results));
  } catch (error) {
    yield put(fetchPokemonDataFailure(error.message));
  }
}

export function* watchPokemonData() {
  yield takeLatest(FETCH_POKEMON_DATA_REQUEST, fetchPokemonData);
}
