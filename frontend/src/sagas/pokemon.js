import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { MOUNTED, received } from '../ducks/pokemon';

export function* getPokemon() {
  const result = yield call(axios.get, 'http://localhost:41002/pokemons');
  yield put(received(result.data));
}

export default function* pokemonSagas() {
  yield takeLatest(MOUNTED, getPokemon);
}
