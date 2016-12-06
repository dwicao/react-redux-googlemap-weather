import * as types from '../actions/actionTypes';

export default function weatherReducer(state = {}, action) {
  switch(action.type) {

    case types.FETCH_WEATHER:
      return Object.assign({}, action.payload);

    default:
      return state;
  }

}