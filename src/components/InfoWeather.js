import React, { PropTypes } from 'react';

export default function InfoWeather(props) {
  const { actions, weather } = props;

  const isEmpty = Object.keys(weather).length === 0;

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const kelvinToCelcius = (temperature) => {
    return Math.floor( Number(temperature) - 273.15 );
  }

  const sliceToTwoWords = (str) => {
    const arrayOfStr = str.split(' ');
    const onlyTwoWords = arrayOfStr.splice(0, 2);
    const newStr = onlyTwoWords.join(' ');

    if (arrayOfStr.length <= 2) {
      return str;
    }

    return newStr + '...';
  }

  if(isEmpty) {
    return (
      <div className="infoWeather_isEmpty">
        <span className="infoWeather_isEmpty_text">
          Click area on map or use search box above!
        </span>
      </div>
    );
  }

  return (
    <div className="infoWeather_container">
      <div className="infoWeather_icon_container">
        <img 
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          className="infoWeather_icon" />
        <div className="infoWeather_text">
          <span className="infoWeather_temperature">
            {kelvinToCelcius( weather.main.temp )}
            &deg;
            {'C'}
          </span>
          <div className="infoWeather_weatherInfo">
            {capitalizeFirstLetter( weather.weather[0].description )}
          </div>
        </div>
      </div>
      <div className="infoWeather_cityName">
        {sliceToTwoWords( weather.name )}
      </div>

    </div>
  );
}

InfoWeather.propTypes = {
  actions: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired
};