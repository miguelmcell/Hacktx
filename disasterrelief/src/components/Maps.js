import { Jumbotron, Container, Card, Button, CardImg, CardTitle, CardText,
        CardHeader, CardDeck, CardColumns, CardSubtitle, CardBody,
        Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Route, Link , Switch,BrowserHistory } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact, {Marker} from 'google-map-react';
// import Marker from './Marker.js'

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class SimpleMap extends Component {
  state = {
    activeMarker: {},          //Shows the active marker upon click
  };
  static defaultProps = {
    center: {
      lat: 60.95,
      lng: 30.33
    },
    zoom: 11
  };

  // onMarkerClick = (marker, lat, lng) =>
  //   this.setState({
  //     activeMarker: marker,
  //     lat:console.log(lat),
  //     lng:console.log(lng)
  // });
  // _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event);

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          onClick={({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)}
          bootstrapURLKeys={{ key: 'AIzaSyB3ZebS_qbJIYPHUCz9pYZPVTFwJ2j2zZc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
