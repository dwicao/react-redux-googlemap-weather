import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../actions/weatherActions';

import SearchWeather from './SearchWeather';
import GoogleMap from './GoogleMap';
import InfoWeather from './InfoWeather';

import '../styles/main.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  _getLat() {
    const {weather} = this.props;
    const isEmpty = Object.keys(weather).length === 0;
    const defaultLat = -7.98;

    return isEmpty ? defaultLat : weather.coord.lat;
  }

  _getLng() {
    const {weather} = this.props;
    const isEmpty = Object.keys(weather).length === 0;
    const defaultLng = 112.63;

    return isEmpty ? defaultLng : weather.coord.lon;
  }

  render() {
    return (
      <div>
        <SearchWeather
          {...this.props} />
          <pre style={{ position: 'absolute' }}>
            {JSON.stringify(this.props.weather, null, 2)}
          </pre>
        <GoogleMap
          lat={this._getLat()}
          lng={this._getLng()}
          {...this.props} />
        <InfoWeather {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

function mapDispatchToProps(dispath) {
  return {
    actions: bindActionCreators(weatherActions, dispath)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
