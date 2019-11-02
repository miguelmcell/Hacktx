import React from 'react';
import './App.css';
import { Jumbotron, Container, Card, Button, CardImg, CardTitle, CardText,
        CardHeader, CardDeck, CardColumns, CardSubtitle, CardBody,
        Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Route, Link , Switch,BrowserHistory } from 'react-router-dom';

export default class Home extends React.Component {
  render (){
    return (

      <div>
        <div className="bg">
          <Container style={{color: 'white', paddingTop: '3rem'}}>
            <h3>Welcome</h3>
            <br/>
            <p>This is a website to help determine an estimate cost to repair an area suffering from a given natural disaster.  We used a combination of React, GCP, MongoDB, and possibly AI from Azure.
            <br/>Click around to learn more.
            <br/></p>
          </Container>
        </div>
      </div>
    );
  }
}
