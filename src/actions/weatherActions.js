import * as types from './actionTypes';
import axios from 'axios';

const KEY = '07e55bc54f30dd8c3e359fb55ebcc11f';

export function fetchWeatherByCity(city) {
  const request = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${KEY}`);

  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({ type: types.FETCH_WEATHER_BY_CITY, payload: data })
    });
  }
}

export function fetchWeatherByCoord(lat, lon) {
  const request = axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}`);

  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({ type: types.FETCH_WEATHER_BY_COORD, payload: data })
    });
  }
}