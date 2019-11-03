import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Jumbotron, Container, Card, Button, CardImg, CardTitle, CardText,
        CardHeader, CardDeck, CardColumns, CardSubtitle, CardBody,
        Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as serviceWorker from './serviceWorker';
import SimpleMap from './components/Maps.js';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <div>
    <div style={{marginTop: '1%', width: '50%', height: '500px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
      <h1 class="display-4" style={{fontFamily: 'Gill Sans', fontWeight: 'bold',textAlign: 'center',width: '20%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
        Disaster Info
      </h1>
      <SimpleMap/>
    </div>
  </div>,
  document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
