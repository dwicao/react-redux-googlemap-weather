import React from 'react';

export default class GoogleMap extends React.Component {
  shouldComponentUpdate() {
    // This component must render one time only
    // and never render it again
    return false;
  }

  componentWillReceiveProps(nextProps) {
    const nextLatLng = { lat: nextProps.lat, lng: nextProps.lng };

    // Center map to next latitude and longtitude
    this.map.panTo(nextLatLng);

    // Set map position on current clicked area
    this.marker.setPosition(nextLatLng);
  }

  componentDidMount() {
    const myLatLng = { lat: this.props.lat, lng: this.props.lng };

    // Create new Map and center it with default coordinates
    this.map = new google.maps.Map(this.refs.map, {
      center: myLatLng,
      zoom: 10
    });

    // Create new Marker
    this.marker = new google.maps.Marker({
      map: this.map
    });

    // Event if Map is clicked
    this.map.addListener('click', (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      // Fetch weather by current coordinates
      this.props.actions.fetchWeatherByCoord(lat, lng);
    });

  }

  render() {
    return (
      <div>
      <div id="map" ref="map" />
      </div>
    );
  }
}