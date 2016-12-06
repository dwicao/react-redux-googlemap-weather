import * as types from './actionTypes';
import axios from 'axios';

const KEY = '07e55bc54f30dd8c3e359fb55ebcc11f';

export function fetchWeather(city) {
  const request = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${KEY}`);

  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({ type: types.FETCH_WEATHER, payload: data })
    });
  }
}