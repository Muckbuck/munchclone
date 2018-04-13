import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {apiRequest} from './Utils.js';
import {Col, Row, Input, Button} from 'react-materialize'
import {GameForm} from './newGame.js'

const url = 'http://localhost:8000/fetchtoken?email=mucketbucket@gmail.com&password=12345678';
const response = apiRequest(url, 'GET');
const localStorage = window.localStorage;

response.then(function(data){
  console.log(data.token)
  const tokenString = data.token;
  localStorage.setItem('token', 'Bearer '+tokenString);
});



ReactDOM.render( 
  <GameForm />,
  document.getElementById('root')
);
