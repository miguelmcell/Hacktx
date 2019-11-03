import { Jumbotron, Container, Card, Button, CardImg, CardTitle, CardText,
        CardHeader, CardDeck, CardColumns, CardSubtitle, CardBody,
        Form, FormGroup, Label, Input, FormText, Color } from 'reactstrap';
import { BrowserRouter as Router, Route, Link , Switch,BrowserHistory } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Marker extends Component {

    render(){
    return (
      <div className="marker"
        style={{ backgroundColor: 'red', cursor: 'pointer'}}
        title={'MARKER'}
      />
    );
  }
};

  export default Marker;
