import React from 'react';

export default function InfoWeather(props) {
  const { actions, weather } = props;

  const isEmpty = Object.keys(weather).length === 0;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if(isEmpty) {
    return (
      <div className="infoWeather">
        Click area on map or use search box above
      </div>
    );
  }

  return (
    <div className="infoWeather">
      <div>{weather.name}</div>
      <div>{capitalizeFirstLetter(weather.weather[0].description)}</div>
      <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />
    </div>
  );
}