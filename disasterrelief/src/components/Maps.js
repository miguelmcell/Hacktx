import  'reactstrap';
import { BrowserRouter as Router, Route, Link , Switch,BrowserHistory } from 'react-router-dom';
import React, { Component } from 'react';
import {Marker, Map} from './Marker.js';
import './Marker.css';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
// import Marker from './Marker.js'
Geocode.setApiKey("AIzaSyB3ZebS_qbJIYPHUCz9pYZPVTFwJ2j2zZc");

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
  constructor(props) {
    super(props);
    this.getState = this.getState.bind(this);
    this.getInformation = this.getInformation.bind(this);
    this.state = {
			stateName: '',
      intro: 'Please select a state to search',
      lat: 39.31794050576279,
      lng: -100.94481055798371
		};
  }
  getInformation(){
    // type
    // &keyword=cruise
    const axios = require('axios').default;
    // let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='
    // url += this.state.lat + ',' + this.state.lng + '&radius=1500&type=' + '&key=AIzaSyBg4GQQdNSceQbeOmVi5hpbYlAi7FIQvJc';
    let url = 'http://disasterinfo.tk/v1/findstate/' + this.state.stateName;
    console.log(url);
    axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  }

  getState(lat, long) {
    let states = {
        'AK': 'Alaska',
        'AL': 'Alabama',
        'AR': 'Arkansas',
        'AS': 'American_Samoa',
        'AZ': 'Arizona',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DC': 'District_of_Columbia',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'GU': 'Guam',
        'HI': 'Hawaii',
        'IA': 'Iowa',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'MA': 'Massachusetts',
        'MD': 'Maryland',
        'ME': 'Maine',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MO': 'Missouri',
        'MP': 'Northern_Mariana_Islands',
        'MS': 'Mississippi',
        'MT': 'Montana',
        'NA': 'National',
        'NC': 'North_Carolina',
        'ND': 'North_Dakota',
        'NE': 'Nebraska',
        'NH': 'New_Hampshire',
        'NJ': 'New_Jersey',
        'NM': 'New_Mexico',
        'NV': 'Nevada',
        'NY': 'New_York',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylvania',
        'PR': 'Puerto_Rico',
        'RI': 'Rhode_Island',
        'SC': 'South_Carolina',
        'SD': 'South_Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VA': 'Virginia',
        'VI': 'Virgin_Islands',
        'VT': 'Vermont',
        'WA': 'Washington',
        'WI': 'Wisconsin',
        'WV': 'West_Virginia',
        'WY': 'Wyoming'
      }
    // console.log("getting state " + lat + " ," + long);
    Geocode.fromLatLng(lat, long).then(
      response => {
        let address = response.results[0].formatted_address.split(',');
        if (address.length >= 3){
          address = address[2].split(' ')[1];
          if (address == 'USA'){
            console.log('try again' );
          }
          else{
            console.log(states[address]);
            this.setState(state => ({
	              stateName: states[address],
                intro: '',
                lat: lat,
                lng: long
            }));
          }
        }
        else{
          console.log(address + ' is not valid');
        }
      },
      error => {
        console.error(error);
      }
    );
  }
  state = {
    activeMarker: {},          //Shows the active marker upon click
  };
  static defaultProps = {
    center: {
      lat: 39.31794050576279,
      lng: -100.94481055798371
    },
    zoom: 5
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          onClick={({x, y, lat, lng, event}) => {this.getState(lat,lng)} }
          bootstrapURLKeys={{ key: 'AIzaSyB3ZebS_qbJIYPHUCz9pYZPVTFwJ2j2zZc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Marker lat={this.state.lat} lng={this.state.lng} />
        </GoogleMapReact>
        <p class="display-2" style={{fontSize: '20px',color:'black',textAlign: 'center'}}>
        {this.state.intro}
        </p>
        <p class="display-2" style={{fontSize: '40px',textAlign: 'center'}}>
        {this.state.stateName}
        </p>
        <button type="button" onClick={this.getInformation} class="btn btn-light" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>Search</button>
      </div>
    );
  }
}

export default SimpleMap;
