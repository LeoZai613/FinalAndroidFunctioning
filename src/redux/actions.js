// redux/actions.js
export const FETCH_POKEMON_DATA_REQUEST = 'FETCH_POKEMON_DATA_REQUEST';
export const FETCH_POKEMON_DATA_SUCCESS = 'FETCH_POKEMON_DATA_SUCCESS';
export const FETCH_POKEMON_DATA_FAILURE = 'FETCH_POKEMON_DATA_FAILURE';

export const fetchPokemonDataRequest = () => ({
  type: FETCH_POKEMON_DATA_REQUEST,
});

export const fetchPokemonDataSuccess = data => ({
  type: FETCH_POKEMON_DATA_SUCCESS,
  payload: data,
});

export const fetchPokemonDataFailure = error => ({
  type: FETCH_POKEMON_DATA_FAILURE,
  payload: error,
});
