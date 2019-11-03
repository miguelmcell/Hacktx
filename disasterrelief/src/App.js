import React from 'react';
import './App.css';
import { Jumbotron, Container, Card, Button, CardImg, CardTitle, CardText,
        CardHeader, CardDeck, CardColumns, CardSubtitle, CardBody,
        Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Route, Link , Switch,BrowserHistory } from 'react-router-dom';
import SimpleMap from './components/Maps.js'
// import Marker from './components/Marker.js'

export default class Home extends React.Component {
  render (){
    return (

      <div>
        <div className="bg">
          <Container style={{color: 'white', paddingTop: '3rem'}}>
            <h3>Welcome</h3>
            <br/>
            <p>The purpose of this website is to show our disaster recover and relief estimator.  It uses a combination of React, GCP, MonogoDB,
               and possibly Azure in the future.
            <br/>
            <br/></p>
          </Container>
        </div>
      </div>
    );
  }
}
