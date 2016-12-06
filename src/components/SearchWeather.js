import React from 'react';

export default function SearchWeather(props) {
  const { actions } = props;

  let inputText;

  const _fetchWeather = () => {
    const city = inputText.value;
    actions.fetchWeather(city);
  }

  const _handleInput = event => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which === 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      actions.fetchWeather(text);
      input.value = '';
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a place or city"
        ref={el => inputText = el}
        onKeyDown={_handleInput} />
      <button onClick={_fetchWeather}>
        GO!
      </button>
    </div>
  );
}