import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../actions/weatherActions';

import GoogleMap from './GoogleMap';
import SearchWeather from './SearchWeather';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  _getLat() {
    const defaultLat = -7.98;
    const lat = this.props.weather.coord.lat;

    return lat ? lat : defaultLat;
  }

  _getLng() {
    const defaultLng = 112.63;
    const lng = this.props.weather.coord.lon;

    return lng ? lng : defaultLng;
  }

  render() {
    return (
      <div>
        <SearchWeather
          {...this.props} />
        <GoogleMap
          lat={this._getLat()}
          lng={this._getLng()} 
          {...this.props} />
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
