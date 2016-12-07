import React from 'react';

export default function SearchWeather(props) {
  const { actions } = props;

  let inputText;

  const _handleButton = () => {
    const city = inputText.value;
    if(city.length > 0) {
      actions.fetchWeatherByCity(city);
      inputText.value = '';
    }
  }

  const _handleInput = event => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which === 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      actions.fetchWeatherByCity(text);
      input.value = '';
    }
  }

  return (
    <div className="searchWeather">
      <input
        type="text"
        placeholder="Enter a place or city"
        ref={el => inputText = el}
        onKeyDown={_handleInput} />
      <button onClick={_handleButton}>
        GO!
      </button>
    </div>
  );
}