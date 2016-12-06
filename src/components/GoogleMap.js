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
  }

  render() {
    const mapStyle = {
      height: '500px',
      width: '500px',
    };

    return (
      <div id="map" ref="map" style={mapStyle} />
    );
  }
}