// redux/reducers.js
import {combineReducers} from 'redux';
import {
  FETCH_POKEMON_DATA_REQUEST,
  FETCH_POKEMON_DATA_SUCCESS,
  FETCH_POKEMON_DATA_FAILURE,
} from './actions';

const initialState = {
  pokemonData: [],
  loading: false,
  error: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_DATA_REQUEST:
      return {...state, loading: true};
    case FETCH_POKEMON_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonData: action.payload,
        error: null,
      };
    case FETCH_POKEMON_DATA_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;
