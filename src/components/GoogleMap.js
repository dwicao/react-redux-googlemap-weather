import React from 'react';

export default class GoogleMap extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 10
    });

    this.map.addListener('click', function(e) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      this.props.actions.fetchWeatherByCoord(lat, lng);
    }.bind(this));

  }

  render() {
    return (
      <div>
      <div id="map" ref="map" />
      </div>
    );
  }
}